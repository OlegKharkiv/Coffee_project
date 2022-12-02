import Header from "../../Header/header";
import Footer from "../../Footer/footer";

import HomeImage from "../images/Main bg.jpg";
import CoffeeBeans from "../images/Group.svg";
import CoffeeBeansBlack from "../images/Group_black.svg";
import TabCoffeeSolimo from '../images/Tabs_images/solimo_coffee_beans.jpg';
import TabCoffeePresto from '../images/Tabs_images/presto_italian_coffee_beans.jpg';
import TabCoffeeAromistico from '../images/Tabs_images/aromistico_coffee_beans.jpg';

import './home-page.modules.scss'

const HomePage = () => {

    return (
            <div className="HomePage">
                <div className="home__image">
                        <img src={HomeImage} alt="Background home screen" />
                </div>
                <>
                    <Header/>
                </>
                <div className="home">
                    <div className="home__content">
                        <h2 className="home__title">Everything You Love About Coffee</h2>
                        <div className="home__beans-logo">
                            <img className="home__beans-logo-screen" src={CoffeeBeans} alt="Coffee_beans" />
                        </div>
                        <div className="home__promotion-phrase">We makes every day full of energy and taste</div>
                        <div className="home__promotion-phrase-ask">Want to try our beans?</div>
                        <div className="home__bottom">
                            <button className="btn btn_white">More</button>
                        </div>
                    </div>
                </div>

                <div className="about">
                        <div className="about__us">
                            <h2>About Us</h2>
                            <div className="home__beans-logo">
                                <img className="home__beans-logo-screen" src={CoffeeBeansBlack} alt="Coffee_beans" />
                            </div>
                            <div className="about__us-description">
                                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.</p>
                                <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.</p>
                            </div>
                        </div>
                </div>
                <div className="bestsellers">
                    <h2 className="title">Our best</h2>
                    <div className="our-best">
                        <div className="our-best-container">
                            <div className="card__item">
                                <img src={TabCoffeeSolimo} alt="The screen of coffee beans Solimo" />
                                <h3 className="card__item-subtitle">Solimo Coffee Beans 2 kg</h3>
                                <div className="card__item-price">
                                    <span>10.73&#36;</span>
                                </div>
                            </div>
                            <div className="card__item">
                                <img src={TabCoffeePresto} alt="The screen of coffee beans Presto" />
                                <h3 className="card__item-subtitle">Presto Coffee Beans 1 kg</h3>
                                <div className="card__item-price">
                                    <span>15.99&#36;</span>
                                </div>
                            </div>
                            <div className="card__item">
                                <img src={TabCoffeeAromistico} alt="The screen of coffee beans Aromistico" />
                                <h3 className="card__item-subtitle">AROMISTICO Coffee 1 kg</h3>
                                <div className="card__item-price">
                                    <span>6.99&#36;</span>
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

export default HomePage;