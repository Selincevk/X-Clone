
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import PageLoader from '../Loader/PageLoader'
import { toast } from 'react-toastify'
import { auth } from '../../firebase'



const Protected = () => {

  const [user,setUser] = useState(undefined)

  useEffect(() => {
    // kullanıcı oturum verisine erişme
  const unsub = onAuthStateChanged(auth,(active_user) => setUser(active_user))

  // kullanıcı sayfadan ayrılınca aboneliğini durdur
  return () => unsub()
  },[])

  // Oturum verileri gelene kadar yükleniyor...
  if (user === undefined) return <PageLoader/>

  // Kullanıcının oturumu kapalıysa logine yönlendir 
  if(user === null || user?.emailVerified === false) {
    if (user?.emailVerified === false) toast.info("Mailinizi doğrulayın");

    return <Navigate to="/" replace />

  }


  return <Outlet context={user}/> // outlet alt route elementini ekrana basıyor
}

export default Protected
