import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import LoginBar from './components/loginBar/index'

function App() {

  return (
    <div className="App">
      {localStorage.getItem("name")? "кек" :<LoginBar/> }
    </div>
  );
}

export default App;
