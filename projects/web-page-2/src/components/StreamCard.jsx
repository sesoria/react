import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import LiveTvIcon from '@mui/icons-material/LiveTv';

// Estilos personalizados con MUI
const GradientOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  borderRadius: theme.shape.borderRadius,
  // Descomenta para efecto hover de transparencia
  // "&:hover": {
  //   opacity: 1,
  // },
}));

const CardContainer = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
  // Sombra personalizada
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
    // Alternativa para efecto de sombra más marcado:
    // boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
}));

export default function StreamCard() {
  return (
    <CardActionArea
      // Esto hace que la Card sea clicable
      onClick={() => {
        console.log("Redirigiendo...");
      }}
    >
      <CardContainer>
        <CardMedia
          component="img"
          height="140"
          image="https://example.com/your-stream-thumbnail.jpg"
          alt="Stream Thumbnail"
        />
        <GradientOverlay />
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Chip
            icon={<LiveTvIcon />}
            label="LIVE"
            color="error"
            sx={{
              fontWeight: "bold",
              // Descomenta para efecto de pulso en el icono de LIVE
              // animation: "pulse 1s infinite",
            }}
          />
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              fontWeight: "bold",
              // Descomenta para texto con sombra
              // textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Stream Title
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              // Efecto de color en hover del texto
              transition: "color 0.3s",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Some brief description of the stream...
          </Typography>
        </CardContent>
      </CardContainer>
    </CardActionArea>
  );
}
