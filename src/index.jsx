import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { FocusStyleManager } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

FocusStyleManager.onlyShowFocusOnTabs();

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />)