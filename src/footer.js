import React from 'react';
import {
  Avatar,
  Link,
  Typography,
  Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
    </footer>
  );
}
