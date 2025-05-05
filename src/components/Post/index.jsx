import UserAvatar from '../PostForm/UserAvatar'
import Buttons from './Buttons'
import Content from './Content'
import Dropdown from './Dropdown'
import UserInfo from './UserInfo'

const Post = ({tweet}) => {
  return (
    <div className='border-b border-tw-gray p-4 flex gap-2'>
        <UserAvatar photo={tweet.user?.photo} name={tweet.user?.name}/>
<div className="w-full">
    <div className="flex justify-between">
<UserInfo tweet={tweet} />
<Dropdown tweet={tweet} />
    </div>
    <Content data={tweet.content} />

    <Buttons tweet={tweet} />
</div>
    </div>
  )

}

export default Post
