import { useEffect, useState } from "react"


function RandomCat(){

    const [imageUrl, setImageUrl] = useState('')

    const fetchCatImage = () => {
        const url = 'https://api.thecatapi.com/v1/images/search'
        const api_key = 'live_7ayTlEcoysSV8RP0qbIwZZpFresZzTKulOgCTvBz2kYj2B0Kzjepsfui0SoCeIUv'
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setImageUrl(data[0].url)
                // sets the imageUrl to be the data in console log url
            })
            .catch(error => console.error('Error:', error))
    }

        useEffect(() => {
            fetchCatImage()
        },[])
    //Empty dependency array to run once when the component mounts
    


    return(
    <div className="container">
        <h1 className="title">Random Cat Gen</h1>
            <img src={imageUrl} alt='Random Cat' className="image"></img> <br></br>
            <button onClick={fetchCatImage} className="cat-but">Click for new cat</button>
    </div>
    )

}

export default RandomCat