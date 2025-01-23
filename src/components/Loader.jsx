
const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div
                    className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"
                ></div>
                {/* Loading Text */}
                <p className="mt-4 text-3xl font-bold text-white">
                    Loading... Please wait
                </p>
            </div>
        </div>
    );
};

export default Loading;
