const UserCard = ({ user }) => {
    return (
        <div
            className="max-w-[350px] min-w-[250px] m-[10px] rounded shadow-sm border-2 divide-y-2 cursor-pointer duration-200"
        >
            <div
                className="p-4 hover:bg-slate-200"
            >
                <div
                    className="flex pb-3"
                >
                    <div className="w-[70px] h-[70px] mx-2 p-0 rounded-[100%] border-[#CCCC19] border-2 overflow-hidden">
                        <img className="w-[70px] h-[70px]" src={"http://127.0.0.1:3000/" + user.photo} />
                    </div>
                    <div
                        className="text-[#303030] mx-2 p-2 text-[500] text-[22px]">{user.fullName}</div>
                </div>
                <div
                    className="pl-4 pr-2 text-[16px]"
                >
                    {user.email}
                </div>
            </div>
        </div >
    )
}

export default UserCard
