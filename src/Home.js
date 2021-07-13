import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" alt="banner"/>

        <div className="home__row">
        <Product
            title="The Lean Statrtup"
            price={11.04}
            rating={4}
            image="https://www.bing.com/th?id=AMMS_6587b2a863d571e8d9477ab4414c7fa9&w=120&h=180&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1" 
            />
                <Product
            title="The Lean Statrtup"
            price={11.04}
            rating={4}
            image="https://www.bing.com/th?id=OIP.jQSBG9KoNh7vZW_5nzPdVgHaGO&w=158&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" 
            />

        </div>
        
        <div className="home__row">
        <Product
            title="The Lean Statrtup"
            price={11.04}
            rating={4}
            image="https://th.bing.com/th/id/OIP.mHSUazbsuJz9NSk7vUFWeAHaEK?pid=ImgDet&rs=1" 
            />
                <Product
            title="The Lean Statrtup"
            price={11.04}
            rating={4}
            image="https://th.bing.com/th/id/OIP._7GLxkhB5FudMHU4fsO5_AHaHa?pid=ImgDet&rs=1" 
            />
             <Product
            title="The Lean Statrtup"
            price={11.04}
            rating={4}
            image="https://www.bing.com/th?id=AMMS_6587b2a863d571e8d9477ab4414c7fa9&w=120&h=180&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.25&pid=16.1" 
            />

        </div>
        <div className="home__row">
        <Product
            title="The led is perfect to watch movies"
            price={11.04}
            rating={4}
            image="https://rukminim1.flixcart.com/image/1664/1664/television/e/s/r/micromax-40-canvas-s-original-imaerywuznsqc7pk.jpeg?q=90" 
            /> 

        </div>
         
            
        </div>
    )
}

export default Home
