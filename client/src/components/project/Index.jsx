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
                <Routes>
                    <Route path="/" element={<Kanban />} />
                    <Route path="/edit" element={<EditProject />} />
                    <Route path="/users" element={<UsersList />} />
                </Routes>
            </div>
        </>
    )
}

export default Index
