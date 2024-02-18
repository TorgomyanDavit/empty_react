import { useEffect } from 'react';
import './App.css';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['']);




  useEffect(() => {
    document.cookie = "cookieName=testCookie; expires=Thu, 18 Feb 2025 12:00:00 UTC; path=/";
    // Fetch data from Node.js server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/getToken', {
          method: 'GET',
          credentials: 'include', // Include credentials
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      
        const jsonData = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(document.cookie,"document.cookie")
    console.log(cookies,"cookies")


  }, []);
  console.log(document.cookie,"document.cookie")
  console.log(cookies,"cookies")


  return (
    <div className="App">
      <h1>Hello App</h1>
    </div>
  );
}

export default App;
