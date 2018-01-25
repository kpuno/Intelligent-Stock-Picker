import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FooterPage from './Footer';

const styles = {
    gridList: {
      overflowX: 'auto',
    },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  gridTile: {
      height: '50em',
  },
  spacer: {
      height: '100px'
  },
  cards: {
      textAlign: 'center',
      fontSize: '1.2em',
      height: '125px',
      paddingTop: '10%',
  },
  title: {
      textAlign: 'center'
  },
  landing: {
    padding: 25,
    position: 'relative', // For the boxShadow
    backgroundImage: `url(./imgs/landing.jpg)`,
    backgroundColor: '#D3CAC5',
    backgroundPosition: '22% 70%',
    backgroundSize: 'cover',
    height: 400,
  },
  landingContent: {
    width: '100%',
    textAlign: 'center',
  },
  landingText: {
    color: '#fff',
    textShadow: '0 0 10px rgba(0,0,0,.85)',
    fontWeight: '300',
    lineHeight: 1.3,
    margin: '0 0 12px',
    fontSize: 33,
    textAlign: 'center',
    '@media (minWidth: 768px)': {
      fontSize: 50,
      paddingTop: 70,
    },
  },
  landingInfo: {
    color: '#fff',
    textShadow: '0 0 10px rgba(0,0,0,.85)',
    fontWeight: '400',
    fontSize: 20,
    margin: '0 0 20px',
    '@media (minWidth: 768px)': {
      fontSize: 26,
    },
  },
};

class HomePage extends Component {

    handleActive(tab) {
      alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    }

