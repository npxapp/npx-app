import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useDarkMode } from "../../contexts/DarkMode";

export default function SimpleSlider() {
  const { darkMode } = useDarkMode();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideColors = [
    'rgba(255, 0, 0, 0.2)',
    'rgba(255, 165, 0, 0.2)',
    'rgba(255, 255, 0, 0.2)',
    'rgba(0, 128, 0, 0.2)',
    'rgba(0, 0, 255, 0.2)',
    'rgba(75, 0, 130, 0.2)',
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        mx: "auto",
        my: 0,
        overflow: 'hidden',
      }}
    >
      <Slider
        {...settings}
        className={darkMode ? "dark-slider" : "light-slider"}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        {["See Components", "See Features", "See Updates", "See Options", "See Tools", "See Interfaces"].map((num, index) => ( 
          <div
            key={num}
            style={{
              height: '100%',
              width: "100%",
            }}
          >
            <div
              className="slide-content"
              style={{
                backgroundColor: slideColors[index],
                height: '400px', // Explicitly set height to match container
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h3
                style={{
                  fontSize: '1.6rem',
                  color: darkMode ? slideColors[index] : 'black',
                }}
              >
                {num}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-slider,
        .slick-list,
        .slick-track {
          height: 100% !important;
        }
        .slick-slide {
          height: 400px !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        .slick-slide > div {
          width: 100%;
        }
        .slick-dots {
          bottom: 10px;
        }
        .slick-dots li button:before {
          color: ${darkMode ? "#fff" : "#000"};
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: ${darkMode ? "#1abc9c" : "#000"};
        }
      `}</style>
    </Box>
  );
}