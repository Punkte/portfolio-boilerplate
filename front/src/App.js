import React, { useEffect } from 'react';
import {  Switch, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import TopNavigation from './components/organisms/TopNavigation'
import Footer from './components/organisms/Footer'
import Contact from './pages/Contact';
import About from './pages/About';
import Konami from 'react-konami-code';
import KonamiCode from './components/KonamiCode'

function App() {
  let history = useHistory()
  const goTo = path => history.push(path)
  useEffect(() => {
    console.log({konamiCode: '↑ ↑ ↓ ↓ ← → ← →'})
  }, [])
  return (
    <>
    <Konami action={KonamiCode} code={[38,38,40,40,37,39,37,39]}></Konami>
    <TopNavigation
      homeClick={() => goTo('/')}
      contactClick={() => goTo('/contact')}
      aboutClick={() => goTo('/about')}
    />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
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
