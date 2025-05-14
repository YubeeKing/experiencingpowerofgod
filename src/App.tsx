import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Calendar, ContactPg, DadMumEPG, DeptGroup, History, HomePg, Ministries, MissionVision, OnlineGiving, ShareTestimony } from './pages'
import { Footer } from './pages/components'
import AOS from "aos"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

import { FaAnglesUp } from 'react-icons/fa6'

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  function Root() {
    return (
      <div>
        <button
      className={`${visible ? 'block' : 'hidden'} fixed bottom-12 z-50 right-4 md:right-10 text-primary font-[700] bg-white rounded-full border-2 p-1.5 border-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-[1s]`}
      // aria-label="Scroll to the top"
      onClick={scrollToTop}
      // style={{ display: visible ? "inline" : "none" }}
      
      >
      {" "}
      <FaAnglesUp size={20}/>
    </button>
    {/* <button className='h-8 w-8 bg-primary fixed top-1/2 '>

    </button> */}
        <Routes>
          <Route path='/' element={<HomePg />} />
          <Route path='/online-giving' element={<OnlineGiving />} /> 
          <Route path='/ministries' element={<Ministries />} />
          <Route path='/contact' element={<ContactPg />} />
          <Route path='/daddy-and-mummy-epg' element={<DadMumEPG />} />
          <Route path='/share-testimony' element={<ShareTestimony />} />
          <Route path='/mission-vision' element={<MissionVision />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/history' element={<History />} />
          <Route path='/group' element={<DeptGroup />}/>
        </Routes>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
