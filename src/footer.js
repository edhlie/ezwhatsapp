import React from 'react';
import {
  Link,
  Typography,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';


export default function Copyright(props) {
  return (
    <footer>
      <Typography variant='body2' color='text.secondary' align='center' {...props}>
        <Link color='inherit' target='_blank' rel='noopener' href='https://linkedin.com/in/edwardhlie'>
          <LinkedInIcon sx={{m:1, fontSize:'35px'}}/>
        </Link>
        <Link color='inherit' target='_blank' rel='noopener' href='https://github.com/edhlie'>
          <GitHubIcon sx={{m:1, fontSize:'35px'}}/>
        </Link>
      </Typography>
      <Typography sx={{pt:3, fontSize:'10px', textAlign:'center'}}>
        <Link color='#000' underline='none' target='_blank' rel='noopener' href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">
          Whatsapp favicon created by Freepik - Flaticon
        </Link>
      </Typography>
    </footer>
  );
}
