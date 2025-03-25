import { useNavigate } from "react-router-dom";
import "../../App.css";
import Imglogo from "../../assets/images/logo14.webp";

// eslint-disable-next-line react/prop-types
export default function Header({ nonSticky = false }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        nonSticky
          ? "flex justify-between w-full gap-4 bg-white p-6 border-b border-gray-400 sm:p-[1.5rem] sm:items-center"
          : "flex justify-between w-full gap-4 sticky top-0 z-index-1 h-100% bg-white p-6 border-b border-gray-400"
      }
    >
      <img
        src={Imglogo}
        alt="lettre-flix"
        className="w-40 h-20 rounded-lg mg-5 len sm:w-[5rem] sm:h-[3rem]"
        onClick={() => navigate("/")}
      />
      <div className="flex justify-between space-x-6">
        <button
          className="w-40 h-12 bg-blue-900 text-white rounded hover:bg-blue-700 shadow-lg mt-5 cursor-pointer sm:w-[5rem] sm:h-[3rem] sm:mt-[2px] "
          onClick={() => navigate("/signup")}
        >
          SignUp
        </button>
        <button
          className="w-40 h-12  bg-blue-900 text-white rounded hover:bg-blue-700 shadow-lg mt-5 cursor-pointer sm:w-[5rem] sm:h-[3rem] sm:mt-[2px] "
          onClick={() => navigate("/login")}
        >
          LogIn
        </button>
      </div>
    </div>
  );
}
