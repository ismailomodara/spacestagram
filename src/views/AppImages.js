import "../assets/css/app-images.scss";
import AppImage from "../components/AppImage";
import AppImageLoading from "../components/AppImageLoading";

const AppImages = ({ loading, images }) => {
    return (
        <div className="app-images">
            {
                loading ?
                    Array.from(Array(4), (number, i) => {
                        return <AppImageLoading key={i} />
                    })
                    :
                    images.map((image, key) => {
                        return <AppImage key={key} image={image} />
                    })
            }
        </div>
    );
}

export default AppImages;
