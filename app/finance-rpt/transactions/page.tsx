import styles from './transactions.module.css';

export default function TransactionsPage() {
    return (
        <>
            <div className={`min-h-screen flex flex-col ${styles.container}`}>
                <header className="border-b border-[var(--color-border-ui)] bg-white px-6 py-3 sticky top-0 z-50">
                    <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-xl font-bold">payments</span>
                            </div>
                            <h1 className="text-lg font-bold tracking-tight text-[var(--color-primary)]">PhonePlanet Staff Portal</h1>
                        </div>
                        <nav className="hidden lg:flex items-center gap-8">
                            <a className="text-sm font-medium text-slate-500 hover:text-[var(--color-primary)] transition-colors" href="#">Dashboard</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-[var(--color-primary)] transition-colors" href="#">Inventory</a>
                            <a className="text-sm font-bold text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] py-4 -mb-[17px]" href="#">Transactions</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-[var(--color-primary)] transition-colors" href="#">Customers</a>
                            <a className="text-sm font-medium text-slate-500 hover:text-[var(--color-primary)] transition-colors" href="#">Reports</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                            <div className="h-8 w-px bg-[var(--color-border-ui)] mx-1"></div>
                            <div className="flex items-center gap-3 pl-1">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-bold text-[var(--color-primary)] leading-none">Admin User</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Manager</p>
                                </div>
                                <div className="size-9 rounded-full bg-slate-100 border border-[var(--color-border-ui)] overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmvdZvZBIvKEDu7ktTX4HU413OiLSC5Iurf1pHG5qnPmkYAypSmkHcvNL4Jb1gPIZBaUVyhnWJGe20e0kjfnJzgylsJvR96G_TCQufLReNPGCVvByVKTavI_XSbNONsfCX3DgY-2iUQTYHHcoGGLsHYZosyJQSP29_S112E_yDaTcowEeHaac7Zy4zuP7e56kMBL33JAUzNiVX5usD3TX4DGT2-MpdGlqnkxtjZj1tutjyIbsTA8yDi8UJmqhwJy_jUdaUw8UnpF2m" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-[var(--color-primary)] tracking-tight">Financial Transactions Log</h2>
                            <p className="text-slate-500 mt-1">Review and manage all historical payment data across the platform.</p>
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-black text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-md">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            <span>Export CSV</span>
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-[var(--color-border-ui)] mb-6 shadow-sm">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex-1 min-w-[300px]">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                    <input className="w-full bg-[var(--color-canvas)] border-[var(--color-border-ui)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] rounded-lg pl-10 py-2.5 text-sm text-[var(--color-primary)] placeholder:text-slate-400" placeholder="Search by Customer or Order ID..." type="text" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[var(--color-canvas)] border border-[var(--color-border-ui)] rounded-lg text-sm font-medium text-slate-700 hover:border-[var(--color-accent)] transition-colors">
                                        <span className="material-symbols-outlined text-[var(--color-accent)] text-[20px]">calendar_today</span>
                                        <span>Date Range</span>
                                        <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
                                    </button>
                                </div>
                                <div className="relative">
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[var(--color-canvas)] border border-[var(--color-border-ui)] rounded-lg text-sm font-medium text-slate-700 hover:border-[var(--color-accent)] transition-colors">
                                        <span className="material-symbols-outlined text-[var(--color-accent)] text-[20px]">account_balance_wallet</span>
                                        <span>Payment Type</span>
                                        <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
                                    </button>
                                </div>
                                <div className="relative">
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[var(--color-canvas)] border border-[var(--color-border-ui)] rounded-lg text-sm font-medium text-slate-700 hover:border-[var(--color-accent)] transition-colors">
                                        <span className="material-symbols-outlined text-[var(--color-accent)] text-[20px]">payments</span>
                                        <span>Method</span>
                                        <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
                                    </button>
                                </div>
                                <button className="p-2.5 text-slate-400 hover:text-[var(--color-accent)] transition-colors">
                                    <span className="material-symbols-outlined">filter_list_off</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl border border-[var(--color-border-ui)] overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[var(--color-canvas)] border-b border-[var(--color-border-ui)]">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date &amp; Time</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Transaction ID</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Customer</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Method</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Amount</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--color-border-ui)]">
                                    <tr className="hover:bg-[var(--color-canvas)] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-[var(--color-primary)]">Oct 24, 2023</div>
                                            <div className="text-xs text-slate-500">14:30 PM</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <code className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-[var(--color-border-ui)]">TXN-88291</code>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 border border-[var(--color-border-ui)] overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Customer avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUFUiPHHJ2sVIZeDPnQ3iEBC7mZB3-B2ctKZ_ZadLLY8O9G-wdtxu3dSfUNl9r9t9QjCi40oDRIMfeCJ_mM25FRZJ9QguO8b-BJHj5eT3n9bdyqmRF9goPoDGUspEk23c4Lbgco_e4CIOK-_B_1RFX9qS5qIbWvIEuJSvl0UkCthnQaIa-hYNaQI_QbUInWzjXoak7FFTyP4Yl5NyIs9E3DIRDt5laPyRBUq--Urj_Low8Mazx2_uHpfrP7I_o03Qbbon8IOJbeJ0G" />
                                                </div>
                                                <span className="text-sm font-semibold text-[var(--color-primary)]">Alex Rivera</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px]">credit_card</span>
                                                <span>Visa ending in 4242</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="financial-figure text-sm text-emerald-600">+$899.00</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                <span className="size-1.5 rounded-full bg-emerald-500"></span>
                                                Completed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="p-1 text-slate-400 hover:text-[var(--color-primary)] transition-colors">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[var(--color-canvas)] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-[var(--color-primary)]">Oct 24, 2023</div>
                                            <div className="text-xs text-slate-500">12:15 PM</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <code className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-[var(--color-border-ui)]">TXN-88290</code>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 border border-[var(--color-border-ui)] overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Customer avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWeURIe2ZlpMtPy-xqSJwTEYliNSkqsypEOVpdtfoStTbHwLdD8Q0Ra0g4ErBnPlKaqJE5MigOvApGi-DtGitMuzCyFNAEM6ofNU7r0RsHBPjRP1C2VOhiGH2L2U-SHzmLE9F7E3J9P4ZeUsW8_x74LVlHHQTqJXvQfOIs71bc9zUxQRdLQ71WSGnukB2m8b-nMNeji9Aw6wTKgH8asueBO0BhIMA-04958aPieH-2p58I19kYrHrG4t476e2GSFc9iBCHn6iOXzzv" />
                                                </div>
                                                <span className="text-sm font-semibold text-[var(--color-primary)]">Jordan Smith</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px]">account_balance</span>
                                                <span>PayPal</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="financial-figure text-sm text-emerald-600">+$1,200.00</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                <span className="size-1.5 rounded-full bg-emerald-500"></span>
                                                Completed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="p-1 text-slate-400 hover:text-[var(--color-primary)] transition-colors">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[var(--color-canvas)] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-[var(--color-primary)]">Oct 23, 2023</div>
                                            <div className="text-xs text-slate-500">09:45 AM</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <code className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-[var(--color-border-ui)]">TXN-88289</code>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 border border-[var(--color-border-ui)] overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Customer avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfD_YU6XDypP6NHHnnEmQ5MPr4-dbf6YT15kNTy0WkD2cJM74HrfaKdiGLVDcFewbN2aOdHCw5579TaEK4zIJmzhkxmNIdbcq0dYqFhjF2P1zITjiff-IixLLIA8llwGEGCMmwOwNSTY1uQwRyK2WsIL4qIbqTiNSruIlWTuKKgOpr8zVBocOYoHRD8vYX377rbBzWvD7IR3TRDXbpE8Kk9t2r-nFhLqIusv-zjh2D_BKLWoelmqq8aU_M4KXXtCLNnq4WiKlyibK7" />
                                                </div>
                                                <span className="text-sm font-semibold text-[var(--color-primary)]">Casey Chen</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px]">branding_watermark</span>
                                                <span>Apple Pay</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="financial-figure text-sm text-rose-600">-$45.00</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                                                <span className="size-1.5 rounded-full bg-slate-400"></span>
                                                Refunded
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="p-1 text-slate-400 hover:text-[var(--color-primary)] transition-colors">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[var(--color-canvas)] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-[var(--color-primary)]">Oct 23, 2023</div>
                                            <div className="text-xs text-slate-500">08:20 AM</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <code className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-[var(--color-border-ui)]">TXN-88288</code>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 border border-[var(--color-border-ui)] overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Customer avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXm_ZQ93XPpkFveszMA34VswYaC1HMXA7GVZZd-FQT-OxiYAdzSm4L4fSrXVS6oIEcg0n4u2d8gGVzvmLt8Lega3PxuZuG11lxmSFvulOhYuJpeCpgb7jyUphHQw0AOGxDnyRU99Wl5bbSQXge04rPUwA1ro5YHP7YEADtvDb5aii86bwK-XpWqyuGGFA7mbIonLCa1_49pcOVBmJrdxc1pawx8eVzNbTKFGA3m79s2on7Gf0H4LJu0zHM5CSQSXNefN9F7wx8kG81" />
                                                </div>
                                                <span className="text-sm font-semibold text-[var(--color-primary)]">Taylor Varga</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px]">credit_card</span>
                                                <span>Mastercard</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="financial-figure text-sm text-emerald-600">+$159.99</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                                <span className="size-1.5 rounded-full bg-amber-500"></span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="p-1 text-slate-400 hover:text-[var(--color-primary)] transition-colors">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[var(--color-canvas)] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-[var(--color-primary)]">Oct 22, 2023</div>
                                            <div className="text-xs text-slate-500">17:10 PM</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <code className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-[var(--color-border-ui)]">TXN-88287</code>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 border border-[var(--color-border-ui)] overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Customer avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZe4W9Oo54iyYw8pfzl0JZV2IxDtbgpnhrrxLXG_51htzsLPaMy_lWyttJpV2Z5GnDJ2RyiImv07b1AiOCPgC9YIFG-qa_PQBDAd9-utSlPV2PVL4zuGYEKLjnwLH6Q6veqI7iYoOeWb7HqYS4ET-KNzdSF0cFy_BomrlgefQ90cQYEgcErUbmRYw1C6yMMzTKXBe90Aafxm1Ydp7eJFvZjUEUz1_ockPOGCwDJ3q0SVNbSw4Hl3Z3v8XZ51W7nIap4bjuviY6aV1" />
                                                </div>
                                                <span className="text-sm font-semibold text-[var(--color-primary)]">Morgan Low</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px]">credit_card</span>
                                                <span>Visa ending in 0012</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="financial-figure text-sm text-emerald-600">+$649.00</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-100">
                                                <span className="size-1.5 rounded-full bg-rose-500"></span>
                                                Failed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <button className="p-1 text-slate-400 hover:text-[var(--color-primary)] transition-colors">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-white border-t border-[var(--color-border-ui)] flex items-center justify-between">
                            <p className="text-xs text-slate-500">Showing <span className="font-bold text-[var(--color-primary)]">1 - 5</span> of <span className="font-bold text-[var(--color-primary)]">1,284</span> transactions</p>
                            <div className="flex items-center gap-2">
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--color-border-ui)] text-slate-300 cursor-not-allowed">
                                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded bg-[var(--color-primary)] text-white font-bold text-xs">1</button>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--color-border-ui)] text-slate-500 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-xs">2</button>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--color-border-ui)] text-slate-500 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-xs">3</button>
                                <div className="px-1 text-slate-400 text-xs">...</div>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--color-border-ui)] text-slate-500 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-xs">257</button>
                                <button className="size-8 flex items-center justify-center rounded border border-[var(--color-border-ui)] text-slate-500 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="mt-auto py-6 border-t border-[var(--color-border-ui)] bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="p-4 bg-[var(--color-canvas)] rounded-lg border border-[var(--color-border-ui)]">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Daily Total</p>
                            <p className="financial-figure text-xl text-emerald-600">+$12,450.00</p>
                        </div>
                        <div className="p-4 bg-[var(--color-canvas)] rounded-lg border border-[var(--color-border-ui)]">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Avg. Transaction</p>
                            <p className="financial-figure text-xl">$342.12</p>
                        </div>
                        <div className="p-4 bg-[var(--color-canvas)] rounded-lg border border-[var(--color-border-ui)]">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Refunds</p>
                            <p className="financial-figure text-xl text-[var(--color-accent)]">12 Orders</p>
                        </div>
                        <div className="p-4 bg-[var(--color-canvas)] rounded-lg border border-[var(--color-border-ui)]">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Failed Rate</p>
                            <p className="financial-figure text-xl text-rose-600">0.8%</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}