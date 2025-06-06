import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { db, auth } from "../../firebase";
const Buttons = ({ tweet }) => {
  // aktif kullanıcı id'si tweet'i likelayanaların arasında var mı=
  const isLiked = tweet.likes.includes(auth.currentUser.uid);
  // ! Like butonuna tıklanınca
  const toggleLike = async () => {
    // güncellenecek dokümanın referansını al
    const docRef = doc(db, "tweets", tweet.id);

    //like'ladıysam: kullanıcı id'sini likes dizisinden kaldır
    // like'lamadıysam: kullanıcı id'sini likes dizisine ekle
    await updateDoc(docRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center text-zinc-500">
      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        {" "}
        <FaRegComment />
      </button>
      <button className="post-icon hover:text-green-400 hover:bg-green-400/20">
        <FaRetweet />
      </button>

      <button
        onClick={toggleLike}
        className="post-icon hover:text-pink-400 hover:bg-pink-400/2 relative flex items-center"
      >
        {isLiked ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
        <span className={`absolute -end-1 ${isLiked && "text-pink-500"}`}>
          {tweet.likes.length}
        </span>
      </button>

      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaShareNodes />
      </button>
    </div>
  );
};

export default Buttons;
