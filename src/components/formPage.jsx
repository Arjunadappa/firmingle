import React,{useState} from "react";

import { useForm } from "react-hook-form";



export default function FormPage(){
//react state and hooks
const {register , handleSubmit,formState:{errors}} =useForm();
// const [name,setName]=useState('');
// const [Number,setNumber]=useState('');
// const [Mail,setMail]=useState('');
// const [service,setService]=useState('');
// const [message,setMessage]=useState('');
// const [enteredNameValid,setEnteredNameValid]=useState(true);


// const nameChangeHandler=event=>{
//     setName(event.target.value);
// };

// const mailChangeHandler=event=>{
//     setMail(event.target.value);
// };

// const numberChangeHandler=event=>{
//     setNumber(event.target.value);
// };

// const messageChangeHandler=event=>{
//     setMessage(event.target.value);
// };

// const serviceChangeHandler=event=>{
//     setService(event.target.value);
// };


const formSubmissionHandler=event=>{
    // event.preventDefault();
    // if(name.trim()== ''){
    //     setEnteredNameValid(false);
    //     return;
    // }

    
    console.log(event);
    // setName('');
    // setNumber('');
    // setMessage('');
    // setMail('');
    // setService('All');
    };

return (
    <form onSubmit={handleSubmit(formSubmissionHandler)}className="mt-10">
        <div className="mt-20 px-20">
        <label className="font-bold text-5xl px-10">Talk to us</label>
        <h2 className="text-3xl mt-5 px-12 text-gray-600 antialiased">Receive a call from our Experts</h2>
        <div className="grid grid-cols-2 ml-10 mt-10 text-2xl gap-5 gap-y-8">

              <div>
            <label >Full Name</label>
                <div className="relative mt-2">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className=" text-gray-500 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                </div>
               
                <input type="text" {...register("fullName",{required:true})}  id="name icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 pl-10 p-2.5" placeholder="Bob Smith"/>
                </div>
                {errors.fullName && <p className="text-lg text-red-500 ml-5 mt-2">Please enter a valid name</p>}
            </div>          

            <div>
            <label>Your Email</label>
                <div className="relative mt-2">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="email"  {...register("email",{required:true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@mail.com"/>
                </div>
                {errors.email && <p className="text-lg text-red-500 ml-5 mt-2"> Please Enter a Valid Mail</p>}
            </div>

            <div>
            <label>Phone number</label>
            <div className="relative mt-2">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>                    
                </div>
                <input type="number" {...register("phNumber",{required:true,pattern:[0-9]})}  id="phone-number-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 pl-10 p-2.5" placeholder="9113574783"/>
                </div>
                {errors.phNumber && <p className="text-lg text-red-500 ml-5 mt-2">Please Enter valid number</p>}
            </div>

            <div className="row-span-6">
            <label>Message</label>
            <textarea  id="message"  rows="6" className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus: -[#FF8555] focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <div>
            <label>Services</label>
            <div>
            <div className="inline-block relative w-1/2 mt-2">
            <select {...register("option",{required:true})} className="block appearance-none w-full bg-gray-50 border border-gray-300 p-2.5 rounded-lg leading-tight focus:outline-none text-lg text-gray-600" >
                <option >All</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="btn-submit flex justify-end pl-20 mr-20 " >
            <button type='submit' className=" font-emoji p-2.5 bg-[#FF8555] hover:bg-[#FFAE8C] border border-gray-300 text-white text-2xl font-semibold rounded-lg">START MY PROJECT</button>
        </div>
    </form>
)
};