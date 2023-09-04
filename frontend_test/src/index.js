import React from 'react'
import { createRoot } from 'react-dom/client'

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app'))

root.render(<h1>HALO BOLD</h1>)
console.log('hello world 3')