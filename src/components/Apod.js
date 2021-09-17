import '../assets/css/apod.scss';
import apodIcon from '../assets/img/astronomy.svg';

const Apod = ({ apod }) => {
    const { date, title, explanation, media_type, url, thumbnail_url } = apod;
    const sentences = explanation && explanation.split('.');
    const description = sentences ? sentences[0] + '. ' + sentences[1] : ''

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
                <img src={media_type === 'video' ? thumbnail_url : url} alt="ApodImage" />
                <span>{ date }</span>
            </div>
            <div className="apod-description">
                <h4>{ title }</h4>
                <p>{ description }.</p>
                <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
                    <button className="btn btn-primary btn-small">Read more</button>
                </a>
            </div>
        </div>
    );
}

export default Apod;
