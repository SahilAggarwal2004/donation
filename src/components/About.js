import React from 'react'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'

const About = () => {
    return (
        <>
            <h1 className='text-4xl font-bold m-4 -mt-12 flex justify-center'>About Us</h1>
            <div className='flex w-11/12 justify-center m-10'>
                <img className='w-1/3' src={about1} alt="" />
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='font-bold text-lg m-2'>Use of Donations made by you</h1>
                        <p className='m-2'>We with the help of your donations we work towards creating quality and equitable opportunities for children and communities to learn and grow with a view to long term sustainable change.</p>
                    </div>
                </div>
            </div>
            <div className='flex w-11/12 justify-center m-10'>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='font-bold text-lg m-2'>Education for children</h1>
                        <p className='m-2'>Thousands of children are helped by donors who accompany them along their journey. Sponsorship allows a child to attend school and learning the basic skills of life.</p>
                    </div>
                </div>
                <img className='w-1/3' src={about2} alt="" />
            </div>
            <div className='flex w-11/12 justify-center m-10 border-b-2'>
                <img className='w-1/3' src={about3} alt="" />
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='font-bold text-lg m-2'>Making them future ready</h1>
                        <p className='m-2'>We at DoNations make children problem solvers, providing them a launching pad for their future by offering the children complimentary courses.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About