import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <h1>Welcome to the Torre Match Application!</h1>
        <h3>See if your profile fits with these dream job</h3>
        <Footer/>
      </div>
      <Route path="/jobs" component={JobsScreen}/>
      <Route path="/profiles" component={ProfilesScreen}/>
      <Route path="/match" component={MatchScreen}/>
      <Route path="/" component={HomeScreen} exact/>
    </BrowserRouter>

  );
}

export default App;
