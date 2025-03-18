import Imglogo11 from "../../assets/images/logo11.webp";
import Imglogo12 from "../../assets/images/logo12.webp";
import Imglogo13 from "../../assets/images/logo13.webp";
import Imglogo15 from "../../assets/images/logo15.webp";
import Imglogo16 from "../../assets/images/logo16.webp";
import Imglogo17 from "../../assets/images/logo17.webp";
import Imglogo1 from "../../assets/images/logo1.webp";

export default function Testimonials() {
  return (
    <div className="mt-[65px] sm:mt-[50px]">
      <div className="mb-0 first:mt-0 max-w-[var(--wp--style--global--content-size)] mx-auto">
        <h2 className="text-3xl text-center text-bold font-[playfair]">
          Tiny letters and fresh memes 🙂
        </h2>
        <div className="mt-10 max-w-[896px] mx-auto flex-nowrap gap-x-8">
          <div className="flex w-full self-center m-0 sm:block">
            <div className="gap-y-8 gap-x-5 pr-4 sm:pr-[5rem] sm:pl-[5rem]">
              <figure className="pb-4">
                <img src={Imglogo11} alt="sampleimage" />
              </figure>
              <figure>
                <img src={Imglogo16} alt="sampleimage" />
              </figure>
            </div>
            <div className="gap-y-8 gap-x-5 pr-4 sm:pr-[5rem] sm:pl-[5rem] sm:mt-[14px]">
              <figure className="pb-4">
                <img src={Imglogo13} alt="sampleimage" />
              </figure>
              <figure>
                <img src={Imglogo15} alt="sampleimage" />
              </figure>
            </div>
            <div className="gap-y-8 gap-x-5 pr-4 sm:pr-[5rem] sm:pl-[5rem] sm:mt-[14px]">
              <figure className="pb-4">
                <img src={Imglogo12} alt="sampleimage" />
              </figure>
              <figure>
                <img src={Imglogo17} alt="sampleimage" />
              </figure>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-[768px] mx-auto mt-9 font-[Lora] mb-7 text-grey-400 space-y-[30px]">
            <div className="inline-block m-0 font-[Lora] bg-white italic text-xl mt-[25px]  text-gray-700 shadow-[6px_12px_0_0_#fbbf24]">
              <a
                className="py-2 px-8 font-[Lora] bg-blue-900 text-white"
                href=""
                target=""
              >
                <strong>Follow On Instagram</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-100 mt-[5rem] pt-12 pr-5 pb-16 pl-5 last:mb-0">
        <div>
          <h2 className="italic max-w-[768px] mx-auto text-primary font-['Playfair_Display'] text-4xl text-blue-900 text-bold">
            <strong>Before you leave,</strong>
          </h2>
          <p className="font-['Lora'] max-w-[768px] mx-auto text-primary text-black mt-8 text-xl text-bold">
            <strong>Letterflix.com is a secret</strong>
          </p>
          <p className="font-['Lora'] max-w-[768px] mx-auto text-primary text-black text-lg">
            Share it with your most trusted friend. Because that’s what we do
            with the secrets.
          </p>
          <div className="font-['Lora'] max-w-[768px] mx-auto text-primary text-black mt-8 text-xl text-bold">
            <button className="flex">
              <span>SHARE THE SECRET</span>
              <img
                src={Imglogo1}
                alt="share-icon"
                className="h-[29px] w-[30px] ml-3 "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
