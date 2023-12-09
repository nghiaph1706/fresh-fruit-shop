import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Call, Facebook } from '@mui/icons-material';

export default function FloatingActionButtons() {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-start',
        position: 'fixed',
        zIndex: 99999,
        bottom: '20px', // Use colon instead of equals sign here
        right: '10px',
      }}
    >
      <Fab
        color="primary"
        aria-label="add"
        className="bg-accent transition-colors duration-200 hover:bg-accent-hover"
        href="https://www.facebook.com/huy.nguyen.030203"
        target="_blank"
      >
        <Facebook />
      </Fab>
      <Fab
        color="secondary"
        aria-label="edit"
        className="bg-accent transition-colors duration-200 hover:bg-accent-hover"
        href="tel:0865405630"
        target="_blank"
      >
        <Call />
      </Fab>
    </Box>
  );
}
