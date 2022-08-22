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
import {
  WhatsApp as WhatsAppIcon,
  Android as AndroidIcon,
  Apple as AppleIcon,
} from '@mui/icons-material';
// import callCodes from 'country-calling-code';
// import { searchCallCode } from './countrycode.js';
import Copyright from './footer.js';
import HelpDialog from './helpDialog.js';
import Disclaimer from './disclaimer.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



const theme = createTheme();

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

    // Check for leading +
    if(whatsappNum.includes('+')){
      whatsappNum = whatsappNum.substr(1);
    }

    // IDN Only! If input has leading 0, remove 0 and prepend 62
    // e.g. 08121234123 -> 628121234123
    if(whatsappNum.substr(0,1) === '0'){
      whatsappNum = '62' + whatsappNum.substr(1);
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
                label='Enter Number Here'
                name='number'
                placeholder='example: 62812312341234'
                error={formError}
                helperText={formError ? errorMsg.value : 'Please include country code. Indonesian numbers can start with leading 0 (e.g 0812...)'}
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

serviceWorkerRegistration.register({
  onUpdate: registration => {
    alert('New version available! Please update now.');
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  }
});
// console.log(callCodes);
