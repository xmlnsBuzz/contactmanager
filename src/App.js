import React, { Component } from 'react'; // import React from 'react'; 와 무슨차이냐?
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'; // 경로가 node_modules로 자동으로 설정되는 모양이다.
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
               <Contacts />
            </div>
         </div>

      );
   }
}


export default App;
