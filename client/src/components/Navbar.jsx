import { useNavigate } from "react-router-dom";

const Navbar = () => {

    // navigation items
    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Projects', link: '/projects' },
        { id: 3, text: 'My Stats', link: '/mytasks' },
    ];
    const navigateTo = useNavigate();

    return (
        <div className='bg-[#0C062D] flex justify-start items-center h-[70px] mx-0 px-4 text-white'>

            <h1 className='text-3xl mr-[10vw] font-bold text-[#E3E31C]'>Kanban</h1>

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
        </div>
    );
};

export default Navbar;