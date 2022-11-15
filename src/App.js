import './assets/css/App.css';
import './assets/css/LightTheme.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<Countries/>} />
              <Route path="/country/:countryName" element={<CountryDetails />} />
            </Routes>
          </Router>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
