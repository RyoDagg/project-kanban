import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./Home";
import { useContext, useState } from "react";

const Navbar = () => {

    const [hover, setHover] = useState(false)
    // navigation items
    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Projects', link: '/projects' },
        { id: 3, text: 'My Stats', link: '/mytasks' },
    ];

    const navigateTo = useNavigate();

    const user = useContext(GlobalContext)

    return (
        <div className='bg-[#0C062D] flex justify-start shadow items-center h-[70px] mx-0 px-4 text-white'>

            <h1 className='text-3xl mr-[10vw] ml-[30px] font-[800] text-[#E3E31C]'>
                Kan-Do
            </h1>

            <ul className='flex'>
                {navItems.map(item => (
                    <li
                        onClick={() => navigateTo(item.link)}
                        key={item.id}
                        className='p-3 px-4 hover:bg-[#E3E31C] rounded-sm m-2 mx-3 cursor-pointer duration-300 hover:text-[#0C062D]'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative ml-auto mr-4 w-16 ">
                <div
                    className={`
                rounded-[50%] overflow-hidden 
                border-3 border-[#E3E31C]
                cursor-pointer
                `}
                >
                    <img src={`http://127.0.0.1:3000/${user.photo}`} alt="" />


                </div>
                <div
                    className={`
                absolute 
                -right-6 top-16  
                w-[250px] h-36
                bg-[#a0a0a0] rounded
                duration-200
                ${hover ? '' : 'opacity-0'}
                `}>

                </div>
            </div>
        </div>
    );
};

export default Navbar;