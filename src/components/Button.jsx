function Button(props) {
  return (
    <button className="bg-white font-bold text-xl text-black px-4 py-2 cursor-pointer hover:scale-[0.9] hover:bg-white/50 flex items-center justify-center gap-2">
      {props.children}
    </button>
  )
}

export default Button