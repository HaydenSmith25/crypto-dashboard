import { useEffect } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news15.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news15.p.rapidapi.com",
        "x-rapidapi-key": "2cff0e9c19msh96c7d87bce15d5fp1e8c6ajsn6c0a1f532305",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const firstSevenArticles = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {firstSevenArticles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
