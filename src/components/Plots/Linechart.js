import React, { Component } from 'react';
import Plot from 'react-plotly.js';
class LineChart extends Component{
    constructor(props){
        super();
        this.state={data:[]}
    }
    componentDidMount(){
        const endpoint='https://data.cityofnewyork.us/resource/rc75-m7u3.json';
        fetch(endpoint)
            .then(response=> response.json())
            .then(data=>{
                this.setState({data: data})
            })
    }

    addTraces(data){
        let traces=[];
        let dates=[];
        let lines={'Case_Count':{'y':[]}, 'Death_count':{'y':[]}, 'Hospitalized_Count':{'y':[]}};
        data.map(each =>{
            dates.push(each.date_of_interest)
            lines.Case_Count.y.push(each.case_count);
            lines.Death_count.y.push(each.death_count);
            lines.Hospitalized_Count.y.push(each.hospitalized_count);
        })
        console.log(lines)
        for(const [key, value] of Object.entries(lines)){
            traces.push({
                type:'scatter',
                mode:'lines',
                x:dates,
                y:value.y,
                name:key
            })
        }
        return traces;

    }
    render(){
        return(
            <div>
                <Plot
                    data={this.addTraces(this.state.data)}
                    layout={{width:1000, height:500, title:'Line Chart of Covid Cases'}}
                />
            </div>
        )
    }
}

export default LineChart;