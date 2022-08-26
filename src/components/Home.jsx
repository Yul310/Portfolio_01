import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] '>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
                <p className='text-yellow-300 text-2xl'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Samyul Huh.</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a frontend Developer</h2>
                <p className=' text-[#8892b0] py-4 max-w-700 text-md'> who has an architecture background and loves problem solving and building, structuring digital experiences. </p>


                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-yellow-300 hover:border-yellow-300 hover:text-[#0a192f]'>

                        <Link to="work" spy={true} smooth={true} duration={500} className='group-hover:font-black' >
                        View Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300 font-black'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home