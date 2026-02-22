import styles from './enquiry-mgt.module.css';


export default function EnquiryMgtPage() {
    return (
        <>
            <div className={`bg-[var(--background)] text-[var(--slate-900-to-100)] flex h-screen overflow-hidden ${styles.container}`}>
                {/* <!-- Sidebar Navigation --> */}
                <aside className="w-64 border-r border-primary/10 flex flex-col bg-[var(--white-to-slate-900)] shrink-0">
                    <div className="p-6 flex items-center gap-3">
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">smartphone</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold tracking-tight">Premium Phones GH</h1>
                            <p className="text-xs text-slate-500">Staff Portal</p>
                        </div>
                    </div>
                    <nav className="flex-1 px-4 space-y-1">
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--slate-600-to-400)] hover:bg-primary/5 transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">dashboard</span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                            <span className="text-sm font-medium">Enquiries</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--slate-600-to-400)] hover:bg-primary/5 transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                            <span className="text-sm font-medium">Inventory</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--slate-600-to-400)] hover:bg-primary/5 transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">payments</span>
                            <span className="text-sm font-medium">Installments</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--slate-600-to-400)] hover:bg-primary/5 transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                    </nav>
                    <div className="p-4 mt-auto">
                        <div className="bg-primary/5 rounded-xl p-3 flex items-center gap-3">
                            <div className="size-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[18px]">person</span>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs font-semibold truncate">Emmanuel Kofi</p>
                                <p className="text-[10px] text-slate-500">Sales Manager</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-[16px]">logout</span>
                        </div>
                    </div>
                </aside>
                {/* <!-- Main Content Area --> */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* <!-- Header --> */}
                    <header className="h-16 border-b border-primary/10 bg-[var(--white-to-slate-900)] flex items-center justify-between px-8 shrink-0">
                        <div className="flex items-center gap-4 flex-1 max-w-xl">
                            <div className="relative w-full">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                                <input className="w-full pl-10 pr-4 py-2 bg-[var(--slate-100-to-800)] border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search by name, phone or enquiry ID..." type="text" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative size-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                                <span className="material-symbols-outlined text-slate-600">notifications</span>
                                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <div className="h-8 w-[1px] bg-slate-200"></div>
                            <button className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">download</span>
                                Export CSV
                            </button>
                        </div>
                    </header>
                    {/* <!-- View Content: Master-Detail --> */}
                    <div className="flex-1 flex overflow-hidden">
                        {/* <!-- List View (Master) --> */}
                        <section className="w-[400px] border-r border-primary/10 bg-[var(--white-to-slate-900)] flex flex-col">
                            <div className="p-4 border-b border-primary/10 space-y-3">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold text-lg">Enquiries</h2>
                                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">24 Active</span>
                                </div>
                                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                                    <button className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shrink-0">All</button>
                                    <button className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full shrink-0">New (8)</button>
                                    <button className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full shrink-0">Contacted</button>
                                    <button className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full shrink-0">Resolved</button>
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {/* <!-- List Items --> */}
                                {/* <!-- Active Item --> */}
                                <div className="p-4 border-b border-primary/5 bg-primary/5 cursor-pointer border-l-4 border-l-primary">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-primary">ID: #EP-4521</span>
                                        <span className="text-[10px] text-slate-400">24 mins ago</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-slate-900 truncate">Abena Mensah</h3>
                                    <p className="text-xs text-slate-600 mt-1">Topic: iPhone 15 Pro Installment</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 uppercase">New</span>
                                        <div className="flex -space-x-1">
                                            <div className="size-4 bg-slate-200 rounded-full border border-white flex items-center justify-center"><span className="material-symbols-outlined text-[10px]">person</span></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item 2 --> */}
                                <div className="p-4 border-b border-primary/5 hover:bg-slate-50 cursor-pointer transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-slate-500">ID: #EP-4519</span>
                                        <span className="text-[10px] text-slate-400">2 hours ago</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-slate-900 truncate">Kwame Appiah</h3>
                                    <p className="text-xs text-slate-600 mt-1">Topic: Galaxy S24 Ultra Swap</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 uppercase">Contacted</span>
                                        <div className="flex -space-x-1">
                                            <div className="size-4 bg-slate-200 rounded-full border border-white flex items-center justify-center"><span className="material-symbols-outlined text-[10px]">person</span></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item 3 --> */}
                                <div className="p-4 border-b border-primary/5 hover:bg-slate-50 cursor-pointer transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-slate-500">ID: #EP-4518</span>
                                        <span className="text-[10px] text-slate-400">Yesterday</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-slate-900 truncate">Efua Osei</h3>
                                    <p className="text-xs text-slate-600 mt-1">Topic: 12-Month Payment Plan</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">Resolved</span>
                                    </div>
                                </div>
                                {/* <!-- Item 4 --> */}
                                <div className="p-4 border-b border-primary/5 hover:bg-slate-50 cursor-pointer transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-slate-500">ID: #EP-4515</span>
                                        <span className="text-[10px] text-slate-400">3 days ago</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-slate-900 truncate">Yaw Boateng</h3>
                                    <p className="text-xs text-slate-600 mt-1">Topic: Store Pickup Query</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">Resolved</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Detail View (Detail) --> */}
                        <section className="flex-1 flex flex-col bg-[var(--background-light-to-slate-900)] overflow-y-auto">
                            <div className="p-8 max-w-5xl mx-auto w-full space-y-6">
                                {/* <!-- Header Actions --> */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary border-2 border-primary/20">
                                            <span className="material-symbols-outlined text-[32px]">person</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-extrabold text-slate-900">Abena Mensah</h2>
                                            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium mt-1">
                                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">call</span> +233 24 555 0123</span>
                                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Accra, Greater Accra</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
                                            <span className="material-symbols-outlined text-[20px]">chat</span>
                                            WhatsApp
                                        </button>
                                        <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                            Mark as Contacted
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* <!-- Enquiry Info Cards --> */}
                                    <div className="lg:col-span-2 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-[var(--white-to-slate-800)] p-4 rounded-xl border border-primary/10 shadow-sm">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Enquiry Topic</p>
                                                <p className="text-sm font-bold text-slate-800">iPhone 15 Pro - Installment Plan</p>
                                            </div>
                                            <div className="bg-[var(--white-to-slate-800)] p-4 rounded-xl border border-primary/10 shadow-sm">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Preferred Time</p>
                                                <p className="text-sm font-bold text-slate-800">Evenings (After 5:00 PM)</p>
                                            </div>
                                        </div>
                                        {/* <!-- Message Body --> */}
                                        <div className="bg-[var(--white-to-slate-800)] rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                                            <div className="px-4 py-3 bg-[var(--slate-50-to-700)] border-b border-primary/10 flex justify-between items-center">
                                                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[16px]">mail</span> Customer Message
                                                </span>
                                                <span className="text-[10px] text-slate-400">Received Oct 24, 10:15 AM</span>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-slate-700 leading-relaxed italic">
                                                    "Hi, I'm interested in getting the iPhone 15 Pro on your 6-month installment plan. I am a salaried worker at a reputable bank. Could you please let me know the initial deposit required and what documents I need to bring for the verification process? I'm available for a call this evening."
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- Internal Notes Timeline --> */}
                                        <div className="space-y-4">
                                            <h3 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[18px]">history</span> Staff Log &amp; Internal Notes
                                            </h3>
                                            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                                                {/* <!-- Log Item 1 --> */}
                                                <div className="relative">
                                                    <div className="absolute -left-[19px] top-1 size-3 bg-primary rounded-full border-2 border-white shadow-sm"></div>
                                                    <div className="bg-[var(--slate-100-to-800-50)] p-3 rounded-lg border border-[var(--slate-200-to-slate-700)]">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="text-xs font-bold">System</span>
                                                            <span className="text-[10px] text-slate-400">Oct 24, 10:15 AM</span>
                                                        </div>
                                                        <p className="text-xs text-slate-600">Enquiry received via Website Contact Form.</p>
                                                    </div>
                                                </div>
                                                {/* <!-- Add Note Input --> */}
                                                <div className="relative">
                                                    <div className="absolute -left-[19px] top-1 size-3 bg-slate-300 rounded-full border-2 border-white shadow-sm"></div>
                                                    <div className="space-y-3">
                                                        <textarea className="w-full text-sm border-[var(--slate-200-to-slate-700)] rounded-lg focus:ring-primary focus:border-primary bg-[var(--white-to-slate-800)]" placeholder="Add an internal note or update..." rows={3}></textarea>
                                                        <div className="flex justify-end">
                                                            <button className="bg-slate-800 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-700">Post Note</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Detail Details --> */}
                                    <div className="space-y-6">
                                        <div className="bg-[var(--white-to-slate-800)] rounded-xl border border-primary/10 shadow-sm p-5">
                                            <h3 className="font-bold text-sm mb-4">Lead Status</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-slate-500 font-medium">Current Status</span>
                                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold uppercase text-[9px]">New</span>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-slate-500 font-medium">Assigned To</span>
                                                    <span className="text-slate-800 font-bold">Emmanuel Kofi</span>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-slate-500 font-medium">Enquiry Source</span>
                                                    <span className="text-slate-800 font-bold">Installments Landing Page</span>
                                                </div>
                                            </div>
                                            <div className="mt-6 pt-6 border-t border-slate-100">
                                                <button className="w-full border border-primary text-primary font-bold py-2 rounded-lg text-xs hover:bg-primary/5 transition-colors">
                                                    Transfer Enquiry
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl p-5 shadow-lg shadow-primary/30">
                                            <h3 className="font-bold text-sm mb-3">Suggested Product</h3>
                                            <div className="flex items-center gap-3">
                                                <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-white">smartphone</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-bold truncate">iPhone 15 Pro 256GB</p>
                                                    <p className="text-[10px] opacity-80">Natural Titanium</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-white/20">
                                                <div className="flex justify-between items-center text-xs">
                                                    <span>GHS 1,250.00 / mo</span>
                                                    <span className="font-bold">In Stock</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}