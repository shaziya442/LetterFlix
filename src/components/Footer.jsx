import Imglogo19 from "../../src/assets/images/logo19.webp";
import Imglogo18 from "../../src/assets/images/logo18.webp";

export default function Footer() {
  return (
    <footer className="content-auto">
      <div className="lg:!py-20 lg:!px-20 h-[350px] text-white bg-blue-900 sm:h-[550px] sm:px-[10px]">
        <div className="flex max-w-[59rem] pt-[52px] justify-center items-center ml-[261px] font-['Lora'] text-3xl sm:flex-col-reverse sm:ml-[0px] sm:pt-[16px] sm:text-xl">
          <div className="max-w-4xl !justify-between !items-center md:!flex-row mx-auto sm:mt-[28px]">
            <img
              src={Imglogo19}
              alt="lebel"
              className="object-cover box-border h-auto max-w-full align-bottom w-[148px] h-[85px] aspect-auto overflow-hidden sm:ml-[49px]"
            />
            <p className="text-[#faf030] no-underline italic mt-[10px] mb-3 max-w-4xl mx-auto text-left sm:ml-[55px] sm:text-2xl">
              <em>
                <a href="">By Blinkstore</a>
              </em>
            </p>
            <img
              src={Imglogo18}
              alt="product-hunt"
              className="mt-[10px] mb-0 sm-mb-[8px]"
            />
          </div>
          <ul className="mb-0 md:mt-2 md:ml-8 md:text-lg md:p-10 no-underline list-none flex text-[21px] flex-wrap sm:mt-[10px] sm:text-[18px]">
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Blog</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Instagram</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Facebook</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Pinterest</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Youtube</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Linkedin</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">LBB</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Terms & Privacy Policy</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Cancellation & Refund Policy</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">Support</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">letterflixteam@gmail.com</a>
            </li>
            <li className="!ml-6 !mb-4 list-item">
              <a href="">123456789</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
