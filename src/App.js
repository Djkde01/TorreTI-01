import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Footer/>
      </div>
      
      <Route path="/" component={HomeScreen} exact/>
      
    </BrowserRouter>

  );
}

export default App;
