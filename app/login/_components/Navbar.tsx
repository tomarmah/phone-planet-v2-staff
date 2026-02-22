export default function Navbar() {
    return (<>
        <header className="w-full bg-[var(--white-to-teal-950)] border-b border-primary/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl">smartphone</span>
                </div>
                <div>
                    <h2 className="text-[var(--primary-dark-to-white)] text-lg font-bold leading-none">PhoneStore Ghana</h2>
                    <p className="text-[var(--primary-60-to-primary-40)] text-xs font-medium uppercase tracking-wider">Staff Portal</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[var(--primary-dark-to-primary)] hover:bg-primary/5 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-xl">help_outline</span>
                    <span>IT Support</span>
                </button>
            </div>
        </header>
    </>);
}