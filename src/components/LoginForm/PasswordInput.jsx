import { useState } from 'react'
import { AiOutlineEye as Open, AiOutlineEyeInvisible as Close } from "react-icons/ai";
const PasswordInput = () => {
    const [isShow,setIsShow] =useState(false)
  return (
    <div className='mt-5'>
      <label htmlFor="password">Şifre</label>

      <div className="relative w-full">
        <input type={isShow ? "text" : "password"}  name='password' className="input" />

        <button onClick={() => setIsShow(!isShow)} type='button'  className='absolute end-3 top-[50%] translate-y-[-40%] text-zinc-700 text-xl cursor-pointer'>
          {isShow ? <Close/> : <Open/>}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
