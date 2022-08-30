import { Link } from "react-router-dom";
import { useShoping } from "../context/Shoping";
import svg from "../../public/svg.svg";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoping();

  return (
    <nav>
      <ul className="flex bg-[#232946] text-2xl gap-7 p-4 justify-between  font-normal  ">
        <li className="flex gap-14  ">
          <div>
            <Link
              to={"/"}
              className="font-bold text-[#fffffe] hover:text-[#eebbc3]"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to={"/store"}
              className="font-bold text-[#fffffe] hover:text-[#eebbc3]"
            >
              Store
            </Link>
          </div>
          <div>
            <Link
              to={"/about"}
              className="font-bold text-[#fffffe] hover:text-[#eebbc3]"
            >
              About
            </Link>
          </div>
        </li>

        {cartQuantity > 0 && (
          <li
            className="mr-5 flex items-center cursor-pointer justify-center relative "
            onClick={openCart}
          >
            <img src={svg} alt="logo" />
            <div className="bg-white  text-blue-800 font-bold px-2 text-sm rounded-full flex justify-center items-center absolute translate-y-3 translate-x-5">
              {cartQuantity}
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};
