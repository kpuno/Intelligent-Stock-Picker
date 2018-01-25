import axios from 'axios';
import * as types from './actionTypes';

export function fetchCompaniesSuccess(dispatch, filterChoice) {
    dispatch({
        type: types.GET_COMPANIES,
        data: filterChoice
    });
}

function removeDuplicateUsingSet(arr) {
    let unique_array = Array.from(new Set(arr))
    return unique_array
}

export function fetchCompanies(filterChoice) {
    let temp = [];
    let companyList = [];

    return function(dispatch) {
        // axios.get('./mockdata/indicator.json')
        axios.get('http://35.227.38.194:8092/all/indicators')
            .then((response) => {
                filterChoice.map((filterName) => {
                    switch (filterName) {
                        case "RSI":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "MACD":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "BOLL":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "SMA":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "KDJ":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "TMA":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "WILLIAM":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "HIGH":
                            companyList.push(...response.data[filterName]);
                            break;
                        case "REX":
                            companyList.push(...response.data[filterName]);
                            break;
                        default:
                            break;
                    }
                })
                companyList = removeDuplicateUsingSet(companyList);

                companyList.map((symbol, i = 0) => {
                    axios.get(`http://35.196.54.61:8090/api/stockhis/${symbol}`)
                    // axios.get(`http://localhost:8090/api/stockhis/${symbol}`)
                        .then((response) => {
                            temp.push(response.data[0])
                             if(i === companyList.length - 1){
                                 fetchCompaniesSuccess(dispatch, temp);
                             }
                        })
                })
            })
    }
}

// .then(axios.get(`http://localhost:8080/api/stockhis/${symbol}`)
//     .then((response) => {
//         companyList = removeDuplicateUsingSet(companyList);
//         temp = [];
//         companyList.map((company, i = 0) => {
//             response.data.tableinfo.filter((key) => {
//                 key.symbol === company ? temp.push(key) : ''
//             });
//             if(i === companyList.length - 1)
//                 fetchCompaniesSuccess(dispatch, temp);
//         })
//     })
// )
