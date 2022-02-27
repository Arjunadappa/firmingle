
import firmingleLogo from '../logos/logo.jpeg';
import {MailIcon}from '@heroicons/react/outline'
function footer(){
    const address="Block 28, Building No. 78, First Floor,";
return (
   
    <div className="mt-10 h-180 flex bg-slate-50 py-10 ">
            <div className="basis-3/7">
                <img src={firmingleLogo} className="h-8 ml-36 mt-10"></img>
                <div className="flex-row ml-36 pt-10 text-base text-neutral-600">
                    <div>
                    {address}
                    </div>
                    <div>
                    Rajarajeshwari,Bengaluru- 560038, India.
                    </div>
                </div>
            </div>
            <div className="ml-12 basis-1/2">
                <div className='flex'>

            <div className='text-left font-bold text-xl mt-10 px-4'>
            Company
            <div className='py-10 mb-4 text-base font-normal text-neutral-600'>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">About Us</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Career</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Privacy Policy</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Contact Us</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Blogs</a></div>
             </div>
            </div>

             <div className='text-left font-bold text-xl mt-10 px-12'>
            Services
            <div className='py-10 mb-4 text-base font-normal text-neutral-600'>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Firmingle Deck</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Financial Model</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Valuation</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Business Plan</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Accelerate X</a></div>
             </div>
            </div>

            <div className='text-left font-bold text-xl mt-10 px-10'>
            Additional Services
            <div className='py-10 mb-4 text-base font-normal text-neutral-600 '>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Presentation Design</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Digital Marketing</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Branding</a></div>
            <div className='mb-4 hover:text-[#FF8555]'><a href="#">Videos</a></div>
             </div>
            </div>

            </div>
            </div>
            <div className="basis-1/4 mt-10 pl-4">
                <div className="flex">
                    <MailIcon className='h-7 w-5'></MailIcon>
                    <a href="admin@firmingle.com" className='ml-3 hover:text-[#FF8555]'>admin@firmingle.com</a>
                </div>
            </div>
    </div>
)
}

export default footer;