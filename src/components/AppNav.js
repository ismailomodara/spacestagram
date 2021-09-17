import '../assets/css/apod.scss';

const AppNav = () => {
    return (
        <div className="app-body__nav">
            <ul className="links">
                <li className="active">Home</li>
                <li>Liked</li>
            </ul>
            <div className="search">
                <input type="text" placeholder="Search for an image" />
            </div>
        </div>
    );
}

export default AppNav;
