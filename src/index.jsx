import { createRoot } from 'react-dom/client';
import './index.css';
import { FocusStyleManager } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

FocusStyleManager.onlyShowFocusOnTabs();

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<Router><App /></Router>)