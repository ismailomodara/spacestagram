
const AppImageLoading = () => {
    return (
        <div className="app-image loading">
            <span />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e6e6e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M20.4 14.5L16 10 4 20"/>
            </svg>
            <div className="title" />
            <div className="date" />
        </div>
    )
}

export default AppImageLoading;
