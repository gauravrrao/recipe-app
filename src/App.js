import './App.css';
import Detail from './components/Detail';
import Top_bar from './components/Top_bar';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<Top_bar/>}/>
      <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
