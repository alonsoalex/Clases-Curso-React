import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';
import ItemDetailConteiner from './components/itemDetailConteiner';
function App() {



  return (
    <div className="App">
   <NavBar/>
   
    <ListContainer  text={"Items"}/>


    </div>

    
  );
}

export default App;
