import SeasonDisplay from './SeasonDisplay'
import React from 'react'

// must extend subclass -> extends React.Component
// must define render that return JSX
class App extends React.Component{
  render(){
    window.navigator.geolocation.getCurrentPosition(
    ( position ) => { console.log( position )},
    ( err ) => console.log(err)
  )
  return (
    <div className="App">
      <SeasonDisplay/>
    </div>
  );
  }
}

export default App;
