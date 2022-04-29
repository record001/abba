import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './fonts.css';
import line1 from "./images/line1.png"

function App() {
  return (
    <div className="App">
      <Header />
      <img className='line1' src={line1} alt="line"/>
      <Main />
      
      <Footer />

    </div>
  );
}

export default App;
