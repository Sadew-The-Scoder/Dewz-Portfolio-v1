import { Link } from "react-router"
import { navLinks } from "../constants"
function MobileNav() {
  return (

    <ul className="w-full p-4">
      <li className="flex flex-col items-center justify-center my-3">
        {navLinks.map((item) => (
          <Link to={item.path}
          className="my-2 px-4 py-1 hover:bg-black/50">{item.name}</Link>
        ))}

      </li>
    </ul>
  )
}

export default MobileNav