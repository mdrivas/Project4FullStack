import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="app-container">
        <h1>About Our App</h1>
        <p>This site was created by Mattheos Drivas and Quillan Gee for our CPSC 458 Final! Heres a link to our GitHub and slides presentation to learn more.</p>
        <div className="button-container">
          <button className="github-button" onClick={() => window.open('https://github.com/mdrivas/Project4FullStack', '_blank')}>
            <img src={"/github.png"} alt="GitHub Logo" className="logo" />
            GitHub
          </button>
          <button className="google-button" onClick={() => window.open('https://docs.google.com/presentation/d/15uu-vaswrypXZMFTa6aCwS2IyMnw-P99XwdBO0GhWcc/edit#slide=id.g2dc074b9180_0_3', '_blank')}>
            <img src={"/google.webp"} alt="Google Logo" className="logo" />
            Slides
          </button>
        </div>
      </div>
    </Layout>
  );
}
