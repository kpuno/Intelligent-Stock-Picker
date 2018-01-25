import axios from 'axios';
import * as types from './actionTypes';

export function createPortfolioSuccess(dispatch, portfolio) {
    dispatch({type: types.CREATE_PORTFOLIO,data: portfolio});
}

export function createPortfolio(minDate, maxDate, capital, frequency,
    weight, symbolChoice, stocks) {

    let temp = [];

    function getDiffDays(minDate, maxDate) {
        let timeDiff = Math.abs(new Date(minDate).getTime() - new Date(maxDate).getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }

    function getAmountToInvest(capital) {
        return capital * ( (frequency * 10) / 100);
    }

    let days = getDiffDays(minDate, maxDate);
    let amount = getAmountToInvest(capital);

    switch (weight) {
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

    return function(dispatch) {
        createPortfolioSuccess(dispatch, temp)
    };
}
