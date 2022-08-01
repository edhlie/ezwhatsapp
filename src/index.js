import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const theme = createTheme();

function SimpleDialog(props) {
  const {open, onClose} = props;

  const handleCloseHelper = () => {
    onClose(false);
  };

  return(
    <Dialog open={open} onClose={handleCloseHelper}>
      <DialogTitle>Easy WhatsApp</DialogTitle>
      <DialogContent>Use this tool to easily start a WhatsApp conversation without the need to save recipient phone number into your contacts</DialogContent>
    </Dialog>

  )
}

function NumberForm() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const whatsappNum = data.get('number');
    const link = 'https://api.whatsapp.com/send?phone='+data.get('number');
    window.location.replace(link);
  };

  const handleOpenHelper = () => {
    setOpen(true);
  };

  const handleCloseHelper = () => {
    setOpen(false);
  };

  // render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Avatar sx={{ m:1, bgcolor: '#4BC858'}}>
              <WhatsAppIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Start a conversation with a WhatsApp number
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt:1 }}>
              <TextField
                margin='normal'
                fullWidth
                id='number'
                label='Enter Number Here'
                name='number'
                autoFocus
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Button variant='text' onClick={handleOpenHelper}>
                Help ?
              </Button>
              <SimpleDialog
                open={open}
                onClose={handleCloseHelper}
              />

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
  // }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NumberForm />
);
