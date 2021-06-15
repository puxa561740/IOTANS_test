import dataJSON from './tab/zadanie.json'
import './App.css';
import TreeData from './components/TreeData';

function App() {
 
  const data = [dataJSON]

  return (
    <div className="App">
      <div className='tree'>
        <h3 className='tree_header'>Simple Tree</h3>
        <TreeData data={data}/>   
        </div> 
    </div>
  );
}

export default App;
