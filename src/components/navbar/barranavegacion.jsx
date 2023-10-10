import { Link } from "react-router-dom";

function Barranavegacion() {
  const listItems =
    "px-3 text-xl text-gray-900 hover:cursor-pointer hover:bg-gray-100 h-[100%] flex items-center px-5 hover:border-b-2 border-b-gray-600 transition-all";

  return (
    <div className="w-full h-[10vh] fixed top-0 left-0  flex items-center px-3 justify-between bg-gradient-to-l from-gray-100 bg-opacity-20 ">
      <Link to={"/"}>
        <h1 className="text-[2em] text-gray-600 font-bold ">𝓥𝓲𝓵𝓵𝓪 𝓢𝓸𝓻𝓽</h1>
      </Link>
      <ul className="flex h-[100%] items-center md:mr-5">
        <Link className={listItems} to={"homepage"}>
          Home
        </Link>
        <Link className={listItems} to={"catalog"}>
          Catalog
        </Link>
        <Link className={listItems} to={"reservation"}>
          Reservation
        </Link>
        <Link className={listItems} to={"about"}>
          About
        </Link>
      </ul>
    </div>
  );
}

export default Barranavegacion;
