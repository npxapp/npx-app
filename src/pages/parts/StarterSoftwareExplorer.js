import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Slide,
  IconButton,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSlide } from '../../contexts/SlideContext';
import {
  GhostIcon,
  CompleteCheckGhostIcon,
  BouncingButton,
} from './Utils/StarterSoftwareExplorerStyles';
import { useIconUtils } from './Utils/StarterSoftwareExplorerUtils';
import { additionalIcons } from './Utils/iconData';
import { formatDataStage1, formatDataStage2, formatDataStage3 } from './Utils/formatData';
import { 
  alpha,
  useTheme,
} from '@mui/material/styles';

function invertColor(hex) {
  // Remove the '#' if it's there
  hex = hex.replace('#', '');

  // Convert hex to a number
  let color = parseInt(hex, 16);

  // Invert the color by XORing with 0xFFFFFF
  color = 0xFFFFFF ^ color;

  // Convert the inverted color back to hex
  return `#${color.toString(16).padStart(6, '0').toUpperCase()}`;
}

const StarterSoftwareExplorer = () => {
  const theme = useTheme();
  const [iconData, setIconData] = useState([]);
  const [isTestMode] = useState(false);
  const [passValue, setPassValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isReportBuilding, setIsReportBuilding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reportStages, setReportStages] = useState([
    { stage: 'Preparing', active: false },
    { stage: 'Gathering Data', active: false },
    { stage: 'Analyzing', active: false },
    { stage: 'Completed', active: false },
  ]);
  const [openTooltip, setOpenTooltip] = useState(null);
  const { activeSlide, setActiveSlide, setPreviousSlide } = useSlide();
  const {
    getIconColor,
    getIconComponent,
    getBouncingButtonStyle,
  } = useIconUtils();

  const handleSearch = () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(activeSlide + 1);
    setIsReportBuilding(true);
  };

  const handleBack = () => {
    setPreviousSlide(activeSlide);
    setActiveSlide(0);
    setIsReportBuilding(false);
    setReportStages([
      { stage: 'Preparing', active: false },
      { stage: 'Gathering Data', active: false },
      { stage: 'Analyzing', active: false },
      { stage: 'Completed', active: false },
    ]);
  };
  
  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);
      try {
        if (isTestMode) {
          const payload = {
            searchTerm: 'dummySearch'
          };

          const response = await fetch('/npx/report/true', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json();
          setIconData(data);
          setReportStages(prev =>
            prev.map(stage => ({ ...stage, active: true }))
          );
          return;
        }

        let updatedIconData = [];
        
        // Stage 1
        const response = await fetch('/npx/report/false/1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ searchTerm })
        });
        if (response.ok) {
           setLoading(false);
        }
        const data = await response.json();
        const formattedStage1 = formatDataStage1(data);
        updatedIconData.push(formattedStage1);
        setIconData([formattedStage1]);
        setReportStages(prev => prev.map((stage, i) => 
          i === 0 ? { ...stage, active: true } : stage
        ));

        // Stage 2
        const stage2Response = await fetch('/npx/report/false/2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ searchTerm })
        });
        
        if (!stage2Response.ok) throw new Error('Stage 2 failed');
        const stage2Data = await stage2Response.json();
        const formattedStage2 = formatDataStage2(stage2Data);
        updatedIconData.push(formattedStage2);
        setIconData(prev => [...prev, formattedStage2]);
        setReportStages(prev => prev.map((stage, i) => 
          i <= 1 ? { ...stage, active: true } : stage
        ));

        // Stage 3
        const stage3Response = await fetch('/npx/report/false/3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ searchTerm })
        });
        
        if (!stage3Response.ok) throw new Error('Stage 3 failed');
        const stage3Data = await stage3Response.json();
        const formattedStage3 = formatDataStage3(stage3Data);
        updatedIconData.push(formattedStage3);
        setIconData(prev => [...prev, formattedStage3]);
        setReportStages(prev => prev.map((stage, i) => 
          i <= 2 ? { ...stage, active: true } : stage
        ));

        // Final stage - mark as completed
        setReportStages(prev => prev.map((stage, i) => 
          i <= 3 ? { ...stage, active: true } : stage
        ));

      } catch (error) {
        console.error('Error generating report:', error);
        setReportStages(prev => prev.map(stage => ({ ...stage, active: false })));
        setIconData([]);
      } finally {
        setLoading(false);
      }
    };

    if (isReportBuilding) {
      fetchReport();
    }

    return () => {
      // Cleanup if needed
    };
  }, [isReportBuilding, isTestMode, searchTerm]);
  
  useEffect(() => {
    const calculatePassValue = () => {
      return iconData.reduce((total, { pass, unknown }) => {
        if (pass) total += 1;
        if (!pass) total -= 1;
        if (unknown) total -= 1;
        if (!unknown) total += 1;
        return total;
      }, 0);
    };

    setPassValue(calculatePassValue());
  }, [iconData]);

  const matchingIcon = additionalIcons.find(({ condition }) => condition(passValue));

  const { Icon, color } = matchingIcon;

  return (
    <>
      <Slide direction="right" in={activeSlide === 0} mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <TextField
              label="Search Software"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flex: 1, maxWidth: 400 }}
            />
            <Button variant="contained" onClick={handleSearch} disabled={!searchTerm}>
              Start Search
            </Button>
          </Box>
        </Box>
      </Slide>

      <Slide direction="right" in={activeSlide === 1} mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start', mb: 2 }}>
            <ArrowForwardIcon />
          </IconButton>

          {loading && (
            <>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  width: '100%', 
                  mt: 4 
                }}
              >
                <CircularProgress size={100} />
              </Box>
            </>
          )}
  
          {isReportBuilding && !loading && (
            <Box
              sx={{
                gap: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}
            >
              {iconData.map(
                (
                  { 
                    GhostIcon: GhostIconComponent, 
                    CompleteIcon, 
                    tooltipTitle, 
                    pass, 
                    unknown,
                    label,
                    description,
                    metrics,
                  }, 
                    index
                ) => {
                    const IconToUse = getIconComponent(pass, CompleteIcon);

                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        position: 'relative',
                        height: '80px',
                      }}
                    >
                      {reportStages[index]?.active && (
                        <>
                          <GhostIcon
                            component={GhostIconComponent}
                            sx={{ fontSize: '9rem', position: 'absolute', zIndex: 1 }}
                          />
                          <CompleteCheckGhostIcon
                            sx={{ fontSize: '7rem', position: 'absolute' }}
                          />
                          <Tooltip
                            title={
                              <Box display="flex" flexDirection="column" gap={2}>
                                <Box display="flex" flexDirection="row" alignItems="flex-start">
                                  {pass ? (
                                    <>
                                      <CheckIcon sx={{ color: '#00FF00', fontSize: '3vh', }} /> Pass
                                    </>
                                  ) : (
                                    <>
                                      <CancelIcon sx={{ color: 'red', fontSize: '3vh', }} /> Fail
                                    </>
                                  )}
                               </Box>
                                 {Object.entries(metrics).map(([key, value]) => (
                                   <Box display="flex" flexDirection="row" key={key} alignItems="flex-start">
                                     {value ? (
                                       <>
                                         <CheckIcon sx={{ color: '#00FF00', fontSize: '3vh', }} /> {key}: {value}
                                       </>
                                     ) : (
                                       <>
                                         <CancelIcon sx={{ color: 'red', fontSize: '3vh', }} /> {key}
                                       </>
                                     )}
                                   </Box>
                                 ))}
                               </Box>
                            }
                            placement="bottom"
                            open={openTooltip === index}
                            onClose={() => setOpenTooltip(null)}
                            PopperProps={{
                              sx: {
                                '& .MuiTooltip-tooltip': {
                                  width: '90vw',
                                  height: '50vh',
                                  maxWidth: 'none',
                                  fontSize: '3.6rem',
                                  fontFamily: 'kornucopiaregular',
                                  lineHeight: 0.3,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  textAlign: 'center',
                                  borderRadius: 20,
                                  background: alpha(invertColor(theme.palette.background.default), .9),
                                },
                                '& .MuiTooltip-arrow': {
                                  color: alpha(invertColor(theme.palette.background.default), .9),
                                },
                              },
                            }}
                            arrow
                          >
                            <IconButton
                              onClick={() =>
                                setOpenTooltip(openTooltip === index ? null : index)
                              }
                              sx={{
                                animation: `completeIconPopin 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                              }}
                            >
                              <IconToUse
                                sx={{
                                  fontSize: '7rem',
                                  color: getIconColor(pass, unknown),
                                  zIndex: 2,
                                  position: 'absolute',
                                }}
                              />
                            </IconButton>
                          </Tooltip>
                        </>
                      )}
                  
                    {reportStages[index]?.active && (
                      <Tooltip title={tooltipTitle} placement="top">
                        <BouncingButton 
                          sx={getBouncingButtonStyle(index, pass, unknown)}
                        >
                          {iconData[index].label}
                        </BouncingButton>
                      </Tooltip>
                    )}
                    </Box>
                  );
                })}

              {reportStages[3]?.active && matchingIcon && (
                <Tooltip title={`Conditional Icon ${passValue}`} placement="right">
                  <IconButton
                    sx={{
                      animation: `completeIconPopin 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: '7rem',
                        color: color,
                        opacity: 1,
                        padding: 0,
                        margin: 0,
                      }}
                    />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          )}
        </Box>
      </Slide>
    </>
  );
};

export default StarterSoftwareExplorer;