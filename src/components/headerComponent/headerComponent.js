import  './headerComponent.css'
function Header(props) {
    return (
        <div className="header">
            <div className="header__inner">
                <div className="logo__container">
                    <div className="header__logo"></div>
                </div>
                <div className="ssp__container">
                    <div className="header__search"></div>
                    <div className="header__settings"></div>
                    <div className="header__person"></div>
                </div>
               
            </div>
        </div>
    );
}

export default Header;