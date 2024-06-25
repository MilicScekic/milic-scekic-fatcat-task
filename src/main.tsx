import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@homework-task/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Could not find root element with id 'root'");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
