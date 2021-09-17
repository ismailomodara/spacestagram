import "../assets/css/images.scss";
import apodImage from "../assets/img/test.jpeg";

const AppImage = () => {

    return (
        <div className="app-image">
            <div className="app-image__bg">
                <img src={apodImage} alt="Alt" />
            </div>
            <div className="app-image__action">
                   <span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C0807" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                   </span>
            </div>
            <div className="app-image__info">
                <div>
                    <h3>Title Goes Here</h3>
                    <p>25th September, 2021.</p>
                </div>
                <p>Learn</p>
            </div>
        </div>
    );
}

export default AppImage;
