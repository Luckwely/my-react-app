import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full py-2 px-12 bg-black z-50 text-white">
      <div className="flex items-center justify-between">
        <Link to={'/'} className="font-bold text-3xl"><span className="text-blue-500">My</span>Shop.</Link>
        <div className="flex gap-4">
          <Link to={'/'}>Product</Link>
          <Link to={'/'}>Category</Link>
        </div>
        <div className="flex gap-4">
          <button>Sign Up</button>
          <button className="bg-blue-500 px-3 py-1 rounded-md">Log In</button>
        </div>
      </div>
    </nav>
  )
}
