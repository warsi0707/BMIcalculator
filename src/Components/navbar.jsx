export default function Navbar() {
  return (
    <>
      <div className="navbar h-20 bg-gray-100 border border-b-gray-300 p-5  rounded-md overflow-hidden ">
        <div className=" text-xl overflow-hidden mx-2 md:text-2xl lg:text-2xl flex justify-between md:mx-20 lg:mx-20">
          <div className="icon">
            <h1>Body Mass Index</h1>
          </div>
          <div className="other">
            <a href="https://github.com/warsi0707/BMIcalculator" className="hover:text-purple-500">Github</a>
          </div>
        </div>
      </div>
    </>
  );
}
