import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [articles,setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-03-15&sortBy=publishedAt&apiKey=bafe0adad4714346881cd6730410d3af';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
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
