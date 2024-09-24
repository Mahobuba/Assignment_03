// components/Banner.jsx
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h1 className="banner-title">Unlock a World of Stories</h1>
                <button className="banner-button">Buy Book</button>
            </div>
            <div className="banner-image">
                <img 
                    src="https://heartspoken.com/wp-content/uploads/2019/03/Becoming-Book-Review-Post-Graphic.jpg" 
                    alt="Books" 
                />
            </div>
        </div>
    );
};

export default Banner;

  