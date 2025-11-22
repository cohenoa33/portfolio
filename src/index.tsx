// src/index.tsx

import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/app.css";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
