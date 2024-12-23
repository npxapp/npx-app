import { useState, useEffect } from 'react';

// Custom hook that accepts a type parameter
export const useNavigationLinks = (assetType = 'mobile') => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('/npx/registry/read', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();

        if (data.status === 'OK') {
          // Filter assets by the provided type parameter
          const filteredLinks = data.assets
            .filter(asset => asset.type === assetType)
            .map(asset => ({
              path: asset.webhook || '/',
              label: asset.text || 'Untitled Link',
              summary: asset.name || 'Overview',
              asset_status: asset.asset_status || 'Status',
            }))
            .sort((a, b) => {
              const statusA = parseInt(a.asset_status) || Infinity;
              const statusB = parseInt(b.asset_status) || Infinity;
              return statusA - statusB;
            });

          setLinks(filteredLinks);
        }
      } catch (error) {
        console.error(`Error fetching ${assetType} links: ${error.message}`);
        setLinks([]);
      }
    };

    fetchLinks();
  }, [assetType]); // Add assetType to dependency array

  return links;
};

// Component with type parameter
const DynamicNavigationLinks = ({ type = 'mobile' }) => {
  const links = useNavigationLinks(type);
  return links; // Or return JSX if needed
};

export default DynamicNavigationLinks;