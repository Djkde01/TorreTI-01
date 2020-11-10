import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProfilesScreen from './screens/ProfilesScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/profiles" component={ProfilesScreen}/>
      <Footer/>
      </div>
      
    </BrowserRouter>

  );
}

export default App;
