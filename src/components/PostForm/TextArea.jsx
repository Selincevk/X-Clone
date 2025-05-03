import {memo} from 'react'

const TextArea = () => {
  return (
    <textarea name="text" 
    placeholder='Neler Oluyor'
    className='w-full bg-transparent mb-2 md:text-lg text-zinc-300 outline-none resize-y min-h-[40px] max-h-[300px]'
    />
  )
}

export default memo(TextArea)
