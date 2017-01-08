import {
  SENT_REQUEST_PENDING,
  SENT_REQUEST_FULFILLED
} from './types';

const url = 'http://ip-api.com/json/'

export const sendGetRequest = (uri) => {
  return (
    fetch(`${url}${uri}`, {
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    })
    .catch( err => {
      //TODO: Handle no network connection
      console.log(err)
    })
  )
}

export const sendRequest = () => {
  return {
    type: SENT_REQUEST_PENDING,
  }
}

export const receiveRequest = (json) => {
  return {
    type: SENT_REQUEST_FULFILLED,
    delimiters: json
  }
}

export const getIPInfo = (ip) => {
  return (dispatch) => {
    dispatch(sendRequest());
    sendGetRequest(ip)
    .then(response => response.json())
    .then(json => console.log(json))
  }
}
