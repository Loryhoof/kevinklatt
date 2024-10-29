export const DownloadSection = () => {
    return (
        <div className="flex w-full justify-center mt-16">
            <div>
                <a href="/resume_kevin_klatt.pdf" download>
                    <button className="bg-white rounded-xl p-4 px-6 text-black text-lg hover:bg-gray-300">
                        Download Resume/CV
                    </button>
                </a>
            </div>
        </div>
    );
};