   render() {
    return (
      <div>
      <Paper square elevation={3} style={styles.landing}>
            <div style={styles.landingContent}>
              <h2 style={styles.landingText}>ISP</h2>
              <h3 style={styles.landingInfo}>Intelligent Stock PIcker</h3>
            </div>
          </Paper>
      <GridList style={styles.gridlList} cols={3}>
          <GridTile style={styles.gridTile}>
            <Card>
              <CardMedia
                overlay={<CardTitle style={styles.title} title="Filter Stocks" subtitle=""/>}>
                <div style={styles.spacer}></div>
              </CardMedia>
              <CardText style={styles.cards}>
                  <span>Allow end users to filter stocks using customized indicators. Save time scouring the web for news and information affecting your investments - delivered directly within your Portfolio.</span>
              </CardText>
              <CardActions>
                ACTIONS
              </CardActions>
            </Card>
          </GridTile>
          <GridTile style={styles.gridTile}>
              <Card>
                <CardMedia
                  overlay={<CardTitle style={styles.title} title="View Data" subtitle=""/>}>
                  <div style={styles.spacer}></div>
                </CardMedia>
                <CardText style={styles.cards}>
                    <span>Allow end users to view their potential stock growth from historical data provided by Yahoo Finance API</span>
                </CardText>
                <CardActions>
                  ACTIONS
                </CardActions>
              </Card>
          </GridTile>
          <GridTile style={styles.gridTile}>
              <Card>
                <CardMedia
                  overlay={<CardTitle style={styles.title} title="Create an Account"/>}>
                  <div style={styles.spacer}></div>
                </CardMedia>
                <CardText style={styles.cards}>
                    <span>Login with the ability to access dashboard and view your portfolio. And do some other stuff that is not implemented yet...</span>
                </CardText>
                <CardActions>
                  ACTIONS
                </CardActions>
              </Card>
          </GridTile>
      </GridList>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <Tabs>
        <Tab label="Macd" >
                 <div>
                     <h2 style={styles.headline}>Moving Average Convergence Divergence (MACD)</h2>
                     <div>
                        MACD shows how two moving average prices relate. It is calculated by subtracting the 26 day exponential moving average (EMA) from the 12 day EMA. Plotted on top of THE MACD is a 9 day EMA of the MACD triggers buy and sell signals.
                        <br /><br />
                        The MACD can be interpreted in the following ways:
                        <br /><br />
                        <ol>
                            <li><strong>Crossovers:</strong> If MACD falls below the signal line, it
                            could be a sign to sell. If it goes above, then the price is likely to rise.
                            Many people chose to wait until the cross over the signal line before making a decision.</li>
                            <li><strong>Divergence:</strong> When security moves away from the MACD, the trend is at an end.</li>
                            <li><strong>Dramatic Rise:</strong> When the MACD rises dramatically, security is overbought and will soon return to normal.</li>
                        </ol>
                        <p>
                            Learn more about MACD
                            <a href="https://www.investopedia.com/terms/m/macd.asp?ad=dirN&qo=investopediaSiteSearch&qsrc=0&o=40186"> here</a>.
                        </p>
                     </div>
                 </div>
            </Tab>
            <Tab label="RSI" >
                 <div>
                     <h2 style={styles.headline}>Relative Strength Index</h2>
                     <p>
                         The RSI is used mainly to identify the overbought or oversold conditions in
                         the trading of a commodity. The formula used to calculate RSI is: <strong>
                         100 - 100 / (1 + RS) </strong>. Note that RS is the average gain of ups during
                         the timeframe / the loss of downs during the timeframe. RSI is useful as it
                         indicates reversals in trends, both up and down, quicker than almost every
                         other method.
                     </p>
                     <p>
                        Learn more about RSI <a href="https://www.investopedia.com/terms/r/rsi.asp#ixzz4dgf3W2sT">here</a>.
                     </p>
                 </div>
             </Tab>
             <Tab label="Bands" >
                  <div>
                      <h2 style={styles.headline}>Bollinger Bands</h2>
                      <p>
                          Bollinger Bands® have a centre line which is an exponential moving average, along with two price channels above and below it.
                          It represents a moving average by adding and subtracting a standard deviation, which is a mathematical formula that measures
                          volatility and shows how the stock price deviates from its true value. Bollinger Bands® adjust to market conditions and are an
                          asset to any trader due to the fact that they can find most of the price data between the two price channels. When the prices
                          reach the bottom channel, the stocks are oversold and the buyer can buy at a low cost and profit when the price moves up toward the
                          centre line. When the prices are near the upper channel, that means the stocks are overbought and the buyer is not recommended
                          to buy at this time.
                      </p>
                      <p>
                            Learn more about Bollinger Bands® <a href="https://www.investopedia.com/terms/b/bollingerbands.asp">here</a>.
                     </p>
                  </div>
              </Tab>
          <Tab label="SMA">
               <div>
                   <h2 style={styles.headline}>Simple Moving Average</h2>
                   <p>
                   A simple moving average (SMA) is an arithmetic moving average calculated by adding the closing price of the security for a number of time periods
                   and then dividing this total by the number of time periods.
                   </p>
                   <p>
                       Learn more about Simple Moving Average <a href="https://www.investopedia.com/terms/s/sma.asp">here</a>.
                   </p>
               </div>
           </Tab>
            <Tab label="KDJ" >
                 <div>
                     <h2 style={styles.headline}>KDJ Stochastic Oscillator</h2>
                     <p>
                         In technical analysis of securities trading, the <strong>stochastic oscillator</strong> is a momentum indicator that uses support and resistance levels.
                         Dr. George Lane developed this indicator in the late 1950s. The term stochastic refers to the point of a current price in relation to its price range over
                         a period of time. This method attempts to predict price turning points by comparing the closing price of a security to its price range.
                     </p>
                     <p>
                        The 5-period stochastic oscillator in a daily timeframe is defined as follows:
                    </p>
                    <p>
                        <img src="./imgs/1st-equation.svg"/>
                        <br/>
                        <img src="./imgs/2nd-equation.svg"/>
                    </p>
                    <p>
                        where H5 and L5 are the highest and lowest prices in the last 5 days respectively, while %D is the 3-day moving average of %K (the last 3 values of %K). Usually this is a simple moving average, but can be an exponential moving average for a less standardized weighting for more recent values. There is only one valid signal in working with %D alone — a divergence between %D and the analyzed security.
                    </p>
                     <p>
                           Learn more about Stochastic Oscillator <a href="https://en.wikipedia.org/wiki/Stochastic_oscillator">here</a>.
                    </p>
                 </div>
             </Tab>
             <Tab label="TMA" >
                  <div>
                      <h2 style={styles.headline}>Triangular Moving Average</h2>
                      <p>
                          The <strong>triangular moving average</strong> (also known as the TMA) is similar to other moving averages in that it shows the average (or mean) price over a specified number of data points (usually a number of price bars). However, the triangular moving average differs in that it is double smoothed--which also means averaged twice.
                      </p>
                      <p>
                            Learn more about TMA <a href="https://www.thebalance.com/triangular-moving-average-tma-description-and-uses-1031203">here</a>.
                     </p>
                  </div>
              </Tab>
              <Tab label="WILLIAM">
                   <div>
                       <h2 style={styles.headline}>Williams %R</h2>
                       <p>
                       Williams %R, sometimes referred to as the <strong>Williams Percent Range</strong>, is a momentum indicator that measures overbought and oversold levels, comparable to a stochastic oscillator. The Williams %R is used to establish entry and exit points in the market. It compares the close of a stock to the high-low range over a period of time, typically 14 days.
                       </p>
                       <p>
                           Learn more about Williams %R <a href="https://www.investopedia.com/terms/w/williamsr.asp">here</a>.
                       </p>
                   </div>
               </Tab>
               <Tab label="HIGH">
                    <div>
                        <h2 style={styles.headline}>High</h2>
                        <p>
                        High placeholder.
                        </p>
                        <p>
                            Learn more about High<a href="">here</a>.
                        </p>
                    </div>
                </Tab>
                <Tab label="REX">
                     <div>
                         <h2 style={styles.headline}>Rex Oscillator</h2>
                         <p>
                             The <strong>Rex Oscillator</strong> is a study that measures market behavior based on the relationship of the close to the open, high and low values of the same bar. The theory behind the Rex Oscillator is that a big difference between the high and close on a bar indicates weakness. Conversely, wide disparity between the low and close indicates strength. The difference between open and close also indicates market performance.
                        </p>
                        <p>
                            The True Value of a Bar (TVB) gives us an indication of how healthy the market is. It is possible to have a negative close and a positive TVB, and vice versa. This indicates that the market is building strength on the opposing side of the trend. The Rex Oscillator is a moving average of the TVB, indicating the inertia of the market. When the Rex Oscillator turns positive in a bearish trend, a reversal is indicated. Likewise, Rex turning negative in a bull market indicates a reversal to the downside.
                       </p>
                       <p>
                            The TVB is defined as:
                        </p>
                        <p>
                            TVB = (Close-Low) + (Close - Open) - (High - Close), or = 3 * Close - (Low + Open + High)
                        </p>
                        <p>
                            Rex Oscillator (n periods) = moving average (n periods) of TVB
                         </p>
                         <p>
                             Learn more about High<a href="https://www.quantshare.com/item-1249-rex-oscillator">here</a>.
                         </p>
                     </div>
                 </Tab>
         </Tabs>
         <FooterPage/>
      </div>
    );
  }
}

export default HomePage;
