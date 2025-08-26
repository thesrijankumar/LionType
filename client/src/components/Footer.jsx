import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-2 bottom-0 bg-[#2f2f2f] p-[20px] justify-around w-[100%]'>
        <div className='w-[500px] leading-snug whitespace-normal break-words'>
            <h2 className='text-xl text-center text-yellow-400'>LionType</h2>
            <hr className='w-[20%] ml-[170px] text-yellow-200'/>
            <p className='my-2'>
                LionType is an typing game developed by <a className='text-blue-300' href="https://github.com/thesrijankumar">Srijan Kumar</a> as a fun project
                using <a href="https://react.dev">React</a> in Frontend & <a href="https://Expressjs.com">Express</a> at Backend. It's basically something similiar to that of monkeyType but with live speed count, because that
                was missing in monkeyType and I wanted it. So I made one! Simple as that ^_^
            </p>
        </div>
        <div>
            <h2 className='text-blue-600 text-center'>Links </h2>
            <hr className='text-blue-500 text-center w-[30%]' />
            <a className='block' href='https://github.com/thesrijankumar/LionType'>Github</a>
            <a className='block' href='https://linkendin.inhttps://in.linkedin.com/in/thesrijankumar/'>LinkendIn</a>
            <a className='block' href='mail:thersrijankumar@proton.me'>Mail me</a>
        </div>
    </div>
  )
}

export default Footer