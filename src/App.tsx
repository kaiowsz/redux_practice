import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { connect } from 'react-redux/es/exports'

function App({count}: any) {

  return (
    <div className="App">
      <div className="card">
        <button>
          count is {count}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.value
  }
}

export default connect(mapStateToProps)(App)