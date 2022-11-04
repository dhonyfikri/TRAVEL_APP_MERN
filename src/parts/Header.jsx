import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import IconText from "./IconText";

const Header = (props) => {
    const location = useLocation();
    const getNavLinkClass = (path) => {
        return location.pathname === path ? " active" : "";
    };

    return (
        <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <IconText />
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li
                                    className={`nav-item${getNavLinkClass(
                                        "/"
                                    )}`}
                                >
                                    <Button
                                        className="nav-link"
                                        type="link"
                                        href="/"
                                    >
                                        Home
                                    </Button>
                                </li>
                                <li
                                    className={`nav-item${getNavLinkClass(
                                        "/browse-by"
                                    )}`}
                                >
                                    <Button
                                        className="nav-link"
                                        type="link"
                                        href="/browse-by"
                                    >
                                        Browse By
                                    </Button>
                                </li>
                                <li
                                    className={`nav-item${getNavLinkClass(
                                        "/stories"
                                    )}`}
                                >
                                    <Button
                                        className="nav-link"
                                        type="link"
                                        href="/stories"
                                    >
                                        Stories
                                    </Button>
                                </li>
                                <li
                                    className={`nav-item${getNavLinkClass(
                                        "/agents"
                                    )}`}
                                >
                                    <Button
                                        className="nav-link"
                                        type="link"
                                        href="/agents"
                                    >
                                        Agents
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </Fade>
    );
};

export default Header;
