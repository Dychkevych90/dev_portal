import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: ${( { theme } ) => theme.text};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a, button {
    cursor: pointer;
  }
  
  body {
    //background-color: #18191a;
    background-color: ${( { theme } ) => theme.body};
  }
  
  // #11101d - side bar background
  // #001f3f arrow open/close for light mode
  // Responsive grid styles
  .container {
    max-width: 100%;
    margin: 0 auto; 
    padding: 0 20px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .column {
    flex: 0 0 100%; 
    padding: 0 10px;
  }

  /* Define specific column classes for different column widths */
  .column-1 {
    flex-basis: 8.33%; /* 1 column in a 12-column grid */
  }

  .column-2 {
    flex-basis: 16.66%; /* 2 columns in a 12-column grid */
  }

  .column-3 {
    flex-basis: 25%; /* 3 columns in a 12-column grid */
  }

  .column-4 {
    flex-basis: 33.33%; /* 4 columns in a 12-column grid */
  }

  .column-5 {
    flex-basis: 41.66%; /* 5 columns in a 12-column grid */
  }

  .column-6 {
    flex-basis: 50%; /* 6 columns in a 12-column grid */
  }

  .column-7 {
    flex-basis: 58.33%; /* 7 columns in a 12-column grid */
  }

  .column-8 {
    flex-basis: 66.66%; /* 8 columns in a 12-column grid */
  }

  .column-9 {
    flex-basis: 75%; /* 9 columns in a 12-column grid */
  }

  .column-10 {
    flex-basis: 83.33%; /* 10 columns in a 12-column grid */
  }

  .column-11 {
    flex-basis: 91.66%; /* 11 columns in a 12-column grid */
  }

  .column-12 {
    flex-basis: 100%; /* 12 columns in a 12-column grid */
  }

  /* Responsive Classes */
  @media (max-width: 640px) {
    /* Small (sm) size */
    .column-sm-1 {
      flex-basis: 8.33%;
    }
    .column-sm-2 {
      flex-basis: 16.66%;
    }
    .column-sm-3 {
      flex-basis: 25%;
    }
    .column-sm-4 {
      flex-basis: 33.33%;
    }
    .column-sm-5 {
      flex-basis: 41.66%;
    }
    .column-sm-6 {
      flex-basis: 50%;
    }
    .column-sm-7 {
      flex-basis: 58.33%;
    }
    .column-sm-8 {
      flex-basis: 66.66%;
    }
    .column-sm-9 {
      flex-basis: 75%;
    }
    .column-sm-10 {
      flex-basis: 83.33%;
    }
    .column-sm-11 {
      flex-basis: 91.66%;
    }
    .column-sm-12 {
      flex-basis: 100%;
    }
  }

  @media (max-width: 768px) {
    /* Medium (md) size */
    .column-md-1 {
      flex-basis: 8.33%;
    }
    .column-md-2 {
      flex-basis: 16.66%;
    }
    .column-md-3 {
      flex-basis: 25%;
    }
    .column-md-4 {
      flex-basis: 33.33%;
    }
    .column-md-5 {
      flex-basis: 41.66%;
    }
    .column-md-6 {
      flex-basis: 50%;
    }
    .column-md-7 {
      flex-basis: 58.33%;
    }
    .column-md-8 {
      flex-basis: 66.66%;
    }
    .column-md-9 {
      flex-basis: 75%;
    }
    .column-md-10 {
      flex-basis: 83.33%;
    }
    .column-md-11 {
      flex-basis: 91.66%;
    }
    .column-md-12 {
      flex-basis: 100%;
    }
  }

  @media (max-width: 1024px) {
    /* Large (lg) size */
    .column-lg-1 {
      flex-basis: 8.33%;
    }
    .column-lg-2 {
      flex-basis: 16.66%;
    }
    .column-lg-3 {
      flex-basis: 25%;
    }
    .column-lg-4 {
      flex-basis: 33.33%;
    }
    .column-lg-5 {
      flex-basis: 41.66%;
    }
    .column-lg-6 {
      flex-basis: 50%;
    }
    .column-lg-7 {
      flex-basis: 58.33%;
    }
    .column-lg-8 {
      flex-basis: 66.66%;
    }
    .column-lg-9 {
      flex-basis: 75%;
    }
    .column-lg-10 {
      flex-basis: 83.33%;
    }
    .column-lg-11 {
      flex-basis: 91.66%;
    }
    .column-lg-12 {
      flex-basis: 100%;
    }
  }

  /* Extra-large (xl) size and above (Default) */
  /* No specific classes for xl size, default column classes will be used */
`;

export default GlobalStyles;

const lightTheme = {
  body: '#e4e9f7',
  sidebar: '#fff',
  text: '#707070',
  fill: '#fff',
};

const darkTheme = {
  body: '#18191a',
  sidebar: '#242526',
  text: '#ccc',
};

export {
  lightTheme,
  darkTheme,
};
