
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([]);
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-03-15&sortBy=publishedAt&apiKey=bafe0adad4714346881cd6730410d3af';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])

  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-03-15&sortBy=publishedAt&apiKey=bafe0adad4714346881cd6730410d3af';
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  return (
    <div className="App">
      <h1>Headlines : {articles.length}</h1>
      {
        articles.map( article => <News article= {article} ></News>)
      }
    </div>
  );
}

export default App;
