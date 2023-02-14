import '../assets/unknownpage.scss';

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
                </div>
                <div class="pint_img">
                    <img src="assets/beerglass.png" alt=""></img>
                    <div className="home_shadow"></div>
                </div>
            </div>

            
        </>
    );
}

export default UnknownPage;