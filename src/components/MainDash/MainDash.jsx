import React from 'react';
import Cards from '../Cards/Cards'
import './MainDash.css';
import BarChart from '../Plots/Barchart';
import LineChart from '../Plots/Linechart';
import MyMap from '../MyMap/MyMap';
const MainDash=()=>{
    return(
        <div className="MainDash">
            <h1>Analysis</h1>
            <Cards/>
            <LineChart>
                
            </LineChart>
        </div>
    )
}

export default MainDash;