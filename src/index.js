import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Redirect from 'react-router-dom';

const theme = createTheme();

class NumberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const whatsappNum = data.get('number');
    const link = 'https://api.whatsapp.com/send?phone='+data.get('number');
    window.location.replace(link);
  };

  render() {
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
            }}
          >
            <Typography component="h1" variant="h5">
              Enter WhatsApp enabled number
            </Typography>
            <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt:1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="number"
                label="Enter Number Here"
                name="number"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NumberForm />
);
