import { Outlet } from "react-router-dom";
import Sidebar, { Menu } from "./components/Sidebar";

export interface SidebarListProps {
    menu: Menu[];
}

export default function App() {


    const menu: Menu[] = [
        {
            key: 1,
            title: 'Home',
            route: '/home'
        },
        {
            key: 2,
            title: 'Streamers',
            route: '/streamers'
        }
    ];

    return (
        <>
            <Sidebar menu={menu} />
            <div className="ml-60 pl-10 pt-5 pr-5 pb-10">
                <Outlet />
            </div>
        </>
    );
}