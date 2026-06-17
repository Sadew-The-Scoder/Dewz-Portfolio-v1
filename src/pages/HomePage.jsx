import { BiTerminal } from 'react-icons/bi'
import Button from '../components/Button.jsx'
import TerminalPage from './TerminalPage.jsx'
import { Link } from 'react-router'
function HomePage() {
    return (
        <section className="flex container mx-auto h-[calc(100vh-60px)] md:h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] flex-col-reverse lg:flex-row items-center justify-center px-1 md:px-4 lg:px-8">
            {/* Left section */}
            <div
                className="h-auto">

                <div
                    className="flex flex-col items-center justify-center lg:justify-start lg:items-start">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-3">HI, I'm Sadew</h1> <br />
                    <h2 className="text-2xl lg:text-3xl font-semibold opacity-80 mb-3">Web Developer & DevOps Enthusiast.</h2> <br />
                    <p className="text-base opacity-70 text-center lg:text-left w-auto mb-4">I build scalable full-stack web applications and love optimizing development work flows. Passionate about clean code, lightweight environments, and modern web technologies.</p>
                    <Link
                        to="/console">
                        <Button>
                            Open Console
                            <BiTerminal />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Right section */}
            <div className="flex  items-center justify-center h-55 md:h-65 lg:h-100 rounded-full aspect-square border my-8 md:my-0 ">
                <img
                    src={`${import.meta.env.BASE_URL}logo.png`} className='w-full h-full aspect-square rounded-full object-cover  object-[50%_30%]' />
            </div>
        </section>
    )
}

export default HomePage