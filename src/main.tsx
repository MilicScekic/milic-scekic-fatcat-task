import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@homework-task/App';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Could not find root element with id 'root'");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
