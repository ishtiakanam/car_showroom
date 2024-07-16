"use client"

import { CustomButtonProps } from '@/types';
import image from 'next/image'

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyles,rightIcon}:CustomButtonProps) => {
    return (
        <button disabled={false}
        typeof={btnType ||"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}>
          <span className={`flex-1 ${textStyles}`}>
            {title}
          </span>
          {rightIcon && (
            <div className='relative w-6 h-6'>
              <img src={rightIcon} alt="right icon" className='object-contain' />
            </div>
          )}
        </button>
    );
};

export default CustomButton;