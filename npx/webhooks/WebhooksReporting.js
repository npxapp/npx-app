const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

// Function to generate mock data for test mode
const generateMockData = (searchTerm) => {
  return {
    1: {
      GhostIcon: "PeopleIcon",
      CompleteIcon: "CheckCircleIcon",
      label: 'Stage 1 - Community Engagement',
      description: `Mock Analysis: ${searchTerm} community metrics`,
      tooltipTitle: 'Community Engagement Metrics',
      pass: Math.random() > 0.3,
      unknown: false,
      metrics: {
        activeContributors: Math.floor(Math.random() * 5000) + 1000,
        issueResolutionRate: Math.floor(Math.random() * 20) + 80,
        communityGrowth: Math.floor(Math.random() * 30) + 70
      },
    },
    2: {
      GhostIcon: "WorkIcon",
      CompleteIcon: "CheckCircleIcon",
      label: 'Stage 2 - Usage Analytics',
      description: `Mock Analysis: ${searchTerm} usage patterns`,
      tooltipTitle: 'Usage and Adoption Metrics',
      pass: Math.random() > 0.3,
      unknown: Math.random() > 0.7,
      metrics: {
        monthlyDownloads: Math.floor(Math.random() * 1000000) + 500000,
        activeVersions: Math.floor(Math.random() * 50) + 20,
        dependencyCount: Math.floor(Math.random() * 100) + 50
      },
    },
    3: {
      GhostIcon: "TimelineIcon",
      CompleteIcon: "CheckCircleIcon",
      label: 'Stage 3 - Project Health',
      description: `Mock Analysis: ${searchTerm} project status`,
      tooltipTitle: 'Project Health Metrics',
      pass: Math.random() > 0.3,
      unknown: false,
      metrics: {
        totalRepositories: Math.floor(Math.random() * 50000) + 10000,
        averageStars: Math.floor(Math.random() * 5000) + 1000,
        topProjectStars: Math.floor(Math.random() * 50000) + 10000
      },
    },
  };
};

// Function to generate real GitHub metrics
const generateGitHubMetrics = async (searchTerm) => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars`);
    const data = response.data;
    const items = data.items.slice(0, 10);
    
    // Calculate real metrics from GitHub data
    const totalRepos = data.total_count;
    const topStars = items[0]?.stargazers_count || 0;
    const averageStars = Math.round(items.reduce((acc, item) => acc + item.stargazers_count, 0) / items.length);
    const totalForks = items.reduce((acc, item) => acc + item.forks_count, 0);
    const totalIssues = items.reduce((acc, item) => acc + item.open_issues_count, 0);
    const totalWatchers = items.reduce((acc, item) => acc + item.watchers_count, 0);

    return {
      1: {
        GhostIcon: "PeopleIcon",
        CompleteIcon: "CheckCircleIcon",
        label: 'Stage 1 - Community Engagement',
        description: `Analyzing ${searchTerm} community metrics...`,
        tooltipTitle: 'Community Engagement Metrics',
        pass: totalForks > 1000,
        unknown: false,
        metrics: {
          activeContributors: totalForks,
          issueResolutionRate: Math.round((totalIssues / (totalIssues + totalForks)) * 100),
          communityGrowth: Math.round((totalWatchers / totalRepos) * 100)
        },
      },
      2: {
        GhostIcon: "WorkIcon",
        CompleteIcon: "CheckCircleIcon",
        label: 'Stage 2 - Usage Analytics',
        description: `Processing ${searchTerm} usage data...`,
        tooltipTitle: 'Usage and Adoption Metrics',
        pass: totalRepos > 10000,
        unknown: false,
        metrics: {
          monthlyDownloads: totalRepos * 100, // Estimated monthly downloads
          activeVersions: items.length,
          dependencyCount: Math.round(items.reduce((acc, item) => acc + item.size, 0) / items.length / 1000)
        },
      },
      3: {
        GhostIcon: "TimelineIcon",
        CompleteIcon: "CheckCircleIcon",
        label: 'Stage 3 - Project Health',
        description: `Analyzing ${searchTerm} project health...`,
        tooltipTitle: 'Project Health Metrics',
        pass: topStars > 5000,
        unknown: false,
        metrics: {
          totalRepositories: totalRepos,
          averageStars: averageStars,
          topProjectStars: topStars
        },
      },
    };
  } catch (error) {
    console.error('GitHub API Error:', error);
    // Fallback to mock data if GitHub API fails
    return generateMockData(searchTerm);
  }
};

// Modified route to handle both test mode and real data
router.post('/report/:test?/:number?', async (req, res) => {
  const { searchTerm } = req.body;
  const { test: isTest, number } = req.params;

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  try {
    // Ensure `isTest` is treated as a proper boolean
    const useMockData = isTest === 'true';

    // Generate either mock or real data based on test mode
    const data = useMockData ? generateMockData(searchTerm) : await generateGitHubMetrics(searchTerm);

    // Return specific number if requested
    if (number && data[number]) {
      return res.json({ [number]: data[number] });
    }

    // Return all data
    res.json(data);
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

module.exports = router;