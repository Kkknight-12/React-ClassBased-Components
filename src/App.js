import SeasonDisplay from './SeasonDisplay'

function App() {
  // shows user location
  // two argument
  // run 1 callback function on sucess
  // run 2 callback function on on failure
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

export default App;
