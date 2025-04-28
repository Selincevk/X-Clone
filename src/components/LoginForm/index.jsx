import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import ForgotPassword from './ForgotPassword'
import Button from './Button'
import AuthToogle from './AuthToogle'
import { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
 const navigate =  useNavigate()
  // Kaydolma modunda mıyız ? 
const [isSign,setIsSign]= useState(false)

// Form Gönderilinde
const handleSubmit = async (e) => {
  e.preventDefault()

  // inputlardaki veriyi al
  const formData = new FormData(e.target);
  const { email, password } = Object.fromEntries(formData.entries());

  // ! kaydolma : yeni hesap oluştur
  try {
    if (isSign) {
      // kaydoma modunda: yeni hesap oluştur
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // doğrulama epostası gönder
      await sendEmailVerification(res.user);

      // giriş yap moduna geç (otomatik geçiş)
      setIsSign(false);

      // bildirim gönder
      toast.info("Malinize doğrulama epostası gönderildi");
    } else {
      // ! giriş modundaysa: oturum aç
      const res = await signInWithEmailAndPassword(auth, email, password);

      // mailini doğrulamamış ise bildirim gönder
      if (!res.user.emailVerified) {
        return toast.info("Lütfen mailinizi doğrulayın");
      }

      // bildiirm gönder ve anasayfaya yönlendir
      navigate("/feed");
      toast.info("Hesabınıza giriş yapıldı");
    }
    // formu temizle
    e.target.reset();
  } catch (error) {
    // hatayı bildirim olarak gönder
    toast.error("Hata: " + error.code);
  }
};
  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <EmailInput/>

      <PasswordInput/>

      <ForgotPassword show={!isSign} />

      <Button isSign={isSign} />

      <AuthToogle isSign={isSign} setIsSign={setIsSign} />
    </form>
  )
}

export default LoginForm
