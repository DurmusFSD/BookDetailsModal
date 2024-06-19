import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <NavLink
                        className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg `}
                        activeclassname="bg-primary text-black"
                        to="/trending-books"
                    >
                        <FaFire />
                        <span>Trend</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/new-releases"
                    >
                        <FaFolderPlus />
                        <span>Yeni Yayınlananlar</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/upcoming-books"
                    >
                        <FaCalendarAlt />
                        <span>Yakında</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                         to="/favorite-books"
                         activeclassname="bg-primary text-black"
                    >
                       <FaRegHeart />
                        <span>Favoriler</span>
                    </NavLink>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                      
                    >
                       <FaRegClock />
                        <span>Daha Sonra</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
