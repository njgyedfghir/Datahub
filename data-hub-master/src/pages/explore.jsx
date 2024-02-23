import React from "react";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/Searchbar";
import "../styles/explore.css";
import { Routes, Route } from "react-router-dom";
import  Result  from "../pages/searchresult.jsx";
import Policies from "./National Strategies and Policies.jsx";
import Links from "./importanlinks.jsx";
import Explorecomp from "../components/explorecomp.jsx";
import Invlifecycle from "../pages/lnv-lifecycle.jsx"
import Business from "./Business and regulatory.jsx";
import Preimplementation from "./preimplementation.jsx";
import Operation from "./operation.jsx";
import Implementaion from "./implementaion.jsx";
import Economy from "./DataTracker/Economy.jsx";
import Infrastructure from "./DataTracker/Infrastructure.jsx";
import DoingBusiness from "./DataTracker/DoingBusiness.jsx";
import Social from "./DataTracker/Social.jsx";
import Trade from "./DataTracker/Trade.jsx";
import Investment from "./DataTracker/Investment.jsx";
import RegulatoryandStrategy from "./RegulatoryandStrategy.jsx";
import ACEServices from "./ACEServices.jsx";
import Studies from "./otherStudies.jsx";
const Explore = () => {
  return (
    <>
      <div className="w-[100%] clear-both h-max">
        <div className="w-[80%] float-left container sidediv justify-center">
          <SearchBar />
          <Routes>
            <Route path="/" exact element={<Explorecomp/>} />
            <Route path="/Regulatory-and-Strategy" exact element={<RegulatoryandStrategy/>} />
            <Route path="/National-strategies-and-policies" element={<Policies />} />
            <Route path="/Strategy-repository" element={<Result/>}/>
            <Route path="/Other-studies" element={<Studies/>}/>
            <Route path="/Important-links" element={<Links/>}/>
            <Route path="/Investment-Lifecycle" element={<Invlifecycle/>} />
            <Route path="/Buisness-and-regulatory-framework" element={<Business/>} />
            <Route path="/Investment-Lifecycle/Pre-implementation" element={<Preimplementation/>} />
            <Route path="/Investment-Lifecycle/Implementation" element={<Implementaion/>} />
            <Route path="/Investment-Lifecycle/Operation" element={<Operation/>} />
            <Route path="/Data-Repository/Economy" element={<Economy/>} />
            <Route path="/Data-Repository/Trade" element={<Trade/>} />
            <Route path="/Data-Repository/Social" element={<Social/>} />
            <Route path="/Data-Repository/Investment" element={<Investment/>} />
            <Route path="/Data-Repository/Infrastructure" element={<Infrastructure/>} />
            <Route path="/Data-Repository/Doing-Business" element={<DoingBusiness/>} />
            <Route path="/ACE-Services" element={<ACEServices/>} />
          </Routes>
          {/* <FlipBook/> */}
        </div>
        <div className="w-[20%] float-right sidenav">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Explore;