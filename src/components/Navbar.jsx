import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
// import Logo from '../assets/Logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={Logo} alt="Logo Image" style={{ width: '50px' }} /> */}
      </div>

      {/* Menu */}

      <ul className='hidden md:flex'>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li>
          
            <a href="https://www.samyulhuh.com/">Design Work</a>
            
         
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>




      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaTimes /> : <FaBars />}

      </div>


      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="about" spy={true} smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="skills" spy={true} smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="work" spy={true} smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="contact" spy={true} smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>


      {/* Social Icons */}
      {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> */}
      <div className='flex fixed  top-[0%] left-0'>
        <ul className='flex flex-row'>
          <li className='w-[60px] h-[100px] flex justify-between items-center mt-[-40px] hover:mt-[-5px] duration-300 bg-yellow-300'>
            <a className='flex flex-col justify-between items-center  text-center w-full text-[#0a192f]'
              href="https://www.linkedin.com/in/samyul-huh/">
              Linkedin
              {"\n"}
              <p className='text-yellow-300'>-</p>
              {"\n"}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[100px] flex justify-between items-center mt-[-40px] hover:mt-[-5px] duration-300 bg-yellow-300'>
            <a className='flex flex-col justify-between items-center  text-center w-full text-[#0a192f]'
              href="https://github.com/Yul310">
              Github
              {"\n"}
              <p className='text-yellow-300'>-</p>
              {"\n"}
              <FaGithub size={30} />
            </a>
          </li>
          {/* <li className='w-[60px] h-[100px] flex justify-between items-center mt-[-40px] hover:mt-[-5px] duration-300 bg-yellow-300'>
            <a className='flex flex-col justify-between items-center  text-center w-full text-[#0a192f]'
              href="">
              Email
              {"\n"}
              <p className='text-yellow-300'>-</p>
              {"\n"}
              <HiOutlineMail size={30} />
            </a>
          </li> */}
          <li className='w-[60px] h-[100px] flex justify-between items-center mt-[-40px] hover:mt-[-5px] duration-300 bg-yellow-300'>
            <a className='flex flex-col justify-between items-center  text-center w-full text-[#0a192f]'
              href="https://drive.google.com/file/d/1bvbIlW5vcdgQRvG3kyAFHlxnfjWCh7o0/view?usp=sharing">
              Resume
              {"\n"}
              <p className='text-yellow-300'>-</p>
              {"\n"}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]'
              href="https://www.linkedin.com/in/samyul-huh/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]'
              href="https://github.com/Yul310">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]'
              href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-yellow-300'>
            <a className='flex justify-between items-center w-full text-[#0a192f]'
              href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}




        </ul>
      </div>

    </div>
  )
}

export default Navbar