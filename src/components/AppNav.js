import '../assets/css/app-nav.css';

const AppNav = ({ tab, setTab, setQuery }) => {
    const tabs = ["Home", "Likes"]
    return (
        <div className="app-body__nav">
            <ul className="links">
                {
                    tabs.map((item, i) =>
                        <li
                            key={i}
                            className={ item === tab ? 'active' : '' }
                            onClick={() => setTab(item)}>{ item }</li>
                    )
                }
            </ul>
            {
                tab === 'Home' &&
                <div className="search">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for an image"
                        onInput={(event) =>{
                            setQuery(event.target.value)
                        }}
                    />
                </div>
            }
        </div>
    );
}

export default AppNav;
