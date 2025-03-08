import React,{ useEffect,useState } from 'react'
import"./News.css"
//A function used to render data using specific API
const News = () => {

    const [mynews, setMyNews] = useState([ ]);   
    const fetchData = async () => {
        let response = await fetch ("https://newsapi.org/v2/top-headlines?country=us&apiKey=a93fd83820864f8cb541aea422562c69");
        let data = await response.json();
        setMyNews(data.articles)
    }

    useEffect(() => {
        fetchData();

    },[])

  return (

    <>
                <div className="mainDiv">

    {
        mynews.map ((ele)=>{
            console.log(ele)
            return(
                <>
            <div class="card" style={{width: "380px",height:"400px",marginLeft:"2rem",marginTop:"2rem"}} >
        
  <img src={ele.urlToImage==null? "https://static.dw.com/image/71827368_6.jpg": ele.urlToImage } class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele.author}</h5>
    <p class="card-text">
        {ele.title}
    </p>
    <a href={ele.url} target="_blank" class="btn btn-primary">Read More..</a>
  </div>
</div>  
                </>

            )
        }) 
    }
                 </div>

    </>
  );
};

export default News;

//Basicallly when the card data renders the useEffects start working and in under 2-3 sec data from api comes and is in the card now.;) 