import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Navbar} from './components/Navbar/'
import { Header } from './components/Header';
import {TopicCardDeck } from './components/TopicCardDeck';

function App() {

  return (

<div className="App">
  <Navbar/>
  <Header/>
  <br></br>
  <TopicCardDeck/>
</div>
  );
}

export default App;
