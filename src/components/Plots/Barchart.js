
import React,{Component} from 'react';
import Plot from 'react-plotly.js';
import './Barchart.css'

class BarChart extends Component{
    render(){
        return(
            <div>
                <Plot
                    data={[
                        {type:'bar',  x:['1-01','1-02','1-03','1-04','1-05','1-06','1-07'],
                    y:[266.0,145.9,183.1,119.3,180.3,168.5,231.8], marker: {color: 'rgb(135,206,235)' }     
                    }
                    ]}
                    layout={{width:350, height:350, title:`Bar chart of Monthly Sales`}}
                />
               
            </div>
        )
    }
}

export default BarChart;