import React from 'react';
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';

function FooterMenu() {
  const handleFeedback = () => {
    console.log('Обратная связь');
  };

  return (
    <BottomNavigation 
      sx={{ 
        width: '50%', 
        height: '40px', 
        margin: 'auto', 
        paddingBottom: '10px', 
    
        textAlign: 'center', 
      }}
    >
      <Typography 
        variant="body2" 
        color="error" 
        sx={{ marginLeft: '10px' }} 
      >
        Быстрые действия:
      </Typography>
      <BottomNavigationAction 
        label="Обратная связь" 
        onClick={handleFeedback} 
      />
    </BottomNavigation>
  );
}

export default FooterMenu;
