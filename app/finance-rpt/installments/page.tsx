import styles from './installments.module.css';

export default function InstallmentsPage() {
    return (
        <>
            <div className={`min-h-screen flex flex-col ${styles.container}`}>
                <header className="border-b border-[var(--border-subtle)] bg-white sticky top-0 z-50">
                    <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#0EAD4F]">smartphone</span>
                                </div>
                                <h1 className="text-[var(--brand-dark)] text-xl font-bold tracking-tight">PhonePlanet</h1>
                            </div>
                            <nav className="hidden md:flex items-center gap-6">
                                <a className="text-slate-500 hover:text-[var(--brand-dark)] text-sm font-medium transition-colors" href="#">Dashboard</a>
                                <a className="text-slate-500 hover:text-[var(--brand-dark)] text-sm font-medium transition-colors" href="#">Inventory</a>
                                <a className="text-[var(--brand-dark)] text-sm font-semibold border-b-2 border-primary py-5" href="#">Finance</a>
                                <a className="text-slate-500 hover:text-[var(--brand-dark)] text-sm font-medium transition-colors" href="#">Customers</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden lg:block">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                                <input className="bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm text-[var(--brand-dark)] placeholder:text-slate-500 focus:ring-1 focus:ring-primary w-64" placeholder="Search installments..." type="text" />
                            </div>
                            <button className="p-2 text-slate-400 hover:text-[var(--brand-dark)] transition-colors relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-white"></span>
                            </button>
                            <div className="h-8 w-[1px] bg-[var(--border-subtle)] mx-2"></div>
                            <div className="flex items-center gap-3">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-semibold text-[var(--brand-dark)]">Alex Rivera</p>
                                    <p className="text-[10px] text-slate-500">Finance Manager</p>
                                </div>
                                <img alt="User Profile" className="size-9 rounded-full border border-[var(--border-subtle)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7HtYrTHjLeB8DraHfxTGGgZ3nj2C9Yq410BaeOdH1jWcEGUgSdRsQdZQ_lJlp0SKTQm9y-b8Xbr7e6wazJw7zklP2oN1kRqVf06uDs8s9G5_ExhZRcQrq3Jw3mJbB5hg-kxSOa5MWeZQIURrjpqymprN7CMIxKpcxcchZV6MI11bAsGV4E65cjzILR5pPD-R2z0BCkVYRE9rA0bkfu9XW5ckxEer6ecFS3BNwkDI-6BaFee06zRltuJ07SF-GGtno7MVR-ugU-gIm" />
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-8">
                    <div className="mb-8">
                        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                            <a className="hover:text-[var(--brand-dark)] transition-colors" href="#">Finance</a>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-[var(--brand-dark)] font-medium">Outstanding Installments</span>
                        </nav>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-[var(--brand-dark)] tracking-tight">Outstanding Installments</h2>
                                <p className="text-slate-500 mt-1">Track and manage 1,248 active device payment plans across all stores.</p>
                            </div>
                            <button className="bg-[var(--brand-dark)] text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-[var(--brand-dark)]/90 transition-all shadow-md">
                                <span className="material-symbols-outlined text-[20px]">add_card</span>
                                Record Payment
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border border-[var(--border-subtle)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[var(--status-emerald-text)]">account_balance_wallet</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Total Outstanding</p>
                            <h3 className="text-3xl font-bold text-[var(--brand-dark)] mt-1">$425,000.00</h3>
                            <div className="flex items-center gap-1.5 mt-3">
                                <span className="flex items-center text-[var(--status-emerald-text)] text-xs font-bold bg-[var(--status-emerald-bg)] px-2 py-0.5 rounded-full">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> 5.2%
                                </span>
                                <span className="text-slate-400 text-[11px]">vs last month</span>
                            </div>
                        </div>
                        <div className="bg-white border border-[var(--border-subtle)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[var(--status-terracotta-text)]">priority_high</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Overdue Amount</p>
                            <h3 className="text-3xl font-bold text-[var(--brand-dark)] mt-1">$12,450.00</h3>
                            <div className="flex items-center gap-1.5 mt-3">
                                <span className="flex items-center text-[var(--status-terracotta-text)] text-xs font-bold bg-[var(--status-terracotta-bg)] px-2 py-0.5 rounded-full">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> 2.1%
                                </span>
                                <span className="text-slate-400 text-[11px]">needs attention</span>
                            </div>
                        </div>
                        <div className="bg-white border border-[var(--border-subtle)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[var(--status-amber-text)]">today</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Payments Due Today</p>
                            <h3 className="text-3xl font-bold text-[var(--brand-dark)] mt-1">42</h3>
                            <div className="flex items-center gap-1.5 mt-3">
                                <span className="flex items-center text-[var(--status-amber-text)] text-xs font-bold bg-[var(--status-amber-bg)] px-2 py-0.5 rounded-full">
                                    <span className="material-symbols-outlined text-[14px]">event</span> Today
                                </span>
                                <span className="text-slate-400 text-[11px]">Estimated $3,840.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-sm">
                        <div className="p-4 border-b border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                            <div className="flex p-1 bg-slate-100 rounded-lg">
                                <button className="px-5 py-1.5 text-sm font-semibold rounded-md bg-white text-[var(--brand-dark)] shadow-sm">All</button>
                                <button className="px-5 py-1.5 text-sm font-medium text-slate-500 hover:text-[var(--brand-dark)] transition-colors">Current</button>
                                <button className="px-5 py-1.5 text-sm font-medium text-slate-500 hover:text-[var(--brand-dark)] transition-colors">Overdue</button>
                                <button className="px-5 py-1.5 text-sm font-medium text-slate-500 hover:text-[var(--brand-dark)] transition-colors">Completed</button>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border-subtle)] rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                    Filters
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border-subtle)] rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">download</span>
                                    Export
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-500 text-[11px] uppercase tracking-wider font-bold border-b border-[var(--border-subtle)] bg-slate-50/50">
                                        <th className="px-6 py-4">Customer Name</th>
                                        <th className="px-6 py-4">Device</th>
                                        <th className="px-6 py-4">Total Amount</th>
                                        <th className="px-6 py-4">Paid to Date</th>
                                        <th className="px-6 py-4">Remaining Balance</th>
                                        <th className="px-6 py-4">Next Due Date</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--border-subtle)]">
                                    <tr className="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-[var(--border-subtle)]">JS</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--brand-dark)] group-hover:text-primary transition-colors">Jerome Silas</p>
                                                    <p className="text-xs text-slate-400">#CUST-88210</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">iPhone 15 Pro Max</p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">256GB • Titanium</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-[var(--brand-dark)]">$1,199.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-sm font-medium text-[var(--brand-dark)]">$400.00</p>
                                                <div className="w-24 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                    <div className="bg-primary h-full" style={{ width: "33%" }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-[var(--status-terracotta-text)]">$799.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">Oct 12, 2023</p>
                                            <p className="text-[10px] text-[var(--status-terracotta-text)] font-bold uppercase">5 Days Overdue</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg[var(--status-terracotta-bg)] text-[var(--status-terracotta-text)] border border-[var(--status-terracotta-text)]/10 uppercase tracking-wide">Overdue</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 hover:text-[var(--brand-dark)] transition-colors text-slate-400">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-[var(--border-subtle)]">MA</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--brand-dark)] group-hover:text-primary transition-colors">Maria Alverez</p>
                                                    <p className="text-xs text-slate-400">#CUST-90124</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">Samsung Galaxy S24</p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">512GB • Phantom Black</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-[var(--brand-dark)]">$899.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-sm font-medium text-[var(--brand-dark)]">$750.00</p>
                                                <div className="w-24 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                    <div className="bg-primary h-full" style={{ width: "83%" }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-[var(--brand-dark)]">$149.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">Oct 28, 2023</p>
                                            <p className="text-[10px] text-slate-400 font-medium uppercase">In 11 Days</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[var(--status-emerald-bg)] text-[var(--status-emerald-text)] border border-[var(--status-emerald-text)]/10 uppercase tracking-wide">Current</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 hover:text-[var(--brand-dark)] transition-colors text-slate-400">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-[var(--border-subtle)]">RK</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--brand-dark)] group-hover:text-primary transition-colors">Robert Kincaid</p>
                                                    <p className="text-xs text-slate-400">#CUST-77291</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">Pixel 8 Pro</p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">128GB • Obsidian</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-[var(--brand-dark)]">$999.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-sm font-medium text-[var(--brand-dark)]">$333.00</p>
                                                <div className="w-24 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                    <div className="bg-primary h-full" style={{ width: "33%" }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-[var(--brand-dark)]">$666.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">Oct 17, 2023</p>
                                            <p className="text-[10px] text-[var(--status-amber-text)] font-bold uppercase">Due Today</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[var(--status-amber-bg)] text-[var(--status-amber-text)] border border-[var(--status-amber-text)]/10 uppercase tracking-wide">Upcoming</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 hover:text-[var(--brand-dark)] transition-colors text-slate-400">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-[var(--border-subtle)]">LW</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--brand-dark)] group-hover:text-primary transition-colors">Lydia Wu</p>
                                                    <p className="text-xs text-slate-400">#CUST-10332</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">iPhone 14 Plus</p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">128GB • Purple</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-[var(--brand-dark)]">$799.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-sm font-medium text-[var(--brand-dark)]">$50.00</p>
                                                <div className="w-24 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                    <div className="bg-primary h-full" style={{ width: "6%" }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-[var(--brand-dark)]">$749.00</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">Nov 02, 2023</p>
                                            <p className="text-[10px] text-slate-400 font-medium uppercase">In 16 Days</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[var(--status-emerald-bg)] text-[var(--status-emerald-text)] border border-[var(--status-emerald-text)]/10 uppercase tracking-wide">Current</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-1 hover:text-[var(--brand-dark)] transition-colors text-slate-400">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-[var(--border-subtle)] flex items-center justify-between bg-white">
                            <p className="text-xs text-slate-500">Showing <span className="text-[var(--brand-dark)] font-semibold">1-10</span> of <span className="text-[var(--brand-dark)] font-semibold">1,248</span> installments</p>
                            <div className="flex items-center gap-2">
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--border-subtle)] text-slate-400 hover:text-[var(--brand-dark)] hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded bg-[var(--brand-dark)] text-white font-bold text-xs">1</button>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--border-subtle)] text-slate-500 hover:text-[var(--brand-dark)] hover:bg-slate-50 transition-colors text-xs font-bold">2</button>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--border-subtle)] text-slate-500 hover:text-[var(--brand-dark)] hover:bg-slate-50 transition-colors text-xs font-bold">3</button>
                                <span className="text-slate-400 px-1 text-xs">...</span>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--border-subtle)] text-slate-500 hover:text-[var(--brand-dark)] hover:bg-slate-50 transition-colors text-xs font-bold">125</button>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--border-subtle)] text-slate-400 hover:text-[var(--brand-dark)] hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="mt-auto border-t border-[var(--border-subtle)] py-6 px-6 bg-white">
                    <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-500">© 2023 PhonePlanet Internal Portal. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a className="text-xs text-slate-500 hover:text-[var(--brand-dark)] transition-colors" href="#">Help Center</a>
                            <a className="text-xs text-slate-500 hover:text-[var(--brand-dark)] transition-colors" href="#">System Status</a>
                            <a className="text-xs text-slate-500 hover:text-[var(--brand-dark)] transition-colors" href="#">Security Policy</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
