const API_KEY = "hyJen6BlgaQaC93ZkdlIcISrsQ8MtVH8eijNFmsc";
const NASA_APOD = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`
const NASA_IMAGE = 'https://images-api.nasa.gov/search?media_type=image&q='


const headers = {
    'Accept': 'application/json',
}

export const getApod = () => {
    return fetch(`${NASA_APOD}`, { headers })
        .then(res => res.json())
}
