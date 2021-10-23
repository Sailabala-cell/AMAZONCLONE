import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            <div className="home__row">
            <Product
            id="12321341"
            title="VERO MODA WOMEN'S BLUE BLAZER(Long Size) "
            price={3299.00}
            rating={4}
            image="images/girlsblazer.jpg"
            />
             <Product
            id="12321342"
            title="VERO MODA OFF-WHITE SINGLE BUTTON FORMAL BLAZER"
            price={2990.00}
            rating={4}
            image="images/white.jpg"
            />
             <Product
            id="12321343"
            title="VERO MODA MAROON DOUBLE BUTTON BLAZER"
            price={2100.00}
            rating={4}
            image="images/Veromoda blazer's.jpg"
            />
            </div>
            <div className="home__row">
           
             <Product
            id="12321344"
            title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV 43W6600 (Black) (2020 Model)"
            price={43990.00}
            rating={4}
            image="images/sony.jpg"
            />
             <Product
            id="12321345"
            title="Samsung 27 inch M5 Smart Monitor with Netflix, YouTube, Prime Video and Apple TV Streaming (LS27AM500NWXXL, Black)"
            price={23490.00}
            rating={5}
            image="images/tv.jpg"
            />
            </div>
            <div className="home__row">
           
             <Product
            id="12321346"
            title="Sony Digital Vlog Camera ZV-1 Only (Compact, Video Eye AF, Flip Screen, in-Built Microphone, 4K Vlogging Camera and Content Creation) – Black"
            price={59990.00}
            rating={4}
            image="images/came.jpg"
            />
             <Product
            id="12321347"
            title="Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)"
            price={38990.00}
            rating={5}
            image="images/camera.jpg"
            />
            </div>
            <div className="home__row">
           
             <Product
            id="12321348"
            title="Amazon Brand - Solimo Wall Sticker for Living Room (Owl Theory,  ideal size on wall: 152 cm x 49cm ),Multicolor"
            price={249.00}
            rating={4}
            image="images/owlr.jpg"
            />
             <Product
            id="12321349"
            title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now 
by Jay Shetty"
            price={300.00}
            rating={5}
            image="images/monk book.jpg"
            />
             <Product
            id="12321350"
            title="The 5 AM Club: Own Your Morning, Elevate Your Life
by Robin Sharma "
            price={247.00}
            rating={5}
            image="images/book.jpg"
            />
            
            </div>
            <div className="home__row">
           
           <Product
          id="12321351"
          title="Apple iPhone 12 Pro 128 GB, Graphite"
          price={115900.00}
          rating={5}
          image="images/apple.jpg"
          />
          </div>
        </div>
    )
}

export default Home
