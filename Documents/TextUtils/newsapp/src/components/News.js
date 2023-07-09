import React, {useEffect, useState} from 'react'
import NewsItems from './NewsItems'
import axios from 'axios';

const News = () => {

    const [news, setNews] = useState()

    const getData = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8d351ec485cf41728003c619255f069f");
        if (response.status == 200) {
            const data = await response.json();
            console.log(data.articles);
            setNews(data.articles);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
    <div className="container my-3">
        <h2>NewsMonkey top Headlines</h2>
        <div className="row">

        {news && (news.map((item, index) => {
                return (
                    <NewsItems key={index} title={item.title} description={item.description} imageurl={item.urlToImage}/>
                )
            })
            )}
        </div>
    </div>
  )
}

export default News