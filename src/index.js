import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
      <Router>
        <DevSupport ComponentPreviews={ ComponentPreviews }
          useInitialHook={ useInitial }
        >
          <App/>
        </DevSupport>
      </Router>
    </React.StrictMode>,
);
