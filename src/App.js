import React, {Component} from 'react'
import './App.css';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/sidebar/sidebar';
import MyMap from './components/MyMap/MyMap';
import BarChart from './components/Plots/Barchart';
import LineChart from './components/Plots/Linechart';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <Sidebar>
        
      </Sidebar>
      <MainDash>
        
      </MainDash>
      <MyMap>
        
      </MyMap>
      </div>
    </div>
  );
}

export default App;
