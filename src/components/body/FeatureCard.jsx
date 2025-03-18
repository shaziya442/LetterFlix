import Imglogo3 from "../../assets/images/logo3.webp";
import Imglogo4 from "../../assets/images/logo4.webp";
import Imglogo5 from "../../assets/images/logo5.webp";
import Imglogo6 from "../../assets/images/logo6.webp";
import { useNavigate } from "react-router-dom";

export default function FeatureCard() {
  const navigate = useNavigate();
  return (
    <div className="mt-0 px-7 bg-amber-100 ">
      <div className="flex mb-0 py-20 mx-auto max-w-[896px] sm:py-[2rem] sm:block">
        <div>
          <img src={Imglogo3} alt="you write" className="w-20 h-20" />
          <h2 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:mt-2 sm:text-xl">
            You Write
          </h2>
          <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px) margin-block-end:0 sm:text-lg ">
            Write your letter, enter the receiver’s address, and click send.
            Your work is done here!
          </p>
        </div>
        <div className="gap-6 sm:mt-[2rem]">
          <img src={Imglogo4} alt="we do the work" className="w-20 h-20" />
          <h2 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:mt-2 sm:text-xl">
            We do the work
          </h2>
          <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px) margin-block-end:0 sm:text-lg">
            Secure printing, packaging, and shipping. It’s almost like magic.
          </p>
        </div>
        <div className="gap-6 sm:mt-[2rem]">
          <img src={Imglogo5} alt="they receive" className="w-20 h-20" />
          <h2 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:mt-2 sm:text-xl">
            They receive
          </h2>
          <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px) margin-block-end:0 sm:text-lg">
            and jump with joy! Now you annoy them till they reply with a letter
            🙂
          </p>
        </div>
      </div>
      <div className="m-0 box-border">
        <p className=" hidden lg:!block !border-dashed !border bg-amber-100 !border-gray-400  w-[75%] mx-auto"></p>
        <div className="m-0 w-full pb-[8rem] bg-amber-100 p-[var(--wp--style--root--padding-right)] box-border sm:pb-[1rem]">
          <p className="hidden py-8 sm:py-0 lg:py-16 md:block bg-amber-100 mx-auto"></p>
          <div className="flex m-0 p-[var(--wp--style--root--padding-right)] bg-amber-100 max-width: 1152px margin-left: auto !important margin-right: auto !important flex-wrap: nowrap m-0 pl-[13%] pr-[13%] align-center sm:block sm:p-0">
            <figure className="border border-gray-500 p-7 bg-yellow-200 sm:p-0">
              <img
                src={Imglogo6}
                alt="letter`"
                className="w-[1933px] h-[612px] sm:w-[1700px] sm:h-[440px]"
              />
            </figure>
            <div className="m-0 lg:!-ml-8 border border-gray-500 bg-white mb-20 ml-[-2rem] mt-20 bg-white p-8 shadow-md sm:mt-14 sm:ml-[3px] sm:p-6 sm:mb-12">
              <h2 className="text-3xl leading-tight italic font-bold mt-2  has-large-font-size font-[Playfair] text-blue-900 sm:text-3xl">
                letters are private, permanent, and special
              </h2>
              <p className="font-[lora] mt-7 text-xl">
                Letterflix is private and simple by design. Your letters are
                printed by automated printing and packaging system at our
                Printcenter. So that no one gets access to your words and the
                nostalgia of paper and envelope remains.
              </p>
              <p className="font-[lora] mt-7 text-xl ">
                We didn’t reimagine letters, just made it easy for anyone to
                send letters from wherever they are.
              </p>
              <button
                className="mt-5 p-2 bg-blue-900 text-white  w-[35%] shadow-[6px_6px_0_0_#fde8a0] cursor-pointer hover:bg-blue-700 shadow-lg"
                onClick={() => navigate("/featureCard")}
              >
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
