import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import AndroidIcon from '@mui/icons-material/Android';
// import AppleIcon from '@mui/icons-material/Apple';
import {
  WhatsApp as WhatsAppIcon,
  Android as AndroidIcon,
  Apple as AppleIcon,
} from '@mui/icons-material';
// import callCodes from 'country-calling-code';
// import { searchCallCode } from './countrycode.js';
import Copyright from './footer.js';
import Disclaimer from './disclaimer.js';




const theme = createTheme();

function HelpDialog(props) {
  const {open, onClose} = props;

  const handleCloseHelper = () => {
    onClose(false);
  };

  return(
    <Dialog open={open} onClose={handleCloseHelper}>
      <DialogTitle>Easy WhatsApp</DialogTitle>
      <DialogContent>
        <Typography gutterBottom sx={{mb:1}}>
          Use this tool to easily start a WhatsApp conversation without the need to save recipient phone number into your contacts.
        </Typography>
        <Typography gutterBottom sx={{mb:1}}>
          Easily access this website as a bookmark on your mobile device's home screen by following these instructions:
        </Typography>
        <Typography>
        <Box sx={{ width: '100%'}}>
          <List>
            <ListItem>
              <ListItemButton target='_blank' rel='noopener' href='https://bit.ly/3Al9IW1'>
                <ListItemIcon>
                  <AndroidIcon/>
                </ListItemIcon>
                <ListItemText primary="Browsers on Android" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton target='_blank' rel='noopener' href='https://apple.co/3Po99io'>
                <ListItemIcon>
                  <AppleIcon/>
                </ListItemIcon>
                <ListItemText primary="Safari on iOS" />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
        </Typography>
      </DialogContent>
    </Dialog>

  )
}

function NumberForm() {
  const [openHelper, setOpenHelper] = useState(false);
  const [openDisclaimer, setOpenDisclaimer] = useState(false);
  const [formError, setFormError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    value: ''
  })
  const [getInput, setInput] = useState({
    value: ''
  });

  const handleSubmit = (event) => {
    let errFlag = false;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let whatsappNum = data.get('number');
    if(!whatsappNum) {
      errFlag = true;
      setFormError(true);
      setErrorMsg({
        value: 'Field is empty'
      })
    }
    else if(containsForbiddenChars(whatsappNum)){
      errFlag = true;
      setFormError(true);
      setErrorMsg({
        value: 'Contains forbidden characters. Please enter numbers only'
      })
    }

    if(whatsappNum.includes('+')){
      whatsappNum = whatsappNum.substr(1);
    }

    if(!errFlag){
      const link = 'https://api.whatsapp.com/send?phone='+whatsappNum;
      window.location.replace(link);
    }
  };

  const containsForbiddenChars = (str) => {
    if(/^\+?/.test(str)){
      str = str.substr(1);
    }
    const forbiddenChars = /[`+!@#$%^&*()_\-=+\[\]{};':"\\|,.<>\/?~a-zA-Z]/;

    return forbiddenChars.test(str);
  }

  const handleOnChange = (field, event) => {
    resetFormError();
    const { value } = event.target;
    setInput({
      value: value
    });
  };

  const handleOpenHelper = () => {
    setOpenHelper(true);
  };

  const handleCloseHelper = () => {
    setOpenHelper(false);
  };

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  const handleCloseDisclaimer = () => {
    setOpenDisclaimer(false);
  };

  const resetFormError = (event) => {
    setFormError(false);
    setErrorMsg({
      value: ''
    })
  };

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
            <Box component='form' onSubmit={handleSubmit} sx={{ mt:1 }}>
              <TextField
                onChange={(event) => handleOnChange('input', event)}
                margin='normal'
                fullWidth
                id='number'
                label='Enter Number Here (include country code)'
                name='number'
                placeholder='example: 62812312341234'
                error={formError}
                helperText={formError ? errorMsg.value : ''}
                autoFocus
              />
              <Button
                sx={{ mt:1, mb: 2 }}
                type='submit'
                fullWidth
                variant='contained'
              >
                Submit
              </Button>
              <Button variant='text' onClick={handleOpenHelper}>
                Help ?
              </Button>
              <HelpDialog
                open={openHelper}
                onClose={handleCloseHelper}
              />
            </Box>
          </Box>
          <Copyright sx={{mt: 18}}/>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              mt: 1
            }}
          >
            <Button sx={{color:'#000', fontSize:'10px', fontWeight:'400', textTransform:'none'}} size='small' variant='text' onClick={handleOpenDisclaimer}>
              Disclaimer, Terms of Use and Privacy Policy
            </Button>
            <Disclaimer
              open={openDisclaimer}
              onClose={handleCloseDisclaimer}
            />
          </Box>
        </Container>
      </ThemeProvider>
    )
}
// TODO: Add country code field


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NumberForm />
);

// console.log(callCodes);
