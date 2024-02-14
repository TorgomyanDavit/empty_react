import { useEffect } from 'react';
import './App.css';

function App() {


  useEffect(() => {
    // Fetch data from Node.js server
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend.holtrinity.com/getToken', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed, e.g., for authentication
          },
          // Add credentials: 'include' if you need to send cookies along with the request
          credentials: 'include',
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(document.cookie,"document.cookie")

  }, []);
  console.log(document.cookie,"document.cookie")

  return (
    <div className="App">
      <h1>Hello App</h1>
    </div>
  );
}

export default App;
