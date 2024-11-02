import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StreamCard from './StreamCard'; // Asegúrate de tener tu componente StreamCard

const CarouselSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 elementos
    slidesToScroll: 1,
    centerMode: true, // Habilita el modo centrado
    centerPadding: '10px', // Ajusta el relleno de los elementos centrales
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box key={index} sx={{ padding: '60px' }}>
            <StreamCard />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlick;
