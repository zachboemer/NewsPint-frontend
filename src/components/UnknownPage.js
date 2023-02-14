import '../assets/unknownpage.scss';
import logo from '../assets/beerglass.png'

const UnknownPage = () => {

    return (
        <>
            <title>404</title>
            <div className="unknown-text">
                <div className="body">                
                    <h1>Oops!</h1>
                    <p>Looks like you had a few too many pints! This page does not exist.</p>
                    <p>Let's walk you home.</p>
                    <a href="/">
                        <button className="home_btn">Go Home!</button>
                    </a>
                    <div class="pint_img">
                    <img src={logo} alt="Beer Glass Image" width={50} height="100"/>
                    <div className="home_shadow"></div>
                </div>
                </div>
                
            </div>

            
        </>
    );
}

export default UnknownPage;