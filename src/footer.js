import React, {useState} from 'react';
import {
  Button,
  Box,
  Link,
  Typography,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import Disclaimer from './disclaimer.js';



export default function Copyright(props) {
  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  const handleCloseDisclaimer = () => {
    setOpenDisclaimer(false);
  };

  const yearStart = 2022;
  const yearEnd = new Date().getFullYear();
  let yearString = '';
  if (yearEnd === yearStart) {
    yearString = yearStart
  }
  else {
    yearString = yearStart + ' - ' + yearEnd;
  }

  return (
    <footer>
      <Typography variant='body2' color='text.secondary' align='center' {...props}>
        <Link color='inherit' href='https://linkedin.com/in/edwardhlie'>
          <LinkedInIcon sx={{m:1, fontSize:'35px'}}/>
        </Link>
        <Link color='inherit' href='https://github.com/edhlie'>
          <GitHubIcon sx={{m:1, fontSize:'35px'}}/>
        </Link>
      </Typography>
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
      <Typography sx={{textAlign: 'center', fontSize: 11}}>
        © {yearString} Textaway.app
      </Typography>
    </footer>
  );
}
