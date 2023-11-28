import React from 'react';
import { createRoot } from "react-dom";
import App from './App';

const contentor = document.getElementById("root");
const origem = createRoot(contentor)

origem.render(<App />);