import { Route, Routes } from 'react-router-dom'
import Kanban from '../tasks/Kanban'
import EditProject from './EditProject'
import SideBar from '../SideBar'

const Index = () => {
    return (
        <>
            <div className="flex">
                <SideBar />
                <Routes>
                    <Route path="/" element={<Kanban />} />
                    <Route path="/edit" element={<EditProject />} />
                </Routes>
            </div>
        </>
    )
}

export default Index
