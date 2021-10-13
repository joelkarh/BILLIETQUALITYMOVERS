import '../src/css/App.css';
import Header from './components/Header/header';
import Main from './components/Main/main'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (

    <Router className='container-fluid'> 
      <Header/> 
      {/* <Main/> */}
      <div class="div">
        <Main/>
      </div>
      
     {/* <Footer/> */}
    </Router>
  );
}

export default App;
