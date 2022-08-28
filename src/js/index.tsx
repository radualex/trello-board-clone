import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';

// Components
import { App } from '@/pages/App';

const container = document.getElementById('root');
if (container == null) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
