import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Category from './pages/Category';
import Article from './pages/Article';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Forums from './pages/Forums';
import Partnerships from './pages/Partnerships';
import Advice from './pages/Advice';
import Training from './pages/Training';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/:id" element={ <Landing /> } />
            <Route path="/" element={ <Landing /> } />
            <Route path="/category/:id" element={ <Category /> } />
            <Route path="/article/:id" element={ <Article /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/disclaimer" element={ <Disclaimer /> } />
            <Route path="/policy" element={ <PrivacyPolicy /> } />
            <Route path="/conditions" element={ <TermsConditions /> } />
            <Route path="/forums" element={ <Forums /> } />
            <Route path="/partnerships" element={ <Partnerships /> } />
            <Route path="/advice" element={ <Advice /> } />
            <Route path="/training" element={ <Training /> } />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
