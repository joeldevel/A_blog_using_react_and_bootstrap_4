import React from 'react';
import NavBar from './components/NavBar';
import PostPreview from './components/PostPreview';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="jumbotron">Welcome</div>
      <main className="container">
        <section>
            <PostPreview />
            <PostPreview />
            <PostPreview />
        </section>
    </main>
    <Footer />
    </div>
  );
}

export default App;
