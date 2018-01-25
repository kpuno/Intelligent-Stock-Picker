import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardChoice from '../../components/CardChoice';
import Tables from '../../components/Tables';
import Toolbars from '../../components/Toolbars';
import Charts from '../../components/Charts';
import {fetchCompanies} from '../../actions/companyActions';
import {fetchStocks} from '../../actions/stocksActions';
import Dialog from 'material-ui/Dialog';

import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  gridList: {
    overflowX: 'auto',
  },
  gridList2: {
    overflowX: 'none',
    marginTop: '50px'
 },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  gridTile: {
      height: '50em',
  }
};

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterChoice: [],
            symbolChoice: [],
            open: false,
            alertText: ''
        }

        this.filterChoiceClicked = this.filterChoiceClicked.bind(this);
        this.symbolClicked = this.symbolClicked.bind(this);
        this.onToolbarClick = this.onToolbarClick.bind(this);
        this.fetchCompanyClicked = this.fetchCompanyClicked.bind(this);
    }

    handleOpen = () => {
        this.setState({open: true});
      };

      handleClose = () => {
        this.setState({open: false});
      };

    symbolClicked(name) {
        let checked = this.state.symbolChoice;
         if(checked.indexOf(name) !== -1) {
            checked = checked.filter(n => n !== name);
        } else {
            checked.push(name);
        }
        this.setState({ symbolChoice: checked });
    }

    filterChoiceClicked(name) {
        let checked = this.state.filterChoice;
         if(checked.indexOf(name) !== -1) {
            checked = checked.filter(n => n !== name);
        } else checked.push(name);
        this.setState({ filterChoice: checked });
    }

    onToolbarClick(toolbarChoice) {
        if(this.state.symbolChoice.length === 0) {
            this.setState({alertText: 'Please choose a company'})
            this.handleOpen();
        } else if(toolbarChoice.maxDate > new Date()) {
            this.setState({alertText: 'Max date must be today or before today'})
            this.handleOpen();
        } else if(toolbarChoice.minDate > new Date()) {
            this.setState({alertText: 'Min date must be before today'})
            this.handleOpen();
        } else if(toolbarChoice.capital < 10000) {
            this.setState({alertText: 'Initial capital must be greater than $10,000'})
            this.handleOpen();
        } else if(toolbarChoice.weight === '') {
            this.setState({alertText: 'Please choose a weight distribution'})
            this.handleOpen();
        } else {
            this.props.fetchStocks(this.state.symbolChoice, toolbarChoice);
        }
    }

    fetchCompanyClicked() {
        if(this.state.filterChoice.length === 0) {
            this.setState({alertText: 'Please chose an indicator'})
            this.handleOpen();
        } else this.props.fetchCompanies(this.state.filterChoice)
    }

    render() {
        return (
          <div>
              <GridList style={styles.gridlList} cols={5}>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="MACD" title="MACD" subtitle="Indicator"
                            text={"Moving average convergence divergence (MACD) is a trend-following" +
                                  "momentum indicator that shows the relationship between two moving averages " +
                                  "of prices. The MACD is calculated by subtracting the 26-day exponential moving " +
                                  "average (EMA) from the 12-day EMA.t"} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="RSI" title="RSI" subtitle="Indicator"
                            text={"The Relative Strength Index (RSI), developed by J. Welles Wilder, is a momentum " +
                                "oscillator that measures the speed and change of price movements. The RSI oscillates " +
                                "between zero and 100. Traditionally the RSI is considered overbought when above 70 " +
                                "and oversold when below 30."} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="BOLL" title="Bollinger Bands" subtitle="Indicator"
                            text={"Bollinger Bands are a volatility indicator similar to the Keltner channel. Bollinger Bands " +
                                "consist of: an N-period moving average (MA) an upper band at K times an N-period standard " +
                                "deviation above the moving average (MA + Kσ) a lower band at K times an N-period standard " +
                                "deviation below the moving average (MA − Kσ)"} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="SMA" title="Simple Moving Average" subtitle="Indicator"
                            text={"A simple moving average (SMA) is an arithmetic moving average calculated by adding the " +
                                "closing price of the security for a number of time periods and then dividing this total by the " +
                                "number of time periods. ... Short-term averages can act as levels of support when the price " +
                                "experiences a pullback."} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="KDJ" title="KDJ Stochastic Oscillator" subtitle="Indicator"
                            text={"The KDJ indicator is actually a derived form of the Slow Stochastic with the only difference " +
                                "being an extra line called the J line. The J line represents the divergence of the %D value from the " +
                                "%K. The value of J can go beyond [0, 100] for %K and %D lines on the chart."} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  </GridList>
                  <GridList style={styles.gridList2} cols={5}>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="TMA" title="TMA" subtitle="Indicator"
                            text={"The triangular moving average (also known as the TMA) is similar to other moving averages " +
                            "in that it shows the average (or mean) price over a specified number of data points (usually a number " +
                            "of price bars). However, the triangular moving average differs in that it is double smoothed--which" +
                            " also means averaged twice."} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="WILLIAM" title="Williams %R" subtitle="Indicator"
                            text={"Williams %R, sometimes referred to as the Williams Percent Range, is a momentum indicator that" +
                            "that measures overbought and oversold levels, comparable to a stochastic oscillator. The Williams %R is" +
                            "used to establish entry and exit points in the market. It compares the close of a stock to the high-low range over a period of time, typically 14 days."}
                            cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="HIGH" title="High" subtitle="Indicator"
                            text={"High placeholder"} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
                  <GridTile style={styles.gridTile}>
                      <CardChoice name="REX" title="RexOscillator" subtitle="Indicator"
                            text={"The Rex Oscillator is a study that measures market behavior based on the relationship of the close" +
                            " to the open, high and low values of the same bar. The theory behind the Rex Oscillator is that a big difference" +
                            " between the high and close on a bar indicates weakness. Conversely, wide disparity between the low and close " +
                            "indicates strength. The difference between open and close also indicates market performance."} cbClick={this.filterChoiceClicked}/>
                  </GridTile>
              </GridList>
              <br/><br/><br/>
              <RaisedButton onClick={this.fetchCompanyClicked} label="Submit" primary={true}/>
              <br/><br/>
              <Card>
                <CardHeader title="Stock Result" subtitle=""/>
                <CardActions>
                </CardActions>
                <CardText>
                    <Tables companies={this.props.companies} symbolClicked={this.symbolClicked}/>
               </CardText>
            </Card>
            <Toolbars onToolbarClick={this.onToolbarClick}/>
            <Charts stockList={this.state.symbolChoice} stocks={this.props.stocks}/>
            <Dialog
              title="Error"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              {this.state.alertText}
            </Dialog>
          </div>
        );
    }
}

function mapStateToProps(state) {
	return { companies: state.companies, stocks: state.stocks };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchCompanies, fetchStocks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
