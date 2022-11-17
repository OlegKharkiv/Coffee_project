import Header from "../../Header/header";
import Line from "../images/Line.svg";
import HomeImage from "../images/Main bg.jpg";
import CoffeeBeans from "../images/Group.svg";
import CoffeeBeansBlack from "../images/Group_black.svg";

import './home-page.modules.scss'

const HomePage = () => {

    return (
            <div className="HomePage">
                <div className="home__image">
                        <img src={HomeImage} alt="Background home screen" />
                    </div>
                <div className="home">
                    <>
                        <Header/>
                    </>
                    <div className="home__content">
                        <h2 className="home__title">Everything You Love About Coffee</h2>
                        <div className="home__beans-logo">
                            <img className="home__beans-logo-line-right" src={Line} alt="Open line for logo" />
                            <img className="home__beans-logo-screen" src={CoffeeBeans} alt="Coffee_beans" />
                            <img className="home__beans-logo-line-left" src={Line} alt="Close line for logo" />
                        </div>
                        <div className="home__promotion-phrase">We makes every day full of energy and taste</div>
                        <div className="home__promotion-phrase-ask">Want to try our beans?</div>
                        <div className="home__bottom">
                            <button className="btn btn_white">More</button>
                        </div>
                    </div>
                    
                </div>

                <div className="about _container">
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
            </div>
    );
}

export default HomePage;