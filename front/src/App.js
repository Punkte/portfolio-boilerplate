import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopNavigation from './components/organisms/TopNavigation'
import Footer from './components/organisms/Footer'

function App() {
  return (
    <>
    <TopNavigation />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    <Footer
      email="christella.levieux@icloud.com" 
      phone="+33 6 98 92 84 01"
      links={[
          {label: "Linkedin", href: "https://www.linkedin.com/in/christella-levieux/"},
          {label: "Twitter", href: "https://twitter.com/christella_kl"},
      ]}
    />
    </>
  );
}

export default App;
