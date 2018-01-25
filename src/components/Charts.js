import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import moment from 'moment';

const data = [{
    "symbol": "TEMP",
    "close": 951.679993,
    "open": 957.000000,
    "vol": 952400,
    "adj": 951.679993,
    "high": 960.390015,
    "low": 950.690002,
    "date": "2017-10-04"
}];

// create new objects with symbols each having the high

const tickFormatter = (tick) => moment(tick).format('HH:mm');

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolio: []
        }
    }

    formatXAxis(tickItem) {
        return moment(tickItem).format('MMM Do YY')
    }

    returnLines(stockSymbol, key) {
        console.log('HERE AGAINA!');
        return(
            <Line type="monotone" dataKey={stockSymbol} activeDot={{r: 8}} stroke={'#' +
            Math.floor(Math.random()*16777215).toString(16)}  key={"lines-"+key++}/>
        )
    }

    defaultChart() {
        return(
            <ResponsiveContainer width="100%" aspect={3/1}>
                <LineChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                   <XAxis dataKey=""/>
                   <YAxis/>
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip/>
                   <Legend />
                   <Line type="monotone" dataKey="" stroke="#8884d8" activeDot={{r: 8}}/>
              </LineChart>
          </ResponsiveContainer>
        )
    }

    render() {
        return(
            <div>
                {this.props.stocks.length !== 0  ?
                    <ResponsiveContainer width="100%" aspect={3/1}>
                        <LineChart width={600} height={300} data={this.props.stocks}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                           <XAxis dataKey="date" tickFormatter={this.formatXAxis}/>
                           <YAxis/>
                           {/*this.props.stockList.map((x, key=0) => this.returnLines(x, key))*/}
                           <Line type="monotone" dataKey="portfolio" activeDot={{r: 8}} stroke="#00ACC1"/>
                           <CartesianGrid strokeDasharray="3 3"/>
                           <Tooltip/>
                           <Legend/>
                      </LineChart>
                  </ResponsiveContainer>
                    : this.defaultChart()}
            </div>
        )
    }
}

export default Charts;
