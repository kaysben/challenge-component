import './css/style.css';
import About from './component/about.js';
import Conta from './component/contcat.js';
import Footer from './component/footer.js';
import Navve from './component/Navbar.js';
import Proj from './component/project.js';
function App() {
  return (
    <div className="App">
     <Navve/>
     <About/>
     <Proj/>
     <Conta/>
     <Footer/>
     
     

    </div>
  );
}

export default App;
