import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import ResponsiveAppBar from './responsiveAppBar';
import Tab from './tab';


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ResponsiveAppBar />
      <Tab />
    </StyledEngineProvider>
  </React.StrictMode>
);