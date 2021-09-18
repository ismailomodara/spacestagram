import { useState, useEffect } from 'react';
import { getImages } from "./utils";
import debounce from 'lodash.debounce';

import appIcon from "./assets/img/icon.svg";

import AppNav from "./components/AppNav";
import AppImages from "./views/AppImages";

const fetchImages = debounce((query, callback) => {
    getImages(query).then(response => {
        if(response.collection) {
            callback(response);
        }
    })
}, 500);

const App = () => {
    const [loading, setLoading] = useState(false);
    const [query, setQueryValue] = useState('');
    const [images, setImages] = useState([]);


    useEffect( () => {
        setLoading(true)
        fetchImages(query, response => {
            setImages(response.collection.items)
            setLoading(false)
        })
    }, [query]);

    return (
        <div className="app">
          <div className="app-header">
              <img src={appIcon} alt="S" />
              <h1>Spacestagram</h1>
          </div>
          <div className="app-body">
              <AppNav setQuery={setQueryValue} />
              <AppImages loading={loading} images={images} />
          </div>
        </div>
    );
}

export default App;
