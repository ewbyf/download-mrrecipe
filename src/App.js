import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="appContainer">
      <div className="logoContainer">
        <img className="logo" src={require("./img/mrrecipe.png")} alt=""/>
        <p className="logoText">Mr. Recipe</p>
      </div>
      <div class="flexContainer">
        <div className="left">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay showArrows={false} width="65%">
            <div>
              <img src={require("./img/pic1.png")} alt=""/>
            </div>
            <div>
              <img className="phoneImage" src={require("./img/pic2.png")} alt=""/>
            </div>
            <div>
              <img className="phoneImage" src={require("./img/pic3.png")} alt=""/>
            </div>
          </Carousel>
        </div>
        <div className="right">
          <div className="info">
            <p className="title">Download Our App</p>
            <p className="description">Mr. Recipe is a social media recipe app designed for chefs of all skill levels to discover and share new recipes. Have a favorite recipe you've always wanted to share? This is the perfect place to post it. Bored? Find a recipe that stands out to you and create it. With Mr. Recipe, you can step outside of your comfort zone and experiment with brand-new recipes!</p>
            <div className="links">
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <a href="https://apps.apple.com/us/app/mr-recipe/id1666779736"><img className="download" src={require("./img/ios.png")} alt=""/></a>
                <a href="https://play.google.com/store/apps/details?id=com.cooly4477.RecipesApp&hl=en_US&gl=US"><img className="download" src={require("./img/android.png")} alt=""/></a>
              </div>
              <img className="qr" src={require("./img/mrrecipeqrcode.png")} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L34.3,64C68.6,64,137,64,206,90.7C274.3,117,343,171,411,186.7C480,203,549,181,617,144C685.7,107,754,53,823,58.7C891.4,64,960,128,1029,133.3C1097.1,139,1166,85,1234,58.7C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;
