import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import python from '../assets/pythonPic.png'
import ReactLogo from '../assets/react.png'
import Node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/Typescript_s.png'
import mongodb from '../assets/MongoDB.png'
// import ExpressLogo from '../assets/images/express.png'
// import MongoLogo from '../assets/images/mongo.png'
// import MongoDBLogo from '../assets/images/mongodb.png'
// import PostgresLogo from '../assets/images/postgres.png'

// import DjangoLogo from '../assets/images/django.png'


const Skills = () => {
    return (
        <div name='skills' className= "w-full my-[100px] h-screen bg-[#343434] text-white ">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F8FF24]'>Skills</p>
                    <p className='py-4'>Technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2  sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'> HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'> CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
                        <p className='my-4'> JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={python} alt="JAVASCRIPT icon" />
                        <p className='my-4'> PYTHON</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                        <p className='my-4'> REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'> NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon" />
                        <p className='my-4'> TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typescript} alt="tailwind icon" />
                        <p className='my-4'> TYPESCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongodb} alt="tailwind icon" />
                        <p className='my-4'> MONGODB</p>
                    </div>






                </div>
         




            </div>
        </div>
    )
}

export default Skills