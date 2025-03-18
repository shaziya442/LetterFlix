import { useNavigate } from "react-router-dom";
import Imglogo from "../../assets/images/logo2.webp";

export default function MainHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex mt-9 p-[6%] bg-white ml-35 gap-1">
      <div className="gap-6 p-[70px] sm:p-[14px]">
        <h1 className="text-blue-900 text-6xl font-[cursive] font-bold  font-family: var(--font-serif)">
          Send letters online
        </h1>
        <p className="text-lg">
          Secure, private, and cute online letter posting service. At{" "}
          <strong className="text-blue-700">₹199</strong> only.
        </p>
        <button
          className="text-white text-2xl font-[cursive] font-bold shadow-[6px_6px_0_0_#fde8a0] cursor-pointer font-family: var(--font-serif) bg-blue-900 rounded w-40 h-12 mt-9 hover:bg-blue-700 shadow-lg"
          onClick={() => navigate("/price")}
        >
          Send a letter
        </button>
      </div>
      <div className="sm:hidden">
        <img src={Imglogo} alt="send-letter" className="h-60 w-70 mt-9 len" />
      </div>
    </div>
  );
}
