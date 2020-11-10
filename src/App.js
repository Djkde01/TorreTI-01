import React from 'react';
import {Route } from 'react-router-dom';
import {HashRouter as BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProfilesScreen from './screens/ProfilesScreen'
import JobsScreen from './screens/JobsScreen';
import JobMatch from './screens/JobMatch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/profiles" component={ProfilesScreen}/>
      <Route path="/jobs" component={JobsScreen}/>
      <Route path="/match" component={JobMatch}/>
      <Footer/>
      </div>
      
    </BrowserRouter>

  );
}

export default App;
