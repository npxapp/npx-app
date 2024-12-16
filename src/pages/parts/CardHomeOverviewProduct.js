import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';

export function CardHomeOverviewProduct() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Gzipped Tarball');

  const navigateOpen = (header, url) => {
    navigate(url);
    setSelectedFilter(header);
  };
  
  return (
    <Card variant="action">
        <CardHeader
          variant="action"
          title="Starter kit with simple components"
          action={
            <ElectricBoltTwoToneIcon />         
          }
        />
        <CardContent variant="action">
            <Button
              key="Starter kit parts"
              variant="outlined"
              onClick={() => navigateOpen('Starter kit parts', '/Demo')}
              className={`demo-button ${selectedFilter === `Starter kit parts` ? 'selected' : ''}`}
            >
              More about integrations
            </Button>
        </CardContent>
    </Card>
  );
}