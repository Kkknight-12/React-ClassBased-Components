import SeasonDisplay from './SeasonDisplay';
import { Component } from 'react';

// must extend subclass -> extends React.Component
// must define render that return JSX
class App extends Component{
    constructor(props) {
      super(props);

      this.state = { lat: null };

      // this will run when we create instance
      window.navigator.geolocation.getCurrentPosition(
      ( position ) => { 
        // only place we are calling setState!!!
        // any time you change your setState will cause component  to re-render()
        this.setState( { lat: position.coords.latitude });
      },
      ( err ) => console.log( err )
    )
  }

  // render method inside the component is called frequently
  render(){
  return (
    <div className="App">
      <SeasonDisplay>
      <div>Latitude: {this.state.lat}</div>
      </SeasonDisplay>
    </div>
  );
  }
}

export default App;
