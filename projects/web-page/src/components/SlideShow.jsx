// SlideShow.jsx
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from "react";
import StreamCard from "./StreamCard";

export default function SlideShow() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 324;
            scrollContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Peponcio</Typography>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        zIndex: 1,
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'gray' },
                        display: { xs: 'none', sm: 'block' },
                    }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                <Box
                    ref={scrollContainerRef}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': { display: 'none' },
                        gap: { xs: 1, sm: 2, md: 3 },
                        width: '100%',
                    }}
                >
                    {Array.from({ length: 30 }).map((_, index) => (
                        <StreamCard key={index} />
                    ))}
                </Box>

                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        zIndex: 1,
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'gray' },
                        display: { xs: 'none', sm: 'block' },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
