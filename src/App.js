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
              <div className="app-header__logo">
                  <img src={appIcon} alt="Icon" />
                  <h1>Spacestagram</h1>
              </div>
              <div className="app-header__description">
                  <p>Explore documentary images into space via the NASA Image API</p>
              </div>
              <a className="app-header__cta" href="https://github.com/omodara145/spacestagram.git" target="_blank">
                  <span>Github</span>
              </a>
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
