import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "./css/bootstrap.css"
import "./css/styles.css"

// import Header from './components/Header/Header.jsx'
import Alert from './components/Alert/Alert.jsx'

import SectionOne from './components/SectionOne/SectionOne.jsx'
// import Footer from './components/Footer/Footer.jsx'
import Mac from './components/Pages/Mac/Mac.jsx';
import Iphone from './components/Pages/Iphone/Iphone.jsx';
import Ipad from './components/Pages/Ipad/Ipad.jsx';
import Watch from './components/Pages/Watch/Watch.jsx';
import TV from './components/Pages/TV/TV.jsx';
import Music from './components/Pages/Music/Music.jsx';
import Support from './components/Pages/Support/Support.jsx';
import Search from './components/Pages/Search/Search.jsx';
import Cart from './components/Pages/Cart/Cart.jsx';

import { Route, Routes } from 'react-router-dom'
import Four04 from './components/Pages/Four04/Four04.jsx';
import Sharedlayout from './components/Pages/Sharedlayout.jsx';
import ProductPage from './components/Pages/ProductPage/ProductPage.jsx';

function App() {
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Sharedlayout/>} >
          <Route path="/home" element={<><Alert /> <SectionOne/> </>} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<ProductPage />} />  
          {/* // :/productID represents dynamic page */}

          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path='search' element={<Search /> }/>
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>

          
          <Route path="admin" element={<></>}>
            {/* more admin pages */}
          </Route>
        
        <Route path="/abebe" element={<h1><br/><nr/>Hello ABBE</h1>} />
        <Route path="/bombaya" element={<h1><br/><nr/>BombayaE</h1>} />


        
        


      </Routes>

      

      

      {/* {console.log(5 + 5)} */}
    </>
  )
}

export default App
