// import logo from './logo.svg';
// import './App.css';

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

// export default App;


// src/App.js
// import React from 'react';
// import RealEstateCalculator from './RealEstateCalculator';
// import './App.css';  // Import your CSS file here

// const App = () => {
//   return (
//     <div className="App">
//       <RealEstateCalculator />
//     </div>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import RealEstateCalculator from './RealEstateCalculator'; // Import your RealEstateCalculator component
import './App.css';  // Import your CSS file

function App() {
  return (
    <div className="App">
      {/* Render the RealEstateCalculator component */}
      <RealEstateCalculator />
    </div>
  );
}

export default App;
