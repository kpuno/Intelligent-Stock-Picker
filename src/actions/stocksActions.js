import axios from 'axios';
import * as types from './actionTypes';
import moment from 'moment';

export function fetchStocksSuccess(dispatch, stocks) {
    dispatch({type: types.GET_STOCKS, data: stocks})
}

export function fetchStocks(symbolChoice, toolbarChoice) {
    let stocks = [];
    console.log(symbolChoice.length);
    let minDate = moment(toolbarChoice.minDate).format('DD-MM-YYYY');
    let maxDate = moment(toolbarChoice.maxDate).format('DD-MM-YYYY');

    return function(dispatch) {
        symbolChoice.forEach((symbol, i = 0) => {
            axios.get(`http://35.196.54.61:8090/api/stockhis/${symbol}/${minDate}/${maxDate}/WEEKLY`)
                .then((response) => {
                    if(stocks.length === 0) {
                        response.data.forEach((stockInfo) => {
                            let temp = {};
                            temp[stockInfo.symbol] = stockInfo.close;
                            temp["date"] = stockInfo.date;
                            stocks.push(temp);
                        })
                    } else {
                            stocks.forEach((stockInfo, i = 0) => {
                                stockInfo[response.data[i].symbol] = response.data[i].close;
                            })
                        }
                    if(i === symbolChoice.length - 1) {
                        createPortfolio(dispatch, stocks, toolbarChoice);
                        // fetchStocksSuccess(dispatch, stocks);
                    }
                })
        })
    }

    function createPortfolio(dispatch, stocks, toolbarChoice) {
        let temp = [];

        function getDiffDays(minDate, maxDate) {
            let timeDiff = Math.abs(new Date(minDate).getTime() - new Date(maxDate).getTime());
            let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays;
        }

        function getAmountToInvest(capital) {
            return capital * ( (toolbarChoice.frequency * 10) / 100);
        }

        let days = getDiffDays(toolbarChoice.minDate, toolbarChoice.maxDate);
        let amount = getAmountToInvest(toolbarChoice.capital);

        switch (toolbarChoice.weight) {
            case "Money Weighted":
                let diffAmount = amount / symbolChoice.length;
                temp.push(diffAmount);

                symbolChoice.map((symbol, i) => {
                    stocks.map((a, b) => {
                        if (b !== 0) {
                            if(i !== 0) {
                                temp[b] += diffAmount *= a[symbol] / stocks[b - 1][symbol]
                            } else {
                                temp.push(diffAmount *= a[symbol] / stocks[b - 1][symbol])
                            }
                        }
                    })
                })
                if(symbolChoice.length > 1) { temp[0] = amount }
                break;
            case "Share Weighted":
                let sumOfClose = 0;
                let stockAmount = 0;
                symbolChoice.map((symbol) => sumOfClose += stocks[0][symbol]);

                stockAmount = amount / sumOfClose;

                symbolChoice.map((symbol, i) => {
                    stocks.map((a, b) => {
                        if(i !== 0) {
                            temp[b] += a[symbol] * stockAmount;
                        } else {
                            temp.push(a[symbol] * stockAmount);
                        }
                    })
                })
                if(symbolChoice.length > 1) { temp[0] = amount }
                    break;
                default:
                    break;
        }

        for(let i = 0; i < stocks.length; i++) {
            stocks[i]["portfolio"] =  temp[i]
        }

        fetchStocksSuccess(dispatch, stocks);
    }

}
