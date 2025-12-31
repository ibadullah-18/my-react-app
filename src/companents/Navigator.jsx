import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage";
import Detalispage from "../pages/Detalispage";
import UserPosts from "../pages/UserPosts";
import Loginpage from "../pages/Loginpage";

export const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<Detalispage />} />
            <Route path="/user/:userId" element={<UserPosts />} />
            <Route path="/login" element={<Loginpage />} />

        </Routes>
    )
}
export default Navigator;