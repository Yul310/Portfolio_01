import React from 'react'
import workone from '../assets/works/project1.png'
import worktwo from '../assets/works/project2.png'
import workthree from '../assets/works/project3.png'
import workfour from '../assets/works/project4.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-yellow-300'>My Works</p>
                    <p className='py-6'></p>
                </div>



                <div
                    className='grid  sm:grid-cols-1 md:grid-cols-1 gap-4'>

                {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${workone})` }}
                        className='mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hoverEffect */}
                        <div className='opacity-0  group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white  tracking-wider'>
                                Angry Zverev - HTML Canvas Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://yul310.github.io/Project01_Angry-Zverev/">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Yul310/Project01_Angry-Zverev">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${worktwo})` }}
                        className='mt-10 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hoverEffect */}
                        <div className='opacity-0  group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white  tracking-wider'>
                                Wish&Shop - Full Stack with JS servers & NoSQL
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://wishandshop.herokuapp.com/">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Yul310/ShopAndWish">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${workthree})` }}
                        className='mt-10 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hoverEffect */}
                        <div className='opacity-0  group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white  tracking-wider'>
                                Clear Sight - MERN Stack App Group Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://clearsight-sei.herokuapp.com/">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Yul310/Project-3">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${workfour})` }}
                        className='mt-10 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hoverEffect */}
                        <div className='opacity-0  group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white  tracking-wider'>
                                Tripplan - MERN Stack App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://tripnote.herokuapp.com//">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Yul310/Trip_Planner">
                                    <button className='text-center rounde-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>











                </div>
                







            </div>

        </div>
    )
}

export default Work