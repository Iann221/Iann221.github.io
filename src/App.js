import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
  Switch,
  Redirect
} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import HelloWorld from './pages/HelloWorld';
import About from './pages/About';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    console.log('I was triggered during render');
    return (
      // cara klo mau bikin kaya navbar
      // <Router>
      //         <ul>
      //           <li>
      //             <Link to="/helloworld">Home</Link>
      //           </li>
      //         </ul>
      //         <Routes>
      //   <Route exact path='/helloworld' element={<HelloWorld/>}></Route>
      //         </Routes>
      // </Router>

      // cara klo mau navigate aja
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/helloworld" element={<HelloWorld />} />
      </Routes>
    );
  }
}

export default App;
