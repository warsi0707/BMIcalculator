import { useState } from "react"

export default function BMICalc(){
    let [bmiValue, setBmiValue] = useState("")
    let [height, setHeight] = useState("")
    let [weight, setWeight] = useState("")
    let [message, setMessage] = useState("No data")

    const heightInMeter = height / 100;
    const BMI = (weight / (heightInMeter * heightInMeter)).toFixed(2)

    

    const handleSubmit = ()=>{
        if(height && weight){
            setBmiValue(BMI)

            let message = "";
            if (BMI< 18.5){
                message = "Your are under weight";
            } else if(BMI >= 18.5 && BMI < 25){
                message = "You are in normal weight";
            }else if (BMI >= 25 && BMI< 30){
                message = "you are over weight"
            }else{
                message = "You are obses"
            }
            setMessage(message)

        } else{
            setBmiValue('')
        }
        console.log("printed")
    }
    let handleHeight = (event) =>{
        setHeight(event.target.value)
       
    }
    let handleWeight = (event) =>{
        setWeight(event.target.value)
        
    }

    return(
        <>
        <div className="conatiner bg-blue-300 p-10 m-5 rounded-md  relative">
            <div className="content  flex flex-col text-center ">
                <div className="input  ">
                    <input type="number" value={height} onChange={handleHeight} className="p-2 rounded-md text-black w-[250px] " placeholder="Enter your height in (CM) " /> <br /> <br />
                    <input type="number" value={weight} onChange={handleWeight} className="p-2 rounded-md text-black w-[250px]"  placeholder="Enter your weight in (KG) " /> <br /><br />
                    <button onClick={handleSubmit} className="mt-2 bg-purple-600 p-2 rounded-lg hover:bg-slate-300" >Get BMI</button>
                </div>
                <div>
                    <h1 className="mt-2 font-medium text-xl">{bmiValue}</h1> 
                    <h1 className="text-xl">{message}</h1>
                </div>
                
            
            </div>
            
            
           
        </div>
        </>
    )
}