import { useState, useEffect } from "react";
import { getAccessToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDarkmode } from '../stores/darkmode';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { isDarkmodeEnabled } = useDarkmode();
    const navigate = useNavigate();

    const inputClass = `
        w-full p-4 mb-3 text-lg rounded outline-none transition
        ${isDarkmodeEnabled
            ? "bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-yellow-400"
            : "bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-yellow-400"
        }
    `;

    useEffect(() => {
        const token = getAccessToken();
        if (!token) navigate("/login");
    }, [navigate]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://ilkinibadov.com/api/b/blogs/categories");
                if (!res.ok) throw new Error("Failed to fetch categories");
                const data = await res.json();
                setCategories(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const token = getAccessToken();
            if (!token) throw new Error("You must be logged in to create a post");

            const res = await fetch("https://ilkinibadov.com/api/b/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title,
                    description: body,
                    category,
                    image,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to create post");

            alert("Post created successfully!");
            navigate("/my-blogs"); 
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };  

    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
            <form onSubmit={handleSubmit} className={`w-[700px] p-6 rounded transition-colors duration-300`}>
                <h2 className="text-3xl font-semibold mb-6 text-center">Write a New Blog</h2>

                <input type="text" placeholder="Add title for blog" className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} required />

                <select className={inputClass} value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <input type="text" placeholder="Add thumbnail image URL" className={inputClass} value={image} onChange={(e) => setImage(e.target.value)} required />

                <textarea placeholder="Add blog body" className={`${inputClass} h-40 resize-none`} value={body} onChange={(e) => setBody(e.target.value)} required />

                {error && <p className="text-red-500 mb-3">{error}</p>}

                <button type="submit" disabled={loading} className={`w-full p-4 font-semibold rounded text-lg transition ${isDarkmodeEnabled ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-yellow-400 text-black hover:bg-yellow-500"}`}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
