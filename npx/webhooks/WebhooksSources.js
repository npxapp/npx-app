const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

const pages = ['sof', 'sad', 'tch', 'web'];

router.get('/links/:page?', async (req, res) => {
    const page = req.params.page;

    // If no page parameter is provided, end the response
    if (!page) {
        return res.end();
    }

    // If the provided page is not in the list, return a BAD response
    if (!pages.includes(page)) {
        return res.json({ message: 'BAD' });
    }

    try {
        const results = [];

        // Loop through the list of pages
        for (const currentPage of pages) {
            const url = `https://losangeles.craigslist.org/search/${currentPage}`;
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            // Scrape the data from the page
            $('li.cl-static-search-result').each((i, el) => {
                const linkHref = $(el).find('a').attr('href');
                const titleText = $(el).find('a div.title').text().trim();
                const locationText = $(el).find('a div.location').text().trim();

                if (linkHref && titleText && locationText) {
                    results.push({
                        title: titleText,
                        link: linkHref,
                        location: locationText
                    });
                }
            });
        }

        // Return the JSON response with the scraped data
        res.json({ message: 'OK', data: results });
    } catch (error) {
        res.status(500).json({ message: 'Error scraping data', error: error.message });
    }
});

module.exports = router;