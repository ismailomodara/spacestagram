const NASA_IMAGE = 'https://images-api.nasa.gov/search?media_type=image&q='
let SAVED_IMAGES = JSON.parse(localStorage.getItem('images')) || []

const headers = {
    'Accept': 'application/json',
}

export const getImages = (query) => {
    return fetch(`${NASA_IMAGE}${query}`, { headers })
        .then(res => res.json())
}

export const getSavedImages = () => {
    return SAVED_IMAGES;
}

export const getSavedImagesId = () => {
    return SAVED_IMAGES.map(image => image.data[0].nasa_id);
}

export const saveImage = (image) => {
    SAVED_IMAGES.push(image);
    localStorage.setItem("images", JSON.stringify(SAVED_IMAGES));
}

export const removeImage = (imageId) => {
    SAVED_IMAGES = SAVED_IMAGES.filter(image => {
        return image.data[0].nasa_id !== imageId;
    });
    localStorage.setItem("images", JSON.stringify(SAVED_IMAGES));
}

export const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options)
}
