import { Route, Routes } from 'react-router-dom'
import Kanban from '../tasks/Kanban'
import EditProject from './EditProject'
import SideBar from '../SideBar'
import UsersList from './UsersList'


const Index = () => {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="mx-3 my-5 border-1 shadow-lg rounded w-full border-[#120844] p-3">
                    <Routes>
                        <Route path="/" element={<Kanban />} />
                        <Route path="/edit" element={<EditProject />} />
                        <Route path="/users" element={<UsersList />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Index
