// styles
import css from "./style.css"
// tools
import { createRoot } from 'react-dom/client'
// views
import Main from './views/Main'
// react setup
document.body.innerHTML = '<div id="app"></div>'
const root = createRoot(document.getElementById('app'))
root.render(<Main />)