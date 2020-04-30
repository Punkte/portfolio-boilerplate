import React, { useEffect } from 'react';
import {  Switch, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import TopNavigation from './components/organisms/TopNavigation'
import Footer from './components/organisms/Footer'
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  let history = useHistory()
  const goTo = path => history.push(path)
  const imgs = [
    {src: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/66618377_2474326249256677_6661246847325044736_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=PY5U49rJPukAX_7GidA&oh=cc15060f8c3323049d9300cf070bb0eb&oe=5ED3AF6F', name: 'Christella LEVIEUX'},
    {src: 'https://media-exp1.licdn.com/dms/image/C4D03AQFQnu0sykNQ1Q/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=lQLNxPkYVJY6znPI2jLkYBf7WboqGNJS9JJ81m2r_Vo', name: 'Yash PATEL'},
    {src: 'https://avatars3.githubusercontent.com/u/27449845?s=460&u=ad215cff05fc199f446e0f303255720d2637c93f&v=4', name: 'Paartheepan RAVEENTHIRAN'},
    {src: 'https://avatars3.githubusercontent.com/u/29051361?s=460&u=b4138bb12cdcd20a4f0c11677ed9f43836940de1&v=4', name: 'Maxime OGER'},
  ]
  useEffect(() => {
    imgs.forEach((img) => {
      console.log("%c" + "+", "font-size: 1px; padding: 0 " + Math.floor(500/2) + "px " + 0 + "px; line-height: " + 500 + "px; background: url(" + img.src + "); background-size: " + 500 + "px " + 500 + "px; color: transparent; background-repeat: no-repeat");
      console.log(img.name)
    })
  }, [])
  return (
    <>
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
