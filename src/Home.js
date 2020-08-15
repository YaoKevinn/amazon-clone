import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="banner"/>

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="1"
                    title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                    price={2099.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
                />
                <Product 
                    id="2"
                    title="Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Cricket Wireless Plan"
                    price={999.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81mxun+6pEL._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="3"
                    title="Apple Watch Series 5 (GPS, 40mm) - Gold Aluminum Case with Pink Sport Band"
                    price={399}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71jOvjATfPL._AC_UL320_.jpg"
                />
                    <Product 
                    id="4"
                    title="Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) (Renewed)"
                    price={364.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61mXrcMU6LL._AC_UY218_.jpg"
                />
                    <Product 
                    id="5"
                    title="Beats Studio3 Wireless Over-Ear Headphones – The Beats Skyline Collection - Midnight Black (Renewed)"
                    price={186.80}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71fm3OiZj4L._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="6"
                    title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
