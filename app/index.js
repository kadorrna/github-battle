import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

import Popular from './components/Popular'

// Component is concerned of
// State
// Lifecycle
// UI



class App extends React.Component {
  render () {
    return (
      <div className='container'> 
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)