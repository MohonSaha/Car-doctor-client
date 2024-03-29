import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Serveces = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div className='mt-8'>
            <div className='text-center w-full'>
                <h3 className="text-2xl font-bold text-[#FF3811]">
                    Services
                </h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-20'>
                {
                    services.map(service=> <ServicesCard key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Serveces;