import { useState, useEffect } from "react";
import Card from "./Card";

export default function News({category}) {
  const [articles, setArticles] = useState([]);
  const url =
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cf8cb7023f3d4c258d58e394ee46e4e2`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    };
    fetchData();
  }, [category]);
  return (
    <>
      <h2 className="text-center mt-2">Latest <span className="badge bg-danger">News</span></h2>
    {articles.map((news,index)=>{
            return <Card key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
   </>);
}