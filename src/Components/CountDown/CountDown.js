import React, { useEffect, useState } from 'react';
import './CountDown.css'

const CountDown = () => {

    
          const [value, setValue] = useState()
        
          useEffect(() => {
            const timer = setTimeout(() => {
              setValue((v) => (v <= 0 ? value : v - 1))
            }, 1000)
        
            return () => {
              clearTimeout(timer)
            }
          }, [value])


    return (
        <div>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span style={{value:"--15"}}></span>
                    </span>
                   <small className='text-info font-bold text-xl'>days</small>
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span style={{value:"--10"}}></span>
                    </span>
                    <small className='text-info font-bold text-xl'>Hours</small>
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span style={{value:"--24"}}></span>
                    </span>
                    <small className='text-info font-bold text-xl'>Min</small>
                </div>
                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span class="countdown font-mono text-5xl">
                        <span style={{value:"--48"}}></span>
                    </span>
                    <small className='text-info font-bold text-xl'>Sec</small>
                </div>
            </div>
        </div>
    );
};

export default CountDown;