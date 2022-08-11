import React from 'react';
import {useState, useEffect} from 'react';
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
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import callCodes from 'country-calling-code';
// import { searchCallCode } from './countrycode.js';
import Copyright from './footer.js';




const theme = createTheme();

function SimpleDialog(props) {
  const {open, onClose} = props;

  const handleCloseHelper = () => {
    onClose(false);
  };

  return(
    <Dialog open={open} onClose={handleCloseHelper}>
      <DialogTitle>Easy WhatsApp</DialogTitle>
      <DialogContent>
        Use this tool to easily start a WhatsApp conversation without the need to save recipient phone number into your contacts.
      </DialogContent>
    </Dialog>

  )
}

function NumberForm() {
  const [open, setOpen] = useState(false);
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
    const whatsappNum = data.get('number');
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

    if(!errFlag){
      const link = 'https://api.whatsapp.com/send?phone='+whatsappNum;
      window.location.replace(link);
    }
  };

  const containsForbiddenChars = (str) => {
    if(/^\+?/.test(str)){
      console.log(str.substr(1));
      str = str.substr(1);
    }
    const forbiddenChars = /[`+!@#$%^&*()_\-=+\[\]{};':"\\|,.<>\/?~a-zA-Z]/;
    return forbiddenChars.test(str);
  }

  const handleOnChange = (field, event) => {
    resetFormError();
    console.log(getInput.value);
    const { value } = event.target;
    setInput({
      value: value
    });
  };

  const handleOpenHelper = () => {
    setOpen(true);
  };

  const handleCloseHelper = () => {
    setOpen(false);
  };

  const resetFormError = (event) => {
    setFormError(false);
    setErrorMsg({
      value: ''
    })
  }

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
              <SimpleDialog
                open={open}
                onClose={handleCloseHelper}
              />
            </Box>
          </Box>
          <Copyright sx={{mt: 15}}/>
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
