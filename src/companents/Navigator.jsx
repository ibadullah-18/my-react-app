import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Detalispage from "../pages/Detalispage"
import UserPosts from "../pages/UserPosts"
import Loginpage from "../pages/Loginpage"
import Registerpage from "../pages/Registerpage"
import CreatePostPage from "../pages/CreatePostPage"
import MyPostsPage from "../pages/MyPostsPage"
import ProtectedRoute from "./ProtectedRoute"

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:id" element={<Detalispage />} />
      <Route path="/user/:userId" element={<UserPosts />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />

      <Route
        path="/create-post"
        element={
          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-blogs"
        element={
          <ProtectedRoute>
            <MyPostsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default Navigator
