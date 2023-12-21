import './App.css';
import Display from './components/Display/Display.js';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js'
function App() {
  return (
    <div id="app">
      <Header />
      <Nav />
      <Display />
    </div>
  );
}

export default App;
