import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//TEST
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import ReHome from '../src/pages/ReHome';
import ModalTestComp from './components/modal/ModalTestComp';
/* 
import ModalTestComp from '../src/components/modal/ModalTestComp';
*/
import Notice from './pages/Notice';
import Petstory from './pages/Petstory';
import 'bootstrap/dist/css/bootstrap.min.css';
// App.tsx 또는 index.tsx





function App() {
  const [showPost, setShowPost] = useState(true);
  return (
    <>
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
          <main style={{flexGrow:1}}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path="/pages/Gallery" element={<Gallery />} />
              <Route path="/pages/ReHome" element={<ReHome />} />
              <Route path="/components/modal/ModalTestComp" element={<ModalTestComp />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/petstory" element={<Petstory />} />

              
            </Routes>       
          </main>
          <Footer/>
      </div>
    </Router>
    </>
    
  );
}

export default App;
