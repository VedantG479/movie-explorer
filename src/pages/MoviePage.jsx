import Header from "../components/Header";

export default function MoviePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="flex-1 flex justify-center p-6">

                <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-gray-200">
                        <img src="https://via.placeholder.com/400x600" alt="movie" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 p-6 flex flex-col gap-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Movie Title
                        </h1>
                        <p className="text-sm text-gray-500">
                            2023 • Action • 2h 15m
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            This is a short description of the movie. It gives an overview of the plot, characters, and overall theme.
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-gray-600">
                            <span><span className="font-medium text-gray-800">Director:</span> John Doe</span>
                            <span><span className="font-medium text-gray-800">Cast:</span> Actor 1, Actor 2, Actor 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}