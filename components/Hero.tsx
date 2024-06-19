"use client"

import image from 'next/image'
import CustomButton from './CustomButton';

const hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    FInd,Book,or rent a car - quickly
                </h1>
                <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process. </p>

                <CustomButton 
                title = "Explore Cars"
                containerStyles = "bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                  <div className='hero__image'>
                        <img src="/hero.png" alt="hero" className='object-contain' />
                  </div>
                  <div className='hero__image-overlay'/>
            </div>
        </div>
    );
};

export default hero;