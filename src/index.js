import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/App';

import { ApiProvider } from './context/apiContext';

import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

import { store, persistor } from './store';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <ApiProvider>
          <Router>
            <DevSupport ComponentPreviews={ ComponentPreviews }
              useInitialHook={ useInitial }
            >
              <App/>
            </DevSupport>
          </Router>
        </ApiProvider>
      </PersistGate>
    </Provider>,
);
