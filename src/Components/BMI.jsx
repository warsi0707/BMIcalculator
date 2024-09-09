import { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

export default function BMICalc() {
  let [bmiValue, setBmiValue] = useState("");
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [message, setMessage] = useState("");

  const heightInMeter = height / 100;
  const BMI = (weight / (heightInMeter * heightInMeter)).toFixed(2);

  const handleSubmit = () => {
    if (height && weight) {
      setBmiValue(BMI);

      let message = "";
      if (BMI < 18.5) {
        message = "Your are under weight";
      } else if (BMI == null) {
        message;
      } else if (BMI >= 18.5 && BMI < 25) {
        message = "You are in normal weight";
      } else if (BMI >= 25 && BMI < 30) {
        message = "you are over weight";
      } else {
        message = "You are obses";
      }
      setMessage(message);
    } else {
      setBmiValue("");
    }
    console.log("printed");
  };
  let handleHeight = (event) => {
    setHeight(event.target.value);
  };
  let handleWeight = (event) => {
    setWeight(event.target.value);
  };

  return (
    <>
      <div className="w-auto mx-10 md:mx-16 lg:mx-32 my-5 text-lg space-y-5 text-gray-800">
        <h1 className="text-2xl font-bold">Body Mass Indicator</h1>
        <p>
          The Body Mass Index calculator or BMI calculator is a useful tool that
          determines your current weight—whether you are overweight,
          underweight, or just adequate. But you can never tell this by your
          weight alone since a tall, thin man can easily weigh more than a
          short, heavy lady. This issue is resolved by the body mass index, or
          BMI, which calculates the ratio of your weight to your height and
          gives a single figure. On the BMI range scale, this value falls into
          one of four categories — underweight, normal, overweight, or obese.
        </p>
      </div>
      <div className="w-[350px] mx-auto border border-gray-300 rounded-2xl px-10 sm:w-[600px] md:flex  md:w-[1400px] md:mx-5">
        <div className="left-side-search  h-full    md:border-r-2 md:w-[500px]">
          <div className="flex flex-col p-5 md:p-10 space-y-3 md:space-y-5  md:mx-20">
            <input
              type="number"
              value={height}
              onChange={handleHeight}
              placeholder="Height in CM"
              className="h-12 rounded-md border border-gray-400 text-black font-bold text-center text-lg md:text-xl md:h-14 "
            />
            <input
              type="number"
              value={weight}
              onChange={handleWeight}
              placeholder="Weight in KG"
              className="h-12 rounded-md border border-gray-400 text-black font-bold text-center text-lg md:text-xl md:h-14 "
            />
          </div>
          <div className="mx-auto flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-gray-200 h-10 rounded-lg w-24 hover:bg-purple-400 md:h-12 md:w-28 md:text-lg md:rounded-md"
            >
              BMI {FaLessThan}
            </button>
          </div>
          <div className="result flex justify-center text-xl md:text-3xl  my-5">
            <p>{message}</p>
          </div>
        </div>

        <div className="right-side-result my-5 justify-center space-y-5 text-center  p-5">
          <div className="">
            <div className="mx-auto w-48 p-5 space-y-2 md:w-80 md:p-12 rounded-xl md:rounded-md bg-black text-white md:space-y-5">
              <h1 className="text-lg md:text-2xl">Result</h1>
              <h1 className="text-lg md:text-3xl">{bmiValue}</h1>
            </div>
          </div>
          <div className="grid grid-cols-2  justify-items-center md:h-36 rounded-lg md:w-full md:bg-black  md:flex md:space-x-5 md:justify-center md:p-2">
            <div className="bg-red-600 mb-5 rounded-md  h-20 w-32 md:h-full md:w-40 md:text-xl text-white">
              <p className="flex justify-center pt-1 md:pt-2">
                <FaLessThan />{" "}
              </p>
              <p>18.5</p>
              <p>Under Weight</p>
            </div>
            <div className="bg-red-600 rounded-md h-20 w-32 md:h-full md:w-40 md:text-xl text-white">
              <p className="flex justify-center pt-2"> </p>
              <p>18.5 - 24.9</p>
              <p>Normal Weight</p>
            </div>
            <div className="bg-red-600 rounded-md h-20 w-32 md:h-full md:w-40 md:text-xl text-white">
              <p className="flex justify-center pt-2"></p>
              <p>25-29.9</p>
              <p>Over Weight</p>
            </div>
            <div className="bg-red-600 rounded-md h-20 w-32 md:h-full md:w-40 md:text-xl text-white">
              <p className="flex justify-center pt-2">
                <FaGreaterThan />{" "}
              </p>
              <p>30</p>
              <p>Obesity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info mx-5  md:mx-20 my-5 text-lg p-5 md:flex gap-10">
        <div className="leftSide  w-full h-full p-5 ">
          <h1><strong>A Body Mass Index (BMI) </strong>calculator is a tool designed to help individuals estimate whether they have a healthy body weight for their height. BMI is calculated using the following formula:</h1>
          <h1 className="text-xl font-bold">BMI= (height in meters)*2 / weight in kilograms</h1>
          <div>
            <h1>This measurement helps categorize people into various weight categories:</h1>
            <li>Underweight: BMI less than 18.5</li>
            <li>Normal weight: BMI between 18.5 and 24.9</li>
            <li>Overweight: BMI between 25 and 29.9</li>
            <li>Obesity: BMI of 30 or greater</li>
          </div>

        </div>
        <div className="rightSide my-12 md:my-0  w-full h-full p-5">
          <h1 className="text-xl font-bold">How It Works:</h1>
          <p><p className="text-xl font-bold">1. Input:</p> Users enter their weight (in kilograms) and height (in centimeters or meters).</p>
          <p><p className="text-xl font-bold">2. Calculation:</p> The tool converts height to meters (if necessary), applies the BMI formula, and calculates the BMI.</p>
          <p><p className="text-xl font-bold">3. Output:</p> Based on the result, users receive feedback indicating which category they fall into, helping them understand their health better.</p>
          <div className="mt-5">
            <h1 className="text-xl font-bold">limitations:</h1>
            <p>While BMI can give an indication of healthy or unhealthy weight, it doesn't consider factors such as muscle mass, bone density, or body composition. Therefore, athletes or people with high muscle mass might have a high BMI but still be healthy.</p>
            <p>This simple tool can be helpful in getting a general sense of weight status, but it’s always a good idea to consult healthcare professionals for a more comprehensive assessment.</p>
          </div>
        </div>
      </div>
    </>
  );
}
