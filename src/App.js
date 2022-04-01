
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Layouts/Navbar';
import Item from './Items/Item';
import ItemAdd from './Items/ItemAdd';
import ItemEdit from './Items/ItemEdit';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element ={<About />}>About</Route>
        <Route path="/home" element ={<Home />}>Home</Route>
        <Route path="/contact" element ={<Contact />}>Contact</Route>
        <Route path="/Items/:id" element={<Item />}> Item</Route>
        <Route path="/Items/Add" element={<ItemAdd />}>ItemAdd</Route>
        <Route path="/Items/edit/:id" element={<ItemEdit/>}>ItemEdit</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
