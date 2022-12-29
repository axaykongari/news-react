import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Navbar/> */}
        <NewsList/>
      </div>
    )
  }
}

export default App
