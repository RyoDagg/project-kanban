import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
    const { state } = useLocation();
    const { project } = state;
    const navigateTo = useNavigate();

    const navList = [
        {
            title: 'Edit Project',
            link: "/project/edit"
        },
        {
            title: 'users',
            link: "/project/users"
        }

    ]

    return (
        <div className="p-2 bg-[#120844]">
            <div className="w-[280px] h-screen bg-[#060317]">
                <div
                    onClick={() => {
                        navigateTo("/project", { state: { project } });
                    }}
                    className="border-[1px] rounded cursor-pointer border-[#909090]">
                    <h1 className="text-[#E3E31C] text-center text-[25px] py-4">{project.name}</h1>
                </div>
                <ul className="p-3">
                    {navList.map((item, i) =>
                    (<li
                        key={i}
                        className="text-[#d9d9d9] text-[18px] hover:bg-[#e3e31c4b] p-3 rounded cursor-pointer"
                        onClick={() => {
                            navigateTo(item.link, { state: { project } });
                        }}
                    >
                        {item.title}
                    </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SideBar
