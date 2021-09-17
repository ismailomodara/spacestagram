import '../assets/css/apod.scss';
import apodIcon from '../assets/img/astronomy.svg';
import apodImage from '../assets/img/test.jpeg';

const Apod = () => {
    return (
        <div className="apod">
            <div className="apod-title">
                <div className="apod-title__icon">
                    <img src={apodIcon} alt="ApodImage" />
                </div>
                <div>
                    <h4>Astronomy</h4>
                    <p>picture of the day.</p>
                </div>
            </div>
            <div className="apod-image">
                <img src={apodImage} alt="ApodImage" />
                <span>© Andrew Klinger</span>
            </div>
            <div className="apod-description">
                <h4>North America and the Pelican</h4>
                <p>Fans of our fair planet might recognize the outlines of these cosmic clouds. On the left, bright
                    emission outlined by dark, obscuring dust lanes seems to trace a continental shape, lending the
                    popular name North America Nebula to the emission region cataloged as NGC 7000.</p>
                <a href="https://google.com">
                    <button className="btn btn-primary btn-small">Read more</button>
                </a>
            </div>
        </div>
    );
}

export default Apod;
