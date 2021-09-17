import { useState, useEffect } from 'react';
import { getImages } from "./services";

import AppSearch from "./components/AppSearch";
import AppImages from "./views/AppImages";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [query, setQueryValue] = useState('');
    const [images, setImages] = useState([]);

    useEffect( () => {
        setLoading(true)
        getImages(query).then(response => {
            if(response.collection) {
                setImages(response.collection.items)
                setLoading(false)
            }
        })
    }, [query]);

    return (
        <div className="app">
          <div className="app-banner">
              <h1>Spacestagram</h1>
          </div>
          <div className="app-body">
              <AppSearch setQuery={setQueryValue} />
              <AppImages loading={loading} images={images} />
          </div>
        </div>
    );
}

export default App;
