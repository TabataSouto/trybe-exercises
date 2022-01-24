// import logo from './logo.svg';
import './App.css';
import cuteCat from './cuteCat.webp'
import Image from './Image';


function App() {
  return (
    <div className="App">
      <Image source={cuteCat} alternativeText="Cute cat staring"/>
    </div>
  );
}

export default App;
