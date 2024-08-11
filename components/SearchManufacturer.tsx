'use client'
import { SearchManufacturerProps } from '@/types';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import {manufacturers} from '@/constants'
import React, { Fragment, useState } from 'react';
import image from 'next/image'

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
    const [query,setQuery] = useState('')

    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g,""))
    ))

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <ComboboxButton className='absolute top-[14px]'>
                       <img src="/car-logo.svg" width={20} height={20} className='ml-4' alt="Car logo" />
                    </ComboboxButton>
                </div>
                <ComboboxInput
              className='search-manufacturer__input'
              placeholder='Volkswagen'
              displayValue={(manufacturer:string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
            />
              <Transition as={Fragment} show={true}
                     leave='transition ease-in duration-100'
                     leaveFrom='opacity-100'
                     leaveTo='opacity-0'
                     afterLeave={() => setQuery('')}>

               <ComboboxOptions>
                 { 
                    filteredManufacturers.map((item) => (
                        <ComboboxOption
                            key={item}
                            value={item}
                            // className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            className={`relative search-manufacturer__option data-[active]:bg-primary-blue-100 data-[active]:text-white text-gray-900 `}
                        >
                            {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
                            <div className="text-sm/6 text-white">{item}</div>
                        </ComboboxOption>
                        // <ComboboxOption key={item}
                        //    className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue-100 text-white' : 'text-gray-900'}`}
                        //    value={item}
                        // >
                        //   {({selected,active}) => (
                        //     <>
                        //     <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        //         {item}
                        //     </span>
                        //     {selected ? (
                        //         <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white': 'text-teal-600'}`}>
                        //         </span>
                        //     ) : null}
                        //     </>
                        //   )}
                        // </ComboboxOption>
                    ))
                 
                }
               </ComboboxOptions>
            </Transition>
            </Combobox>

        </div>
    );
};

export default SearchManufacturer;