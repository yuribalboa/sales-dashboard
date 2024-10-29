import { AppThemeProvider } from './contexts/AppThemeContext.tsx'
import { GlobalStyle } from './styles/'
import { Provider } from 'react-redux'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
)
