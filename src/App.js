import { useEffect } from 'react';
import './App.css';

function App() {


  useEffect(() => {
      fetch('https://backend.holtrinity.com/authentication')
        .then(response => {
          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parse the response JSON
          return response.json();
        })
        .then(data => {
          // Do something with the data
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('Fetch error:', error);
        });
  },[])
  console.log(document.cookie,"document.cookie")

  return (
    <div className="App">
      <h1>Hello App</h1>
    </div>
  );
}

export default App;
