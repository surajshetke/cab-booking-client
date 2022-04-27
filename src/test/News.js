import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Category from './Category';


const News = ({category}) => {

  const countryArr = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt"
    ,"lv", "ma", "mx", "my" ,"ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg" ,"si","sk", "th", "tr", "tw" ,"ua", "us", "ve" ,"za" ]

  const cateoryArr = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

  const [data,setData] = useState([])
  const [country,setCountry] = useState("us")
  // const [category,setcategory] = useState("business")

  
  const handleChange = (e) =>{
    var value = e.target.value
    setCountry(value)
  }
  // const handleChangeCategory = (e) =>{
  //   var value = e.target.value
  //   setcategory(value)
  // }

  useEffect(()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=262ca29f445840a596e6301fc64290dd`)
  .then((response)=>{ return setData(response.data.articles)})
  .catch((err)=>console.log(err));
  console.log(data);
  },[country,category])

  return (
    <>
    <div>

    <select onChange={handleChange}>
    {
      countryArr.map((country)=> <option value={country} >{country}</option>)
    }
    </select>
    {/* <select onChange={handleChangeCategory}>
    {
      cateoryArr.map((country)=> <option value={country} >{country}</option>)
    }
 </select> */}
    
    {/* <h1>Suraj</h1> */}
    {
      Array.isArray(data) && data.map((news)=>{return (<div key={news.url}>
        <h2> Title - {news.title}</h2>
        <img src={news.urlToImage} height="100px" width="200px"/>
        <p><b> Author - {news.author}</b></p>
        <p>{news.content}</p>
        <p>{news.description}</p>
        <p><b>Published At</b> - {news.publishedAt} </p>
      </div>)})
    }
    </div>
    </>
  )
}

export default News;