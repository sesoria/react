import { Box, Toolbar, Typography } from "@mui/material";
import CookiesFooter from "./components/CookiesFooter";
import Navbar from "./components/NavBar";
import StreamGrid from "./components/StreamGrid";
import SideBar from "./components/SideBar";
import Carousel from "./components/CarouselTwitch";
import { SidebarProvider } from "./context/SidebarContext";
import { useEffect, useRef } from "react";

function App() {
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      console.log('Ancho del padre:', parentWidth);
      // Aquí puedes utilizar el ancho para realizar acciones, como aplicar estilos
    }
  });
  return (
    <SidebarProvider>
      <Box component="main" display={'flex'}>
        <Navbar />
        <SideBar />
        <Box component="main" ref={parentRef} sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar></Toolbar>
          <Box display={'flex'} justifyContent={'center'} pb={3}>
            <Carousel></Carousel>
          </Box>

          <Typography sx={{ marginBottom: 2 }}>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          <StreamGrid></StreamGrid>
        </Box>
      </Box>
    </SidebarProvider>


  );
}

export default App;



