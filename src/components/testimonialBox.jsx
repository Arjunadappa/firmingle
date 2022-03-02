

export default function testimonialBox(prop){
    return (
        <>
        <div className="testimonialBox flex"></div>
        <div className="basis-3/4">
            <img src={prop.Display} alt="" className='flex'></img>
                 {prop.data}
            </div>
        </>
    );
};