import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavigation from './components/organisms/TopNavigation';
import ProjectDescription from './components/organisms/ProjectDescription.jsx'
import Title from './components/atoms/Title';
import Map from './components/atoms/Map';

function App() {
  const [works, setWorks] = useState(null);
  useEffect(() => {
    (async () => {
      const req = await fetch('http://punkte.fr:1337/works')
      const res = await req.json()
      setWorks(res)
    })()
  }, [])
  return (
    <Router>
    <div className="app">
    <TopNavigation/>
      <Title size="extra-large">Travaux</Title>
        {works && works.map(w => (
          <ProjectDescription
            key={w.id}
            title={w.title}
            text={w.description}
            picture={"http://punkte.fr:1337" + w.cover.url}
          />
        ))}
      </div>
      <Map />
    </Router>
  );
}

export default App;
