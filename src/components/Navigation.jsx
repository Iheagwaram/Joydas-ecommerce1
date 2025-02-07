import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";


const Navigation = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-grow pl-20 justify-center'>
                <FiArrowLeft className='w-80 h-07 justify-between justify-self-start px-0' onClick={() => { navigate(-1) }} />

                <FiArrowRight className='w-80 h-07 px-0 justify-self-start' onClick={() => { navigate(1) }} />

            </div>
        </>
    )
}

export default Navigation
