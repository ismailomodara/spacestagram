import "../assets/css/app-images.scss";
import AppImage from "../components/AppImage";
import AppImageLoading from "../components/AppImageLoading";

const AppImages = ({ loading, images }) => {
    return (
        <div className="app-images">
            {
                loading ?
                    Array.from(Array(6), (number, i) => {
                        return <AppImageLoading key={i} />
                    })
                    :
                    images.map(image => {
                        return <AppImage key={image.data[0].nasa_id} image={image} />
                    })
            }
        </div>
    );
}

export default AppImages;
