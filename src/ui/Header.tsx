import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 px-4 py-3 uppercase sm:px-6">
      <div className="flex gap-5">
        <img src="/logo.png" className="h-12 w-12 rounded-full"></img>
        <Link to="/" className="tracking-widest mt-3">
          React Pizzeria Co.
        </Link>
      </div>
      <span>
        <span className=" text-red-600">Fr</span>
        <span className=" text-black">ee </span>
        <span className=" text-white">Pala</span>
        <span className=" text-green-800">stine</span>
      </span>
      <div className="flex items-center justify-between gap-5">
        <SearchOrder />

        <Username />
      </div>
    </header>
  );
}

export default Header;
