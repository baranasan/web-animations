import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <NavLink to="/" id="logo">Web Animations</NavLink>
                <span>by</span>
                <a href="https://www.github.com/baranasan" target="blank">Baran</a>
            </div>
        </div>
    );
}

export default Header;