import imggg from "./assets/Screenshot_2025-07-14_123056-removebg-preview.png";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-blue-400">
      <header className="w-full h-[80px] border-b border-black flex items-center jusitfy-center">
        <div className="w-[99%] flex justify-between p-3 items-center">
          <h4 className="text-[10px] lg:text-[30px]">FintFinance</h4>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[8px] lg:text-[12px]">Services</p>
            <button className="bg-[#2E4F21] text-[10px] rounded-xl px-2 py-1 lg:px-4 lg:py-2 text-white ">
              Book an appointment
            </button>
          </div>
        </div>
      </header>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-6">
        <div className="mt-6 text-center lg:text-left">
          <h4 className="text-[30px] text-green-800">
            Financial Clarity You can Trust
          </h4>
          <p className="text-[16px] font-semibold text-green-800 lg:text-[25px]">
            Trusted financial guidance for every stage of life and business
            since 1987
          </p>
          <button className="px-5 py-3 rounded-xl bg-[#2E4F21] text-[12px] mt-4 text-white">
            Connect with our experts
          </button>
        </div>
        <div className="mb-10">
          <img
            src={imggg}
            alt="finance hero"
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

//#A0F1BD Background Color
//#2E4F21 Button Color
