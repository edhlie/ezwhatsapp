import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@mui/material';
import {
  HelpCenter as HelpCenterIcon,
} from '@mui/icons-material';

export default function HelpDialog(props) {
  const {open, onClose} = props;

  const handleCloseHelper = () => {
    onClose(false);
  }

  return(
    <Dialog open={open} onClose={handleCloseHelper}>
      <DialogTitle>Easy WhatsApp</DialogTitle>
      <DialogContent>
        <Typography gutterBottom sx={{mb:1}}>
          Easy WhatsApp is a Progressive Web App (PWA) that allows you to start a WhatsApp conversation without the need to save recipient phone number into your contacts.
        </Typography>
        <Typography gutterBottom sx={{mb:1}}>
          Easily access this app by installing it to your mobile device's home screen.
          The following link explains in detail on how to install PWAs on your device.
        </Typography>

        <Box sx={{m: 2.5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button variant='contained' href='https://web.dev/learn/pwa/progressive-web-apps/#mobile-devices'>
            <HelpCenterIcon sx={{mr: 1, fontSize:'25px'}}/>
            How to install
          </Button>
        </Box>

        <Typography sx={{fontStyle: 'italic', fontWeight: '100'}}>
          * PWAs are still not fully supported on iOS and iPadOS devices AKA your expensive iPhones and iPads :p.
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
