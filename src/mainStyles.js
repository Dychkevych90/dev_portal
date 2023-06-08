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
    position: relative;
    z-index: 1;
  }
  
  .section_title {
    background: goldenrod;
    width: 400px;
    margin: 50px 0;
    padding: 5px 5px 5px 27px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    color: #000;
    font-size: 30px;
    font-weight: 700;
    animation: slideInFromLeft .5s ease-in-out;
    z-index: -1;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  a, button {
    cursor: pointer;
  }
  
  body {
    background-color: ${( { theme } ) => theme.body};
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  #tsparticles {
    position: relative;
    z-index: -1;
   }

  @media (max-width: 991px) {
    #tsparticles {
      display: none;
    }
  }
  
  
  
  // Responsive grid styles
  .container {
    width: 100%;
    //max-width: 1440px;
    margin: 0 auto; 
    padding: 0 20px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .column {
    flex: 0 0 100%; 
    padding: 0 10px;
    margin-bottom: 30px;
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
