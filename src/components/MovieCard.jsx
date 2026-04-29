export default function MovieCard() {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 overflow-hidden flex flex-col">
            <div className="w-full h-64 bg-gray-200 overflow-hidden">
                <img src="https://via.placeholder.com/300x400" alt="movie" className="w-full h-full object-cover" />
            </div>

            <div className="p-3 flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    Movie Title
                </h3>
                <p className="text-xs text-gray-500">
                    2023 • Action
                </p>
            </div>
        </div>
    )
}