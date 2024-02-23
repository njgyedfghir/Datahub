import React from 'react';
import ImageAccordion from '../components/ImageAccordion';
import LandingPage from '../components/landingpage';
import Lifecycle from '../components/lifecycle';
import Elements from '../components/elements';
import Detail from '../components/overview';

const Home = () => {  
  return (
    <>
    <LandingPage/>
    <Detail/>
    <Lifecycle/>  
    <h1 class="text-[#173e26] text-3xl text-center font-bold pb-[40px]">Data Indicators</h1>
    <ImageAccordion/>
    <h1 class="text-[#173e26] text-3xl text-center font-bold pt-6 pb-[40px]">Regulatory Overview</h1>
    <Elements/>
    </>
  );
};

export default Home;
