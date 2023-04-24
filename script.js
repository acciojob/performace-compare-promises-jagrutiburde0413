
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

function fetchData(apiUrls, type) {
  const start = Date.now();
  const promises = apiUrls.map(url => fetch(url));
  
  if (type === 'all') {
    return Promise.all(promises).then(responses => {
      const end = Date.now();
      const time = end - start;
      document.getElementById('output-all').innerHTML = `${time}ms`;
      return responses;
    });
  } else if (type === 'any') {
    return Promise.any(promises).then(response => {
      const end = Date.now();
      const time = end - start;
      document.getElementById('output-any').innerHTML = `${time}ms`;
      return response;
    });
  }
}

fetchData(apiUrls, 'all');
fetchData(apiUrls, 'any');
