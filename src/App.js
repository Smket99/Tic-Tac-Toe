import React,{ Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Greet from './component/Greet';
import Hello from './component/Hello'
import Game from './component/Game'
import NameForm from './component/NameForm'
class App extends Component{
  render(){
    var element;
  let darkMode=true;
    return(
    <div>
    <Greet/>
    <hr/>
    <NameForm/>
    <hr/>
    <Game/>
    <hr/>
    <div className="footer">Made by Smiket Barodia <a href="https://github.com/Smket99/tic-tac-toe"> GitHub</a></div>
    </div>
  );
  }
}

export default App;
