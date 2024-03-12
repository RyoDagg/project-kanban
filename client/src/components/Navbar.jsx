const Navbar = () => {


    // navigation items
    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Projects', link: '/projects' },
        { id: 3, text: 'My Tasks', link: '/mytasks' },
    ];

    return (
        <div className='bg-black flex justify-start items-center h-[70px] mx-0 px-4 text-white'>

            <h1 className='text-3xl mr-[10vw] font-bold text-[#E3E31C]'>Kanban</h1>

            <ul className='flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-[#E3E31C] font-[450] rounded-sm m-2 cursor-pointer duration-300 hover:text-black'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;