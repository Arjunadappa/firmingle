import React from 'react'

const formPage = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/178a847c-bb86-4968-9717-207203da9878" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF8555] text-black'>Talk to us</p>
            </div>
            <input className='my-2 bg-[#fff1de] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-2 p-2 bg-[#fff1de]' type="phone" placeholder='Phone' name='phone' />
            <input className='my-4 p-2 bg-[#fff1de]' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#fff1de]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 hover:bg-[#FF8555] hover:border-[#FF8555] px-4 py-3 my-8 mx-auto flex items-center'>Start My Project</button>
        </form>
    </div>
  )
}

export default formPage