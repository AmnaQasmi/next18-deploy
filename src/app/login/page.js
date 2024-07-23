"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GiHomeGarage } from "react-icons/gi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  // set Navigate
  const route = useRouter();
  const Navigate = (Name) => {
    route.push(Name)
  }
  // set setvalue
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, desc, email, password);
    const data = { phone, name, email, password, desc };

    // now fetch
    fetch('http://localhost:3000/api/contact', {
      method: 'POST', // or'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        setPhone('');
        setName('');
        setDesc('');
        setEmail('');
        setPassword('');
        return console.log({ message: "successfully joined" });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // now set handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') setPhone(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'desc') setDesc(value);
    if (name === 'name') setName(value);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='absolute'>

      <div className='flex flex-row md:flex-row md:justify-center justify-between items-center absolute text-[#fffdfd]'>
        {/* right home garage icon */}
        <ul>
          <li className=' absolute mx-5'>
            <Link href="/" >
              <GiHomeGarage
                className='text-[#fffdfd] lg:my-4 lg:mx-2 my-1 text-3xl lg:text-5xl'
                onClick={() => Navigate("/")}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex justify-end items-start '>
        <h3 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium lg:py-4 lg:mt-5 justify-center text-center text-[#532103e8] absolute font-[audimatregular] lg:px-6'>
          JOIN US
        </h3>
        <form onSubmit={handleSubmit} className='flex flex-col absolute'>
          <div className='lg:mt-[85px]'>
            <ul className='lg:text-2xl text-xl font-serif font-medium lg:py-5'>
              <li className='items-center justify-center text-center my-7'>
                <label htmlFor="name" className='text-[#532103e8] p-2'>Name</label>
                <input type="text" className="rounded-md bg-[#e6c2ade8] border-[2px] border-[#83431ee8] text-[#532103e8]" id="name" name='name' value={name} onChange={handleChange} required placeholder='Name' />
              </li>
              <li className='items-center justify-center text-center my-7'>
                <label htmlFor="email" className='text-[#532103e8] p-2'>Email</label>
                <input type="email" className="rounded-md bg-[#e6c2ade8] border-[2px] border-[#83431ee8] text-[#532103e8]" id="email" name='email' value={email} onChange={handleChange} required placeholder='Email' />
              </li>
              <li className='items-center justify-center text-center my-7'>
                <label htmlFor="phone" className='text-[#532103e8] p-2'>Phone</label>
                <input type="text" className="rounded-md bg-[#e6c2ade8] border-[2px] border-[#83431ee8] text-[#532103e8]" id="phone" name='phone' value={phone} onChange={handleChange} required placeholder='Phone' />
              </li>
              <li className='items-center justify-center text-center my-7'>
                <label htmlFor="password" className='text-[#532103e8] p-2'>Password</label>
                <input type={showPassword ? "text" : "password"} className="rounded-md bbg-[#cc997ce8] border-[2px] bg-[#e6c2ade8] border-[#83431ee8] text-[#532103e8]" id="password" name='password' value={password} onChange={handleChange} required placeholder='Password' />
                <button type="button" onClick={togglePasswordVisibility} className="toggle-password-btn p-1 text-[#632e10e8]">
                  {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                </button>
              </li>
              <li className='items-center justify-center text-center my-7'>
                <label htmlFor="desc" className='text-[#532103e8] p-1'>Review</label>
                <textarea className=" rounded-md bg-[#e6c2ade8] border-[2px] border-[#83431ee8] text-[#532103e8]" id="desc" name='desc' value={desc} onChange={handleChange} required placeholder='Elaborate Your Concern' />
              </li>
              <li className='my-7 lg:ml-24  mitems-center justify-center text-center'>
                <button type="submit" className='w-fit rounded-md bg-[#b8754ee8] border-[2px] border-[#83431ee8] py-1 px-1'>Submit</button>
              </li>
            </ul>
          </div>
        </form>
      </div >
      <div className='flex justify-end items-end '>
        <Image
          src={"/Ingo.jpg"}
          alt='dp'
          width={2600}
          height={40}
          className=' '
        />
        <h3 className='text-[#532103e8] absolute lg:text-6xl md:text-3xl text-xl font-[audimatregular] pb-6 pr-6 '>
          JOIN OUR COMMUNITY
        </h3>
      </div>
      {/* nex video for introduction */}
      <div className='flex items-center text-center justify-center'>
        <ul >
          <li className='lg:text-5xl md:text-3xl text-2xl font-[Menlo] text-[#fffdfd] '>
            <h4 className='font-extrabold md:mr-[150px] absolute uppercase my-3 mx-5'> Let's Explore The Best Ride Togather</h4>
            <video
              autoPlay muted loop style={{
                height: "115vh", // or any other value you want
                width: "100%", // optional
              }}
            >
              <source src="/VMotor.mp4" type="video/mp4" />
            </video>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Login;
