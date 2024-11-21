import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Dashboard from './pages/Dashboard';
import CarDetail from './pages/CarDetail';
import MyPortfolio from './pages/MyPortfolio';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Contract from './pages/Contract';
import FAQ from './pages/FAQ';
import './assets/scss/App.scss';
import { ScrollTop } from './assets/js/globalFuns';

function App() {
  return (
    <Container className='dapp-cars' fluid>
      <Router>
        <LeftBar />
        <div className='right-bar'>
          <Container fluid className="">
            <RightBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cardetail" element={<CarDetail />} />
                <Route path="/myportfolio" element={<MyPortfolio />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contract" element={<Contract />} />
              </Routes>
          </Container>
        </div>
        <ScrollTop />
      </Router>
    </Container>
  );
}

export default App;
