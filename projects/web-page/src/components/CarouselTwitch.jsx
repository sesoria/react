import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fab } from "@mui/material";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const data = [
    { cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg", title: "Interstellar"},
    { cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg", title: "Inception"},
    { cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg", title: "Blade Runner 2049"},
    // Más tarjetas...
];

export default function Carousel(props) {
    const ref = React.useRef();
    return (
        <div style={{ width: "90%", position: "relative" }}>
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 5;
                    if (parentWidth <= 1440) currentVisibleSlide = 3;
                    if (parentWidth <= 1080) currentVisibleSlide = 1;
                    return (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Card}
                            slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                            carouselWidth={parentWidth}
                            data={data}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={5}
                            useGrabCursor
                        />
                    );
                }}
            />
            <>
                <Fab
                    style={{ position: "absolute", top: "40%", left: -10, zIndex: 10 }}
                    size="small"
                    color="primary"
                    onClick={() => ref.current?.goBack()}
                >
                    <ArrowBackIcon />
                </Fab>
                <Fab
                    style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
                    size="small"
                    color="primary"
                    onClick={() => ref.current?.goNext(6)}
                >
                    <ArrowForwardIcon />
                </Fab>
            </>
        </div>
    );
}

// Componente de cada tarjeta en el carrusel
export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover, title } = data[dataIndex];
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);

    // Maneja el clic solo si no ha habido arrastre
    const handleClick = () => {
        if (!isDragging) {
            navigate(`streams/${dataIndex + 1}`);
        }
    };

    return (
        <div
            style={{
                width: "100%",
                height: 300,
                userSelect: "none",
                cursor: "pointer",
            }}
            className="my-slide-component"
            onMouseDown={() => setIsDragging(false)}
            onMouseMove={() => setIsDragging(true)}
            onMouseUp={handleClick}
        >
            <img
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                }}
                draggable={false}
                src={cover}
                alt={title}
            />
        </div>
    );
});
