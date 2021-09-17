const AppSearch = ({ setQuery }) => {
    return (
        <div className="app-body__search">
            <h2>Some Title</h2>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for an image"
                    onInput={(event) =>{
                        setQuery(event.target.value)
                    }}
                />
            </div>
        </div>
    );
}

export default AppSearch;
