import { useState, useEffect } from 'react';
import { getImages, getSavedImages } from "./utils";
import debounce from 'lodash.debounce';

import appIcon from "./assets/img/icon.svg";

import AppNav from "./components/AppNav";
import AppImages from "./views/AppImages";

const fetchImages = debounce((query, callback) => {
    getImages(query).then(response => {
        if(response.collection) {
            callback(response.collection.items);
        }
    })
}, 500);

const App = () => {
    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState('Home');
    const [query, setQuery] = useState('');

    const [images, setImages] = useState([]);

    useEffect( () => {
        setLoading(true)
        fetchImages(query, images => {
            setImages(images)
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
              <AppNav tab={tab} setTab={setTab} setQuery={setQuery} />

              {
                  tab === 'Home' ?
                      <AppImages loading={loading} images={images} /> :
                      <AppImages images={getSavedImages()} />
              }
          </div>
        </div>
    );
}

export default App;
