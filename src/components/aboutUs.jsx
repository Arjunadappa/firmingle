import firmingleLogo from '../logos/logo.jpeg';
function aboutUs() {
    const address="Block 28, Building No. 78, First Floor,";
    return (
        <>      
            <main>

                <div>
                    <div className="w-full h-96 relative">
                        <img className="w-full h-full object-cover absolute mix-blend-overlay" src="../images/back.jpg" alt="" />
                        <div className="p-24">
                            <h1 className="text-center py-41 text-5xl text-white font-bold font-sans ">
                                Everything You Need To Secure Funds And Turn
                                Your Idea Into An Unicorn
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-black text-3xl font-family Nunito sans font-bold ">
                        <h1 className="text-center py-8">Our Journey</h1>
                    </div>

                </div>
            </main>
            <main className="mt-10 mx-auto max-w-7xl px-2 sm:mt-12 sm:px-2 md:mt-4 lg:mt-6 lg:px-8 xl:mt-8">
                <div className="sm:text-center lg:text-left">
                    <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 lg:text-3xl ">
                        Backed and led by industry experts, Firmingale help you write, design and model your investment collaterals.
                        If you have passion towards the startup that you are building and want to scale it up through funding, we are
                        the best platform for you.
                    </p>
                </div>
            </main>
            <main>
                <div className=" flex h-60 bg-firmingleOrange mt-10 text-[#0A0A0A] text-5xl leading-tight">
                    <div className="basis-4/12 py-12 text-center">
                        750+ <br></br>Projects Completed
                    </div>
                    <div className="basis-4/12 py-12 text-center" >$25M+ <br></br>raised</div>
                    <div className="basis-4/12 py-12 text-center">60+ <br></br>funded start ups</div>
                </div>
            </main>
            <main className="mt-10 mx-auto max-w-7xl px-2 sm:mt-12 sm:px-2 md:mt-4 lg:mt-6 lg:px-8 xl:mt-8">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-black text-3xl text-left font-bold ">
                        Our mission
                    </h1>
                    <p className="mt-2 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-2xl ">
                        To help emerging startups scale up with the required startup capital. So that you 
                        spend less time fundraising and more time building your business.
                    </p>
                    <p className="mt-2 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-2xl ">
                    Right from preparing investment collaterals to getting funded by
                     top investors, we assist you at every step of the way.
                    </p>
                    <p className="mt-2 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-2xl ">
                    We assign you expert consultants to identify gaps and help you with the best possible solutions.
                    </p>
                </div>
            </main>
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
                    <a href="admin@firmingle.com" className='ml-3 hover:text-[#FF8555]'>admin@firmingle.com</a>
                </div>
            </div>
    </div>



        </>
    )
};

export default aboutUs;