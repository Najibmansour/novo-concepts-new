import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import React, { lazy, Suspense } from "react";


function App() {
  const Home = lazy(() => import("./screens/home/index"));
  const loading = (
   <div class="loader">
  <div class="circle">
    <div class="dot"></div>
    <div class="outline"></div>
  </div>
  <div class="circle">
    <div class="dot"></div>
    <div class="outline"></div>
  </div>
  <div class="circle">
    <div class="dot"></div>
    <div class="outline"></div>
  </div>
  <div class="circle">
    <div class="dot"></div>
    <div class="outline"></div>
  </div>
</div>
  );
  const Services = lazy(() => import("./screens/services_page.jsx"));
  const Contact = lazy(() => import("./screens/contact_page.jsx"));

  return (
    <Router>
    <Suspense fallback={loading}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
