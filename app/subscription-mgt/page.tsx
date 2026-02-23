import styles from './subscription-mgt.module.css';

export default function SubscriptionMgtPage() {
    return (
        <>
            <div className={`bg-[var(--background)] text-[#111817] ${styles.container}`}>
                <div className="flex h-screen overflow-hidden">
                    {/* <!-- Sidebar Navigation --> */}
                    <aside className="w-64 border-r border-primary/10 bg-white flex flex-col h-full">
                        <div className="p-6 flex items-center gap-3">
                            <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">smartphone</span>
                            </div>
                            <div>
                                <h1 className="text-[#111817] text-base font-bold leading-none">PhonePlanet</h1>
                                <p className="text-primary text-[10px] font-semibold uppercase tracking-wider mt-1">Staff Portal</p>
                            </div>
                        </div>
                        <nav className="flex-1 px-4 py-4 space-y-1">
                            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">inventory_2</span>
                                <span className="text-sm font-medium">Inventory</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg" href="#">
                                <span className="material-symbols-outlined">verified_user</span>
                                <span className="text-sm font-medium">Subscriptions</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">payments</span>
                                <span className="text-sm font-medium">Payments</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">group</span>
                                <span className="text-sm font-medium">Customers</span>
                            </a>
                        </nav>
                        <div className="p-4 border-t border-primary/10">
                            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">settings</span>
                                <span className="text-sm font-medium">Settings</span>
                            </a>
                            <div className="mt-4 flex items-center gap-3 px-3 py-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs" data-alt="Staff profile placeholder">KO</div>
                                <div className="overflow-hidden">
                                    <p className="text-xs font-bold truncate">Kwame Osei</p>
                                    <p className="text-[10px] text-gray-500">Admin Level 2</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* <!-- Main Content Area --> */}
                    <main className="flex-1 flex flex-col min-w-0 bg-background-light overflow-hidden">
                        {/* <!-- Header Section --> */}
                        <header className="bg-white border-b border-primary/10 px-8 py-6">
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
                                <span>Home</span>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-primary">Subscriptions</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-3xl font-black text-[#111817] tracking-tight">PhonePlanet Club</h2>
                                    <p className="text-gray-500 mt-1">Monitor installment health and membership benefits across Ghana.</p>
                                </div>
                                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-sm">person_add</span>
                                    Add Member
                                </button>
                            </div>
                        </header>
                        {/* <!-- Table & Filters Container --> */}
                        <div className="flex-1 p-8 flex gap-6 overflow-hidden">
                            {/* <!-- Left Column: Table --> */}
                            <div className="flex-1 flex flex-col min-w-0">
                                {/* <!-- Filter Bar --> */}
                                <div className="flex gap-3 mb-6">
                                    <div className="flex-1 relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                        <input className="w-full pl-10 pr-4 py-2.5 bg-white border border-primary/10 rounded-xl focus:ring-primary focus:border-primary text-sm" placeholder="Search members by name, phone, or ID..." type="text" />
                                    </div>
                                    <button className="px-4 py-2.5 bg-white border border-primary/10 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-50">
                                        <span className="material-symbols-outlined text-sm">filter_alt</span>
                                        Tier: All
                                    </button>
                                    <button className="px-4 py-2.5 bg-white border border-primary/10 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-50 text-primary">
                                        <span className="material-symbols-outlined text-sm">check_circle</span>
                                        Status: Active
                                    </button>
                                </div>
                                {/* <!-- Member Table --> */}
                                <div className="bg-white rounded-xl border border-primary/10 flex-1 flex flex-col overflow-hidden shadow-sm">
                                    <div className="overflow-y-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-gray-50 sticky top-0 z-10">
                                                <tr className="text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-primary/10">
                                                    <th className="px-6 py-4">Member Name</th>
                                                    <th className="px-6 py-4">Club Tier</th>
                                                    <th className="px-6 py-4">Current Status</th>
                                                    <th className="px-6 py-4">Next Renewal</th>
                                                    <th className="px-6 py-4">Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                <tr className="hover:bg-primary/5 cursor-pointer transition-colors bg-primary/5 border-l-4 border-l-primary">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">AA</div>
                                                            <div>
                                                                <p className="text-sm font-bold text-[#111817]">Abena Ansah</p>
                                                                <p className="text-[11px] text-gray-500">ID: PP-GH-9921</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200">
                                                            GOLD
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                            <span className="text-xs font-medium text-primary">Active</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-xs font-medium text-gray-600">Oct 24, 2024</td>
                                                    <td className="px-6 py-4 text-xs font-bold text-[#111817]">GH₵ 1,200.00</td>
                                                </tr>
                                                <tr className="hover:bg-primary/5 cursor-pointer transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-xs">KM</div>
                                                            <div>
                                                                <p className="text-sm font-bold text-[#111817]">Kofi Mensah</p>
                                                                <p className="text-[11px] text-gray-500">ID: PP-GH-8812</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                                            SILVER
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                                            <span className="text-xs font-medium text-red-600">Delinquent</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-xs font-medium text-gray-600">Sep 12, 2024</td>
                                                    <td className="px-6 py-4 text-xs font-bold text-red-600">GH₵ 3,450.00</td>
                                                </tr>
                                                <tr className="hover:bg-primary/5 cursor-pointer transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-xs">ED</div>
                                                            <div>
                                                                <p className="text-sm font-bold text-[#111817]">Ekow Dadzie</p>
                                                                <p className="text-[11px] text-gray-500">ID: PP-GH-7721</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-800 border border-orange-200">
                                                            STANDARD
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                                            <span className="text-xs font-medium text-gray-500">Expired</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-xs font-medium text-gray-600">Aug 30, 2024</td>
                                                    <td className="px-6 py-4 text-xs font-bold text-gray-400">GH₵ 0.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="p-4 bg-gray-50 border-t border-primary/10 flex justify-between items-center text-xs font-medium text-gray-500">
                                        <span>Showing 3 of 1,284 members</span>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/10 bg-white hover:bg-gray-100"><span className="material-symbols-outlined text-[16px]">chevron_left</span></button>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/10 bg-white hover:bg-gray-100"><span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Right Column: Detail View Drawer --> */}
                            <aside className="w-[400px] flex flex-col bg-white border border-primary/10 rounded-xl shadow-xl overflow-hidden">
                                <div className="p-6 border-b border-primary/10 bg-primary/5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                            <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                    <h3 className="text-xl font-black text-[#111817]">Abena Ansah</h3>
                                    <p className="text-sm font-medium text-gray-500 mb-3">Member since Jan 2024</p>
                                    <div className="flex gap-2">
                                        <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tight">Gold Member</span>
                                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tight">iPhone 15 Pro Plan</span>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                    {/* <!-- Benefit Utilization --> */}
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Club Benefits Utilized</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between text-xs font-bold mb-1.5">
                                                    <span>Annual Swap Rights</span>
                                                    <span className="text-primary">1 / 1 Used</span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="w-full h-full bg-primary"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs font-bold mb-1.5">
                                                    <span>Screen Repair Voucher</span>
                                                    <span className="text-gray-400">0 / 2 Used</span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="w-0 h-full bg-primary"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Payment Timeline --> */}
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Payment Timeline</h4>
                                        <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/10">
                                            <div className="relative pl-8">
                                                <div className="absolute left-0 top-1 w-[24px] h-[24px] bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
                                                    <span className="material-symbols-outlined text-primary text-[14px] font-bold">check</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-[#111817]">Installment #8 Paid</p>
                                                    <p className="text-[10px] text-gray-500">Sep 24, 2024 • GH₵ 450.00 • Mobile Money</p>
                                                </div>
                                            </div>
                                            <div className="relative pl-8">
                                                <div className="absolute left-0 top-1 w-[24px] h-[24px] bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
                                                    <span className="material-symbols-outlined text-primary text-[14px] font-bold">check</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-[#111817]">Installment #7 Paid</p>
                                                    <p className="text-[10px] text-gray-500">Aug 24, 2024 • GH₵ 450.00 • Visa Card</p>
                                                </div>
                                            </div>
                                            <div className="relative pl-8 opacity-60">
                                                <div className="absolute left-0 top-1 w-[24px] h-[24px] bg-white border-2 border-gray-200 rounded-full flex items-center justify-center z-10">
                                                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-gray-400">Installment #9 Pending</p>
                                                    <p className="text-[10px] text-gray-400">Due Oct 24, 2024 • GH₵ 450.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Action Footer --> */}
                                <div className="p-6 bg-gray-50 border-t border-primary/10 grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary/5 transition-colors">
                                        <span className="material-symbols-outlined text-sm">pause_circle</span>
                                        Pause Membership
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100 transition-colors">
                                        <span className="material-symbols-outlined text-sm">block</span>
                                        Revoke Benefits
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}