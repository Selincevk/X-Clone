import React from 'react'
import List from './List'
import PostForm from '../../components/PostForm'

const Main = ({user}) => {
  return (
    <div className='border border-tw-gray overflow-y-auto'> 
    <header className='border-b border-tw-gray p-4 font-bold'>Anasayfa</header>

<PostForm user={user} />
    <List/>
      
    </div>
  )
}

export default Main
