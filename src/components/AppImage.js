import { useState } from "react";
import { getSavedImagesId, formatDate, saveImage, removeImage } from "../utils";

const AppImage = ({ image }) => {
    const { title, date_created, nasa_id } = image.data[0];
    const { href } = image.links[0];

    const imageSaved = getSavedImagesId().includes(nasa_id)
    const [liked, setLiked] = useState(imageSaved);

    const updateSavedImages = () => {
        const status = !liked;

        setLiked(status);
        if(status) {
            saveImage(image);
        } else {
            removeImage(nasa_id);
        }
    }

    return (
        <div className="app-image">
            <div className="app-image__bg">
                <img src={href} alt="Alt" loading="lazy" />
            </div>
            <div className="app-image__action" onClick={() => updateSavedImages()}>
                   <span>
                       <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24" height="24" viewBox="0 0 24 24"
                           fill={liked ? '#F40529' : 'none'}
                           stroke={liked ? '#F40529' : '#0C0807'}
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round">
                           <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                   </span>
            </div>
            <div className="app-image__info">
                <div>
                    <h3>{ title }</h3>
                    <p>{ formatDate(date_created) }</p>
                </div>
            </div>
        </div>
    );
}

export default AppImage;
