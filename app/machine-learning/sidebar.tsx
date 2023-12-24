import linalg from "@models/linalg"

export default function Sidebar() {
  return (
    <div>
      <div id="side-bar" className="p-4 max-h-[100vh] text-gray-800">
        <a href="/machine-learning/linear-regression" className="hover:opacity-75 cursor-pointer my-10"
        >
          <div className="p-2"> Linear Regression </div>
        </a>

      </div>
    </div>

  )
}