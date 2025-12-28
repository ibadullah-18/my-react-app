import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage";
import Detalispage from "../pages/Detalispage";
import UserPosts from "../pages/UserPosts";

export const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<Detalispage />} />
            <Route path="/user/:userId" element={<UserPosts />} />

        </Routes>
    )
}
export default Navigator;