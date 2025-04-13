import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react';
import App from './App';
export const useIsLoggedin = createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
