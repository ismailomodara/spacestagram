import { useState, useCallback, useEffect } from 'react';
import {getApod, getImages} from "./services";

import Apod from "./components/Apod";
import AppSearch from "./components/AppSearch";
import AppImages from "./views/AppImages";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [apod, setApod] = useState({});

    const [searching, setSearching] = useState(false);
    const [query, setQueryValue] = useState('');
    const [images, setImages] = useState([]);

    useEffect( () => {
        getApod().then(response => {
            if(response.title) {
                setApod(response)
            }
        })
    }, []);

    useCallback( () => {
        setSearching(true)
        getImages().then(response => {
            if(response.collection) {
                setImages(response.collection.items)
            }
        })
    }, [query]);

    return (
        <div className="app">
          <div className="app-banner">
              <h1>Spacestagram</h1>
          </div>
          <div className="app-body">
              <Apod apod={apod} />
              <div className="app-body__images">
                <AppSearch setQuery={setQueryValue} />
                <AppImages searching={searching} images={images} />
              </div>
          </div>
        </div>
    );
}

export default App;
