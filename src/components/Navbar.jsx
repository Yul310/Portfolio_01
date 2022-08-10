import React, {useState} from 'react'
import { FaBars, FaTimes,FaGithub,FaLinkedin, } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
// import Logo from '../assets/Logo.png'

const Navbar = () => {

const [nav,setNav] = useState(false)
const handleClick = () => setNav(!nav)



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={Logo} alt="Logo Image" style={{ width: '50px' }} /> */}
      </div>

      {/* Menu */}
     
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
    



      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaTimes /> : <FaBars />}
       
      </div>


      {/* Mobile Menu */}
        <ul className={!nav?'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Resume</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>
     

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]' 
            href="https://www.linkedin.com/in/samyul-huh/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]' 
            href="https://github.com/Yul310">
             Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]' 
            href="/">
             Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]' 
            href="/">
             Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>




        </ul>
      </div>

    </div>
  )
}

export default Navbar