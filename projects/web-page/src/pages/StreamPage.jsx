import { Box } from "@mui/material";
import LogsTimeline from "../components/LogsTimeline";
import Stream from "../components/Stream";

export default function StreamPage() {
    return(
        <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
            <Box component='section' flex={1} minWidth='0' sx={{ width: { xs: '100%', md: '70%' }, maxWidth: { xs: '100%', md: '70%' }, mb: { xs: 2, md: 0 }}}>
              <Stream />
            </Box>
            <Box component='section' flex={1} minWidth='0' sx={{width: { xs: '100%', md: '30%' },maxWidth: { xs: '100%', md: '30%' }}}>
              <LogsTimeline />
            </Box>
          </Box>
    )
}