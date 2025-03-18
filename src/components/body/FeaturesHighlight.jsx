import Imglogo7 from "../../assets/images/logo7.webp";
import Imglogo9 from "../../assets/images/logo9.webp";
import Imglogo10 from "../../assets/images/logo10.webp";
import Imglogo8 from "../../assets/images/logo8.webp";

export default function FeaturesHighlight() {
  return (
    <div className="mt-0 mb-0 px-5 space-y-3 flex">
      <div className="flex pt-24 max-w-[1072px] mx-auto items-start box-border sm:pt-[4rem] sm:block">
        <div className="basis-[35%] mr-[14px] md:flex-grow-0  m-0">
          <h2 className="text-3xl md:text-4xl leading-tight italic font-bold has-large-font-size font-[Playfair] text-blue-900 sm:mb-[50px]">
            Online letter posting has never been this easy!
          </h2>
        </div>
        <div className="flex basis-[65%] pl-[10px] sm:block">
          <div>
            <div>
              <img
                src={Imglogo7}
                alt="international shipping"
                className="w-20 h-20"
              />
              <h3 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:text-xl">
                International Shipping
              </h3>
              <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px) margin-block-end:0 sm:text-lg">
                Letters go places.
              </p>
            </div>
            <div className="mt-6 ">
              <img src={Imglogo9} alt="easy refund" className="w-20 h-20" />
              <h3 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:text-xl">
                Privacy by design
              </h3>
              <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px) margin-block-end:0 sm:text-lg">
                Automated printing and packaging.
              </p>
            </div>
          </div>
          <div className="pl-10 sm:pl-[0px] sm:mt-[23px]">
            <div>
              <img
                src={Imglogo10}
                alt="account privacy"
                className="w-20 h-20"
              />
              <h3 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:text-xl">
                Easy Refund
              </h3>
              <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px) margin-block-end:0 sm:text-lg">
                100% refund for failed deliveries.
              </p>
            </div>
            <div className="mt-6">
              <img
                src={Imglogo8}
                alt="international shipping"
                className="w-20 h-20"
              />
              <h3 className="text-[clamp(14px,0.875rem+((1vw-3.2px)*0.469),20px)] mt-4 font-bold text-blue-900 sm:text-xl">
                International Shipping
              </h3>
              <p className="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)  margin-block-end:4 sm:text-lg">
                Follow your letters at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
