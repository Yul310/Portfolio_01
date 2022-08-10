import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1400px] w-full px-4 grid grid-cols-2 gap-10'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1400px] w-full px-4 grid sm:grid-cols-2 gap-10 mt-5'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Samyul.Nice to meet you. </p>
                    </div>
                    <div>
                        <p className='text-xl'>Through coding, one’s imagination becomes an actual experience, making people’s life more convenient and efficient.
                            I think coding is the modern version of a magic spell, and I am passionate about building excellent apps or software that improves the lives of those around me.
                        </p>
                    </div>
                </div>





                {/* Experience */}
                <div className='max-w-[1400px] w-full px-4 grid grid-cols-2 gap-10 mt-[100px]'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>Experience</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1400px] w-full px-4 grid sm:grid-cols-2 gap-10'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>General Assembly </p>
                    </div>
                    <div className="flex flex-inline items-center">
                        <p className='text-xl'>New York &nbsp;&nbsp; | &nbsp;| &nbsp;&nbsp; Software Engineering Immersive</p>
                    </div>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Kohn Pedersen Fox </p>
                    </div>
                    <div className="flex flex-inline items-center">
                    <p className='text-xl'>New York &nbsp;&nbsp; | &nbsp;| &nbsp;&nbsp; Architectural Designer</p>
                    </div>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Kengo Kuma Architects</p>
                    </div>
                    <div className="flex flex-inline items-center">
                        <p className='text-xl'>Tokyo &nbsp;&nbsp; | &nbsp;| &nbsp;&nbsp; Design Internship</p>
                    </div>
                
                </div>




                {/* education */}
                <div className='max-w-[1400px] w-full px-4 grid grid-cols-2 gap-10 mt-[100px]'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>Education</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1400px] w-full px-4 grid sm:grid-cols-2 gap-10'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>General Assembly </p>
                    </div>
                    <div className="flex flex-inline items-center">
                        <p className='text-xl'>New York &nbsp;&nbsp; | &nbsp;| &nbsp;&nbsp; Software Engineering Immersive</p>
                    </div>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Google UX Design Courses </p>
                    </div>
                    <div className="flex flex-inline items-center">
                        <p className='text-xl'>On-line courses  </p>
                    </div>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Columbia University</p>
                    </div>
                    <div className="flex flex-inline items-center">
                        <p className='text-xl'>New York &nbsp;&nbsp; | &nbsp;| &nbsp;&nbsp; Master of Architecture</p>
                    </div>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hong-Ik University</p>
                    </div>
                    <div className="flex flex-inline items-center">
                        <p className='text-xl'>Seoul &nbsp;&nbsp; | &nbsp;| &nbsp;&nbsp; Bachelor of Architecture</p>
                    </div>
                </div>









            </div>

        </div>
    )
}

export default About