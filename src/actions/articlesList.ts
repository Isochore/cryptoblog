import { Dispatch } from 'redux';


export const fetchChargePointList = (token: string) => (dispatch:Dispatch) => {

    let headers = new Headers();

    // headers.set('Authorization', 'Bearer ' + token);

    // ${global_url}${url_borne}tokens

    return fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=968eb88304e84a5eab0b2f367f95b5cf`, {

    method: 'GET',
    headers: headers,
    // body: { email: email, password: password },
    // body: formdata,
    // mode: "no-cors"
    })
    .then(res => res.json())
    .then(response => {
        console.log('👁👁👁👁👁', response);
    dispatch({
        type: 'FETCH_ARTICLE_LIST',
        payload: response
    })
    }).catch(function(error) {
    });
}