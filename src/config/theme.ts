import { createTheme } from '@mui/material/styles';

// Theme configuration for Dreamy
// You can modify these values to match your brand requirements

const customTheme = {
  colors: {
    // Primary brand colors - Mermaid themed
    primary: '#FF6B9C',      // Pink
    secondary: '#7EE7F1',    // Aqua blue
    accent: '#FFB6E1',       // Light pink
    
    // Background colors
    background: {
      main: '#F0FAFE',       // Very light blue
      light: '#F8FDFF',      // Almost white with blue tint
      dark: '#2B82AB',       // Deep sea blue
      gradient: 'linear-gradient(135deg, #F0FAFE 0%, #E4F6FF 100%)'
    },
    
    // Text colors
    text: {
      primary: '#2B4C5C',    // Deep blue-grey
      secondary: '#5A8599',   // Medium blue-grey
      light: '#FFFFFF',
      accent: '#FF6B9C'      // Pink
    },
    
    // Mermaid theme colors
    mermaid: {
      shell: '#FFD9E8',      // Shell pink
      coral: '#FF9E9E',      // Coral pink
      pearl: '#FFFFFF',      // Pearl white
      seaweed: '#64D6B1',    // Seaweed green
      foam: '#E4F6FF',       // Sea foam
      deep: '#2B82AB'        // Deep sea
    }
  },
  
  // Typography settings
  typography: {
    fontFamily: '"Quicksand", "Poppins", "Arial", sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '3rem'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  
  // Spacing units
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  
  // Border radius - More rounded for girly style
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    round: '50%',
    bubble: '30px'
  },
  
  // Shadows for depth
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.1)',
    large: '0 8px 24px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(255, 107, 156, 0.2)' // Pink glow
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

// Create MUI theme
export const theme = createTheme({
  palette: {
    primary: {
      main: customTheme.colors.primary,
    },
    secondary: {
      main: customTheme.colors.secondary,
    },
    background: {
      default: customTheme.colors.background.main,
      paper: customTheme.colors.background.light,
    },
    text: {
      primary: customTheme.colors.text.primary,
      secondary: customTheme.colors.text.secondary,
    },
  },
  typography: {
    fontFamily: customTheme.typography.fontFamily,
    h1: {
      fontSize: customTheme.typography.fontSize.xxl,
      fontWeight: customTheme.typography.fontWeight.bold,
    },
    h2: {
      fontSize: customTheme.typography.fontSize.xl,
      fontWeight: customTheme.typography.fontWeight.medium,
    },
    h3: {
      fontSize: customTheme.typography.fontSize.lg,
      fontWeight: customTheme.typography.fontWeight.medium,
    },
    body1: {
      fontSize: customTheme.typography.fontSize.md,
    },
  },
  shape: {
    borderRadius: parseInt(customTheme.borderRadius.md),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: customTheme.borderRadius.bubble,
          textTransform: 'none',
          fontWeight: customTheme.typography.fontWeight.medium,
        },
      },
    },
  },
});

export const customThemeProps = customTheme; 