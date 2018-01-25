import axios from 'axios';
import * as types from './actionTypes';

export function fetchStocksSuccess(dispatch, stocks) {
    dispatch({types: types.GET_STOCKS}, data: stocks)
}

export function fetchStocks(symbolChoice, toolbarChoice) {
    let stocks = [];

    return function(dispatch) {
        symbolChoice.forEach((symbol) => {
            axios.get(`./mockdata/${symbol}.json`)
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
                })
        })
    }

}
