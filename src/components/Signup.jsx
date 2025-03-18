import Imglogo from "/src/assets/images/logo2.webp"; // Absolute path
import Header from "./Header/Header";
const Signup = () => {
  return (
    <div className="bg-blue-100 h-[100vh]">
      {/* header */}
      <Header nonSticky={true} />
      {/* content */}
      <div className="flex m-100% bg-blue-100 sm:flex-col-reverse">
        <div className="w-1/2 p-[100px] h-full ml-20 mt-[90px] pt-[45px] sm:w-[100%] sm:ml-[1rem] sm:mt-[40px] sm:p-[0px]">
          <h2 className="text-blue-800 text-400 text-[32px] font-[cursive] font-semibold sm:text-[26px]">
            “To write is human, to receive a letter: Devine!” ― Susan Lendroth
          </h2>
          <img
            src={Imglogo}
            alt="send-letter"
            className="h-80 w-70 mt-8 len sm:hidden"
          />
        </div>
        <div className=" mt-7  h-[60%] w-[38%] pt-[50px] sm:pt-[50px] sm:ml-[30px] sm:w-[85%]">
          <form className="bg-white border-l-4 border-blue-800 p-6 h-[535px] sm:h-[505px]">
            <fieldset className=" ">
              <legend className="font-semibold text-[28px] mb-10 mt-3 font-[cursive] font-bold sm:text-[35px]">
                Get Started
              </legend>
              <p>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="align-middle border-b-[2px] border-[rgba(103,75,124,0.38)] text-xl mt-5 pb-2 pr-15 font-serif  h-[40%] w-[100%]"
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="align-middle border-b-[2px] border-[rgba(103,75,124,0.38)] mt-9 text-xl pb-2 pr-15 font-serif  h-[40%] w-[100%]"
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder="Display Name"
                  required
                  className="align-middle border-b-[2px] border-[rgba(103,75,124,0.38)] mt-9 text-xl pb-2 pr-15 font-serif  h-[40%] w-[100%]"
                />
              </p>
              <p>
                <button className="mt-10 p-2 bg-blue-900 text-white  w-[35%] shadow-[6px_6px_0_0_#fde8a0] cursor-pointer hover:bg-blue-700 shadow-lg p-4 ">
                  Sign Up
                </button>
              </p>
              <h3 className="mt-10 text-lg sm:text-[20px] sm:mt-[35px]">
                Already Registered?
                <button className="no-underline cursor-pointer text-blue-600 hover:underline">
                  Sign Up
                </button>
              </h3>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
