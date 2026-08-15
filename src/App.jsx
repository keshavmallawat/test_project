import React from 'react';
import './App.css';

function App() {
  const features = [
    {
      icon: "✨",
      title: "Rich Aesthetics",
      description: "Experience a stunning, vibrant design that feels modern, premium, and visually captivating from the very first glance."
    },
    {
      icon: "🚀",
      title: "Dynamic Design",
      description: "Alive and responsive interface with micro-animations and smooth transitions that encourage user interaction."
    },
    {
      icon: "🔮",
      title: "Glassmorphism",
      description: "Sleek frosted glass effects with translucent backgrounds, bringing depth and context to the application."
    }
  ];

  return (
    <>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <main className="app-container">
        <section className="hero">
          <h1>Next-Gen Experience</h1>
          <p>
            Welcome to a premium, beautifully crafted React application. 
            Built with modern web standards, prioritizing visual excellence, 
            fluid animations, and a dynamic user experience.
          </p>
          <div className="cta-group">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Explore Features</button>
          </div>
        </section>

        <section className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
