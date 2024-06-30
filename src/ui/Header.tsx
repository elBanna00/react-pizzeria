import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 px-4 py-3 uppercase sm:px-6">
      <div className="flex gap-5">
        <img src="./public\logo.png" className="h-12 w-12 rounded-full"></img>
        <Link to="/" className="tracking-widest mt-3">
          React Pizzeria Co.
        </Link>
      </div>
    </header>
  );
}

export default Header;
