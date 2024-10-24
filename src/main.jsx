import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/app/App'
import './index.css'
import "./fontiran.css"

createRoot(document.getElementById('root')).render(
<StrictMode>
  <App />
</StrictMode>,
)

