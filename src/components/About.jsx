import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Samyul.Nice to meet you. </p>
                    </div>
                    <div>
                        <p>Through coding, one’s imagination becomes an actual experience, making people’s life more convenient and efficient.
                            I think coding is the modern version of a magic spell, and I am passionate about building excellent apps or software that improves the lives of those around me.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About