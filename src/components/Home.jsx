import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'





const Home = () => {

   


    return (
        <>


            <div name='home' className=' w-full h-screen '>

                {/* Container */}
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-[100%]'>



                    <p className='text-[#F8FF24] text-2xl'>Hi, my name is </p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>Samyul Huh.</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#909090]'>I'm a frontend Developer</h2>
                    <p className=' text-[#909090] py-4 max-w-700 text-xl'> who has an architecture background and loves problem solving and building, structuring digital experiences. </p>


                    <div >
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#F8FF24] hover:border-[#F8FF24] hover:text-[#0a192f]'>

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

           

        </>
    )
}

export default Home