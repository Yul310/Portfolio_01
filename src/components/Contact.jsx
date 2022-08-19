import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className="w-full  bg-[#0a192f] flex justify-center items-center p-4  my-[100px]">
            <form method='post' action="https://getform.io/f/9359366a-3e00-493d-a5b2-cbf3bb960028" className='flex flex-col max-w-[700px] w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-white'>
                        Contact
                    </p>
                    <p className='text-white py-4'> Please feel free to contact me . </p>
                </div>
                <input  className="p-2 bg-white" type="text" placeholder='Your name' name='Name' />
                <input className="my-4 p-2 bg-white" type="email" placeholder='Your Email' name='email' />
                <textarea className=" p-2 bg-white"name="message" rows="10" placeholder='Message'></textarea>
                <button className=" text-2xl rounded-md text-white border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 my-8 mx-auto flex items-center">Submit</button>
            </form>

        </div>
    )
}

export default Contact