import React from 'react';
import { createRoot } from 'react-dom/client';
import WindForLifeHomePage from './components/Pages/WindForLifeHomePage';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WindForLifeHomePage />);