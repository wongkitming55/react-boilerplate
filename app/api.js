export function apiCall(url) {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('Accept', '*/*');
  request.setRequestHeader('Content-Type', 'text/x-gwt-rpc; charset=UTF-8');
  request.withCredentials = true;
  request.send();
}
