import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  IconButton,
  Typography,
  Slide,
  Button,
  Tooltip,
  Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { useDarkMode } from '../../contexts/DarkMode';
import { useRegistry } from '../../contexts/RegistryContext';
import { useSlide } from '../../contexts/SlideContext';

const SlideRegistryRead = () => {
  const { darkMode } = useDarkMode();
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const { registries, setRegistries, setSelectedRegistry } = useRegistry();
  const { loading, setLoading, activeSlide, setActiveSlide, setPreviousSlide } = useSlide();

  const handleBack = (slide) => () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(slide);
  };
  
  const handleViewRegistryRead = (asset) => () => {
    setSelectedAsset(asset);
    setPreviousSlide(activeSlide);
    setActiveSlide(6);
  };

  const handleViewRegistryUpdate = (asset) => () => {
    setSelectedRegistry(asset);
    setPreviousSlide(activeSlide);
    setActiveSlide(7);
  };

  const handleViewRegistryDelete = (asset) => () => {
    setSelectedRegistry(asset);
    setPreviousSlide(activeSlide);
    setActiveSlide(8);
  };

  useEffect(() => {
    const fetchAssets = async () => {
      if (activeSlide === 5) {
        try {
          setLoading(true);
          const response = await fetch('/npx/registry/read', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          const data = await response.json();

          if (data.status === 'OK') {
            setRegistries(data.assets);
          } else {
            setRegistries([]);
          }
        } catch (error) {
          console.error(`Error fetching assets: ${error.message}`);
          setRegistries([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAssets();
  }, [activeSlide, setLoading, setRegistries]);

  const columns = [
    { 
      field: 'name', 
      headerName: 'Name', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    { 
      field: 'type', 
      headerName: 'Type', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    { 
      field: 'slug', 
      headerName: 'Slug', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    { 
      field: 'asset_status', 
      headerName: 'Asset Status', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    { 
      field: 'webhook', 
      headerName: 'Webhook', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value || 'No Webhook'}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    { 
      field: 'text', 
      headerName: 'Text', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value || 'No Text'}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    { 
      field: 'blob', 
      headerName: 'Blob', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={params.value ? 'Blob Data Present' : 'No Blob Data'}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    {
      field: 'created_at', 
      headerName: 'Created At', 
      flex: 1, 
      renderCell: (params) => (
        <Tooltip title={new Date(params.value).toLocaleString()}>
          <Button variant="text" size="small">
            Click
          </Button>
        </Tooltip>
      )
    },
    {
      field: 'read_action',
      headerName: 'Read',
      flex: 1,
      renderCell: (params) => (
        <Tooltip title="Read">
          <IconButton onClick={handleViewRegistryRead(params.row)} size="small">
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      )
    },
    {
      field: 'update_action',
      headerName: 'Update',
      flex: 1,
      renderCell: (params) => (
        <Tooltip title="Update">
          <IconButton onClick={handleViewRegistryUpdate(params.row)} size="small">
            <EditIcon />
          </IconButton>
        </Tooltip>
      )
    },
    {
      field: 'delete_action',
      headerName: 'Delete',
      flex: 1,
      renderCell: (params) => (
        <Tooltip title="Delete">
          <IconButton onClick={handleViewRegistryDelete(params.row)} size="small">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )
    }
  ];

  const detailColumns = [
    {
      field: 'fieldname',
      headerName: 'Field Name',
      flex: 1,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <Button variant="text" size="small">
            {params.value}
          </Button>
        </Tooltip>
      )
    },
    {
      field: 'value',
      headerName: 'Value',
      flex: 1,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <Button variant="text" size="small">
            {params.value}
          </Button>
        </Tooltip>
      )
    }
  ];

  const reformattedRows = registries?.flatMap((record) => [
    { id: `${record.id}-1`, fieldname: 'ID', value: `id${record.id}` },
    { id: `${record.id}-2`, fieldname: 'Name', value: record.name },
    { id: `${record.id}-3`, fieldname: 'Type', value: record.type },
    { id: `${record.id}-4`, fieldname: 'Slug', value: record.slug },
    { id: `${record.id}-5`, fieldname: 'Asset Status', value: record.asset_status },
    { id: `${record.id}-6`, fieldname: 'Webhook', value: record.webhook || 'N/A' },
    { id: `${record.id}-7`, fieldname: 'Text', value: record.text ? `${record.text.substring(0, 20)}...` : 'N/A' },
    { id: `${record.id}-8`, fieldname: 'Blob', value: record.blob ? 'Binary Data' : 'N/A' },
    { id: `${record.id}-9`, fieldname: 'Created At', value: new Date(record.created_at).toLocaleDateString() },
    {
      id: `${record.id}-10`,
      fieldname: 'Actions',
      value: (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Read">
            <IconButton onClick={handleViewRegistryRead(record)} size="small">
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Update">
            <IconButton onClick={handleViewRegistryUpdate(record)} size="small">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={handleViewRegistryDelete(record)} size="small">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ]);
  
  return (
    <>
      <Slide direction="right" in={activeSlide === 5} mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            padding: 2
          }}
        >
          <IconButton onClick={handleBack(0)}>
            <ArrowForwardIcon sx={{ color: '#61dafb' }} />
          </IconButton>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%', 
            mb: 2 
          }}>
            <Typography variant="h6" sx={{ color: '#61dafb', mr: 2 }}>
              Assets Registry
            </Typography>
            <Button 
              variant="outlined"
              color="primary"
              onClick={() => {
                setIsDetailView(!isDetailView);
              }}
              sx={{
                mr: 2,
                borderRadius: 20,
                height: 40,
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center',
                transition: 'all 0.3s ease', 
              }}
            >
              <Box 
                sx={{
                  width: '50%', 
                  display: 'flex',
                  justifyContent: 'flex-end', 
                }}
              >
                {isDetailView ? <ViewListIcon /> : <ViewModuleIcon />}
              </Box>
              <Box 
                sx={{
                  width: '50%', 
                  display: 'flex',
                  justifyContent: 'flex-start', 
                }}
              >
                {isDetailView ? 'List' : 'Detail'}
              </Box>
            </Button>
          </Box>
          {loading ? (
            <CircularProgress sx={{ color: darkMode ? '#61dafb' : '#007fff' }} />
          ) : (
            <Box sx={{ width: '100%', height: 500 }}>
              <DataGrid
                rows={isDetailView ? reformattedRows : registries || []}
                columns={isDetailView ? detailColumns : columns}
                pageSize={50}
                rowsPerPageOptions={[10, 20, 50, 100]}
                disableSelectionOnClick
                sx={{
                  '& .MuiDataGrid-cell': {
                    color: darkMode ? '#61dafb' : '#007fff'
                  }
                }}
              />
            </Box>
          )}
        </Box>
      </Slide>

      <Slide direction="left" in={activeSlide === 6} mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            padding: 2
          }}
        >
          <IconButton onClick={handleBack(5)}>
            <ArrowForwardIcon sx={{ color: '#61dafb' }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#61dafb', mb: 2 }}>
            Registry Record Details
          </Typography>
          {selectedAsset && (
            <Paper
              elevation={3}
              sx={{
                p: 3,
                width: '80%',
                backgroundColor: darkMode ? 'rgba(97, 218, 251, 0.1)' : 'rgba(0, 127, 255, 0.1)'
              }}
            >
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Name: {selectedAsset.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Type: {selectedAsset.type}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Slug: {selectedAsset.slug}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Asset Status: {selectedAsset.asset_status}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Webhook: {selectedAsset.webhook || 'N/A'}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Text: {selectedAsset.text ? `${selectedAsset.text.substring(0, 20)}...` : 'N/A'}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Blob: {selectedAsset.blob ? 'Binary Data' : 'N/A'}
              </Typography>
              <Typography variant="body1" sx={{ color: '#61dafb', mb: 1 }}>
                Created At: {new Date(selectedAsset.created_at).toLocaleDateString()}
              </Typography>
            </Paper>
          )}
        </Box>
      </Slide>
    </>
  );
};

export default SlideRegistryRead;