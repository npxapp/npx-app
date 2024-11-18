import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function TIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <text 
          x="12" 
          y="17" 
          font-size="16" 
          text-anchor="middle" 
          fill="#007fff"
          style={{ fontFamily: 'sans-serif' }}
        >
          t
        </text>
      </svg>
    </SvgIcon>
  );
}

export default TIcon;



