import { useRouteError } from "react-router-dom";
import { Alert, Container, Typography } from '@mui/material';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container maxWidth="md" sx={{display:'flex', flexGrow:1, justifyContent:'center', alignItems:'end'}}>
      <Alert severity="error">
        <Typography variant="h2">Oops!</Typography>
        <Typography variant="h4">An unexpected error has occurred.</Typography>
        <Typography variant="body1">{error.statusText || error.message}</Typography>
      </Alert>
    </Container>
  );
}