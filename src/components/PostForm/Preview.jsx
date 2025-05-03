import { IoMdClose } from "react-icons/io";

const Preview = ({clearImage, isLoading, src}) => {
  return (
    src && (
      <div className="relative mb-5">
        <button type="button" onClick={clearImage} disabled={isLoading} className="absolute top-3 end-3 p-3 bg-primary/90 rounded-full transition hover:bg-zinc-800 cursor-pointer text-xl disabled:bg-gray-600" >
        <IoMdClose />
        </button>
        <img src={src} alt="preview image" className="rounded-md" />
      </div>
    )
  )
}

export default Preview
