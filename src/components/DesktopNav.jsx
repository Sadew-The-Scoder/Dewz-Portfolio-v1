import { Link } from "react-router"
import { navLinks } from "../constants"

function DesktopNav() {
  return (
    <div>
      <ul>
        <li>
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="hover:bg-white/20 px-3 py-1 gap-x-1 text-base font-semibold">
              {item.name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default DesktopNav