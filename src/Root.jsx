import { Outlet } from "react-router-dom";
import NavbarIcons from "./Components/Shared/NavbarIcons/NavbarIcons";

const Root = () => {
    return (
        <div>
            <NavbarIcons/>
            <Outlet/>
        </div>
    );
};

export default Root;