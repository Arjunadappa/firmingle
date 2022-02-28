

export default function testimonialBox(prop){
    return (
        <>
        <div className="testimonialBox flex"></div>
        <div className="basis-3/4">
            <img src={prop.Display} alt="" className='flex'></img>
            {/* <p>“We reached out to them for our Firmingle deck with 
               little info as we're still a new startup. They guided us well in identifying our high's and low's.
                 Their team's cooperative efforts are a total delight. Looking forward to working on many more projects.”
                 <br></br><br></br> -Kaushik S founding partner</p> */}
                 {prop.data}
            </div>
        </>
    );
};