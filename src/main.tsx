import { AppThemeProvider } from './contexts/AppThemeContext.tsx'
import { GlobalStyle } from './styles/'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)
