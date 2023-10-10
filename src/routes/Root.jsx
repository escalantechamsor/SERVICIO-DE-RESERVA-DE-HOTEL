import { Outlet } from "react-router-dom";
import Barranavegacion from "../components/navbar/barranavegacion";

function Root() {
  return (
    <main className="w-full min-h-[100vh] bg-gray-100 ">
      <section id="detail" className="">
        <Barranavegacion />

        <Outlet />
      </section>
    </main>
  );
}

export default Root;
