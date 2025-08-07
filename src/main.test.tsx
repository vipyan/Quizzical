
import { createRoot } from 'react-dom/client'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  // use the new createRoot API
  const root = createRoot(div)
  root.render(<App />)
  // cleanup if you like
  root.unmount()
})
