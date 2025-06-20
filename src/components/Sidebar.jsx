// --- Sidebar Component (Desktop Only) ---
const Sidebar = () => (
    <aside className="md:w-72 md:flex-shrink-0 bg-slate-50 border-r border-slate-200 py-8 px-6 hidden md:flex md:flex-col justify-between items-center sticky top-0 h-screen">
        <div className="w-full flex flex-col items-center">
            {/* About content for sidebar */}
            <div className="text-center mb-8">
                <img src="https://placehold.co/150x150/e2e8f0/334155?text=SC" alt="Sumitra's Profile Picture" className="rounded-full w-32 h-32 object-cover border-4 border-slate-200 shadow-lg mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-800">Sumitra Chhetri</h2>
                <h4 className="text-slate-600">Software Engineer</h4>
                <h4>Professional Summary</h4>
                <p className="text-sm text-slate-500 mt-2">Passionate about building innovative and impactful applications with clean code and effective collaboration.</p>
            </div>
        </div>

        {/* Contact content for sidebar */}
        <div className="mt-auto pt-8 w-full text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Let's Connect</h3>
            <p className="text-slate-500 text-sm mb-4">I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
            <a href="mailto:john.doe@email.com" className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition duration-300 inline-block mb-4">Email Me</a>
            <div className="flex justify-center space-x-6">
                <a href="#" className="text-slate-600 hover:text-amber-600 transition duration-300 py-1">LinkedIn</a>
                <a href="#" className="text-slate-600 hover:text-amber-600 transition duration-300 py-1">GitHub</a>
            </div>
        </div>
    </aside>
);

export default Sidebar;