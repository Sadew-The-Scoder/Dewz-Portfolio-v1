
import MobileNav from "./MobileNav"
import { useState } from "react"
import ButtonForIcons from "./ButtonForIcons";
import DesktopNav from "./DesktopNav";
import { Link } from "react-router";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <nav className="text-white sticky top-0 px-1 md:px-4 lg:px-8 h-15 md:h-18 lg:h-20 mx-auto bg-zinc-900 z-50 container flex items-center justify-between">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <Link to={"/"}>
                Dewz.dev
                </Link>
                </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
                <DesktopNav />
            </div>

            {/* Mobile nav */}
            <div className="md:hidden">
                <ButtonForIcons
                    isOpen={isOpen}
                    onClick={toggleMenu}>
                </ButtonForIcons>

                {isOpen && (
                    <div className="flex w-full absolute bg-zinc-800 top-[60px] left-0">
                        <MobileNav />
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Nav