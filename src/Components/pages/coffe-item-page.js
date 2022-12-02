import Header from "../../Header/header";
import Footer from "../../Footer/footer";

import CoffeeShop from "../images/coffee-shop-1209863_1920.jpg";
import CoffeeBeansBlack from "../images/Group_black.svg";
import CoffeePack from '../images/81tGmkXdGLL.jpg';

import './coffe-item-page.modules.scss'

const CoffeItemPage = () => {

    return (
            <div className="coffee-item-page">
                <div className="coffe-item__image">
                        <img src={CoffeeShop} alt="Background coffe-item screen" />
                </div>
                <>
                    <Header/>
                </>
                <div className="coffe-item">
                    <div className="coffe-item__content">
                        <h2 className="coffe-item__title">Our Coffee</h2>
                    </div>
                </div>

                <div className="about">
                    <div className="about__wrapper">
                        <div className="coffe-item__pack">
                            <img src={CoffeePack} alt="Screen of coffe-item pack" />
                        </div>
                        <div className="about__it">
                            <h2>About it</h2>
                            <div className="home__beans-logo">
                                <img className="home__beans-logo-screen" src={CoffeeBeansBlack} alt="Coffee_beans" />
                            </div>
                            <div className="about__it-description">
                                <p> <strong>Country:</strong> Brasil </p>
                                <p> <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="coffe-item__item-price">
                                    <span>Price:<strong> 16.99&#36;</strong></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__wrapper">
                <>
                    <Footer/>
                </>
                </div>
            </div>
    );
}

export default CoffeItemPage;