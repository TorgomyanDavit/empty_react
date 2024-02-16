import { useEffect } from 'react';
import './App.css';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['_csrf']);




  useEffect(() => {
    // Fetch data from Node.js server
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsss-two.vercel.app/getToken', {
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
