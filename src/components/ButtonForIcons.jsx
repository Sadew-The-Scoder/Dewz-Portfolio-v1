import { BiMenu, BiX } from "react-icons/bi"
function ButtonForIcons({isOpen, onClick}) {
  return (
    <button onClick={onClick} className="p-1 hover:bg-white/20 rounded-sm text-2xl">
      {isOpen ? <BiX /> : <BiMenu />}
    </button>
  )
}

export default ButtonForIcons