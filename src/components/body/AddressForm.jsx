import { useNavigate } from "react-router-dom";

export default function AddressForm() {
  const navigate = useNavigate();
  return (
    <div className="px-5 lg:mt-24 md:py-24 h-[350px] box-border bg-blue-900 sm:h-[474px]">
      <h2 className="font-[Playfair] font-semibold pt-[70px] text-center md:!text-4xl !text-3xl leading-[2.5rem] text-white italic  md:max-w-[768px] mx-auto sm:pt-[58px]">
        <strong className="sm:text-[32px]">
          Why should you send letters at all?
        </strong>
      </h2>
      <p className="font-[Lora] text-[20px] mx-[181px] mx-auto pt-8 text-white text-center space-y-[30px] sm:ml-[0px] sm:mr-[0px] sm:text-[18px]">
        In the summer of 2019, we wrote letters to some of our family members
        and friends and sent them via post. The reactions we got were priceless,
        so we thought, everyone should experience this! But there got to be an
        easy way to mail letters. And we couldn’t find an alternative that is
        private and convenient for sending personal letters. So we made
        Letterflix (for you).
      </p>
      <div
        className="flex flex-wrap items-center justify-center max-w-[768px] text-center mx-auto font-[Lora] mr-7 ml-[300px] text-grey-400 space-y-[30px] sm:mx-[0px]"
        onClick={() => navigate("/addressform")}
      >
        <div className="inline-block m-0 font-[Lora] bg-white italic text-xl mt-[25px] text-gray-700 shadow-[6px_6px_0_0_#fbbf24]">
          <a
            className="py-2 px-8 font-[Lora] bg-white-200 text-blue-500"
            href=""
            target=""
          >
            <strong>Draft Your Letter</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
