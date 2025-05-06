
import UserAvatar from './UserAvatar'
import TextArea from './TextArea'
import Preview from './Preview'
import FormActions from './FormActions'
import { toast } from 'react-toastify'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { useRef, useState } from 'react'
import uploadToStorage from "../../firebase/uploadToStorage"
const PostForm = ({user}) => {
const [isLoading,setIsLoading] = useState(false)
const [preview,setPreview] =  useState(null) // resim yüklenmeden önizleme state'i
const fileRef = useRef()
// ! Resmin önizleme URLsini oluşturan fonk.
const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        setPreview(URL.createObjectURL(e.target.files[0]))
    }
}
// önizlenen resmi iptal eden fonk
const clearImage = () => {
    // önizleme state'ini sıfırla
    setPreview(null)

    // file inputun valuesunu temizle
    if (fileRef.current) {
        fileRef.current.value = ""
    }
}

    const handleSubmit = async (e) => {
     e.preventDefault() 
     
    // ! inputlardaki verileri al
    const text = e.target.text.value
    const file = e.target.image.files[0];
    console.log(file)

    // ! veri yoksa bildirim gönder
    if(!text.trim() && !file) return toast.warning("Lütfen içeriği belirleyiniz")
    
    // ! tweet ekleme
    try {
    setIsLoading(true)

    // Resim varsa resmi storage'a yükle ve URL'sini al
    const url = await uploadToStorage(file)
// koleksiyonun referansını al
const collectionRef = collection(db,"tweets")

// Yeni tweet belgesini koleksiyona ekle 
await addDoc(collectionRef, {
    content : {text,image: url },
    likes: [],
    isEdited: false,
    createdAt : serverTimestamp(),
    user : {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL
    }
})

// Formu Sıfırla
e.target.reset()
setPreview(null)

    } catch (error) {
       toast.error("Bir Sorun Oluştu")
    } finally {
setIsLoading(false)
    }
    }
  return (
    <div className='border-b border-tw-gray p-4 flex gap-3'>
      <UserAvatar photo={user.photoURL} name={user.displayName}  />

      <form onSubmit={handleSubmit} className='w-full pt-1'>
    <TextArea/>

    <Preview isLoading={isLoading} src={preview} clearImage={clearImage}/>

    <FormActions isLoading={isLoading} fileRef={fileRef} onImageChange={onImageChange}/>
      </form>
    </div>
  )
}

export default PostForm
