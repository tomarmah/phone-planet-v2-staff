import styles from './subscriptions.module.css'

export default function SubscriptionsPage() {
    return (
        <>
            <div className={`min-h-screen ${styles.container}`}>
                <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                    <div className="layout-container flex h-full grow flex-col">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-light)] px-6 md:px-10 py-4 bg-white sticky top-0 z-50 shadow-sm">
                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-3 text-[var(--color-emerald-muted)]">
                                    <div className="size-9 flex items-center justify-center bg-[var(--color-emerald-muted)]/10 rounded-xl">
                                        <span className="material-symbols-outlined text-[var(--color-emerald-muted)">diamond</span>
                                    </div>
                                    <h2 className="text-slate-900 text-xl font-extrabold leading-tight tracking-tight">PhonePlanet <span className="text-[var(--color-emerald-muted)/80 font-medium">Portal</span></h2>
                                </div>
                                <label className="hidden md:flex flex-col min-w-64 h-10">
                                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                        <div className="text-slate-400 flex bg-slate-100 items-center justify-center pl-4 rounded-l-xl">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 text-slate-900 focus:ring-0 h-full placeholder:text-slate-400 px-4 rounded-r-xl text-sm font-medium" placeholder="Search metrics or users..." value="" />
                                    </div>
                                </label>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                                <nav className="hidden lg:flex items-center gap-8">
                                    <a className="text-slate-500 hover:text-[var(--color-emerald-muted) text-sm font-semibold transition-colors" href="#">Dashboard</a>
                                    <a className="text-slate-500 hover:text-[var(--color-emerald-muted) text-sm font-semibold transition-colors" href="#">Inventory</a>
                                    <a className="text-[var(--color-emerald-muted) text-sm font-bold border-b-2 border-[var(--color-emerald-muted) py-5" href="#">Subscriptions</a>
                                    <a className="text-slate-500 hover:text-[var(--color-emerald-muted) text-sm font-semibold transition-colors" href="#">Staff</a>
                                </nav>
                                <div className="flex gap-3">
                                    <button className="flex size-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-500 transition-all hover:bg-white hover:shadow-sm">
                                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                                    </button>
                                    <button className="flex size-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-500 transition-all hover:bg-white hover:shadow-sm">
                                        <span className="material-symbols-outlined text-[20px]">settings</span>
                                    </button>
                                </div>
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 border border-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD366S84pSeoc9INqlSnse9iWu_udfi5lRG4aH3Lm4AWs3zWtfn_VzM8etxuZz04_iPIniHGa_eHc-2PswnZpAzMbslnkrClxOxLh-Z4I1ddaY0N50NEtQJDMXwCH6gD0z5jlLzzhBEfr_yNBtoyv-T7XAivtQgpuJXRuugZ1PEwSvuEJr1mcvzP1nEr4hGOvo24PTuECTc2hNvzzOJ3KY0jzSeVfMAIOugPi5CiQnXrL4lEVN69X6fiCglcwnr2dPztQBanOJ5iFWs");' }}></div>
                            </div>
                        </header>
                        <main className="flex flex-1 justify-center py-10">
                            <div className="layout-content-container flex flex-col w-full max-w-[1280px] px-6 md:px-10 gap-10">
                                <div className="flex flex-wrap items-center justify-between gap-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[var(--color-emerald-muted) text-[10px] font-black uppercase tracking-[0.2em] bg-[var(--color-emerald-muted)/5 border border-[var(--color-emerald-muted)/10 px-2.5 py-1 rounded-md">Finance Department</span>
                                        </div>
                                        <h1 className="text-slate-900 text-4xl font-extrabold tracking-tight">Subscription Revenue Report</h1>
                                        <p className="text-slate-500 text-lg font-medium">Monitoring growth and loyalty for the PhonePlanet Club</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-3 bg-white border border-[var(--border-light)] rounded-xl px-4 py-2.5 shadow-sm">
                                            <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_month</span>
                                            <span className="text-sm font-semibold text-slate-700">Oct 2023 - Nov 2023</span>
                                        </div>
                                        <button className="flex items-center gap-2 rounded-xl px-5 py-2.5 bg-[var(--color-emerald-muted) text-white text-sm font-bold shadow-lg shadow-[var(--color-emerald-muted)/20 hover:bg-[#25665a] transition-all">
                                            <span className="material-symbols-outlined text-[18px]">download</span>
                                            <span>Export Report</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="flex flex-col gap-4 rounded-2xl p-7 bg-white border border-[var(--border-light)] shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-center">
                                            <div className="p-2 rounded-lg bg-[var(--color-emerald-muted)/5 text-[var(--color-emerald-muted)">
                                                <span className="material-symbols-outlined text-[24px]">groups</span>
                                            </div>
                                            <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">
                                                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                                2.4%
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm font-semibold mb-1">Total Subscribers</p>
                                            <p className="text-slate-900 text-3xl font-extrabold tracking-tight">12,450</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 rounded-2xl p-7 bg-white border border-[var(--border-light)] shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-center">
                                            <div className="p-2 rounded-lg bg-[var(--color-emerald-muted)/5 text-[var(--color-emerald-muted)">
                                                <span className="material-symbols-outlined text-[24px]">person_add</span>
                                            </div>
                                            <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">
                                                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                                5.1%
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm font-semibold mb-1">New Joins (MTD)</p>
                                            <p className="text-slate-900 text-3xl font-extrabold tracking-tight">842</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 rounded-2xl p-7 bg-white border border-[var(--border-light)] shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-center">
                                            <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                                                <span className="material-symbols-outlined text-[24px]">heart_broken</span>
                                            </div>
                                            <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">
                                                <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                                                0.3%
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm font-semibold mb-1">Churn Rate</p>
                                            <p className="text-slate-900 text-3xl font-extrabold tracking-tight">1.2%</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 rounded-2xl p-7 bg-white border border-[var(--border-light)] shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-center">
                                            <div className="p-2 rounded-lg bg-[var(--color-emerald-muted)]/5 text-[var(--color-emerald-muted)]">
                                                <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
                                            </div>
                                            <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">
                                                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                                3.8%
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm font-semibold mb-1">Current MRR</p>
                                            <p className="text-slate-900 text-3xl font-extrabold tracking-tight">$124,500</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-8 flex flex-col gap-8 rounded-2xl p-8 bg-white border border-[var(--border-light)] shadow-sm">
                                        <div className="flex flex-wrap justify-between items-end gap-4">
                                            <div>
                                                <h3 className="text-slate-900 text-xl font-extrabold tracking-tight">MRR Growth Trend</h3>
                                                <p className="text-slate-500 text-sm font-medium">Visualizing monthly recurring revenue over 12 months</p>
                                            </div>
                                            <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl">
                                                <button className="px-4 py-1.5 rounded-lg bg-white text-[var(--color-emerald-muted)] text-xs font-bold shadow-sm">12M</button>
                                                <button className="px-4 py-1.5 rounded-lg text-slate-500 text-xs font-bold hover:text-slate-800">6M</button>
                                                <button className="px-4 py-1.5 rounded-lg text-slate-500 text-xs font-bold hover:text-slate-800">3M</button>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col gap-8 min-h-[350px]">
                                            <svg className="mt-4" fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 120C20 120 40 40 60 40C80 40 100 60 120 60C140 60 160 110 180 110C200 110 220 50 240 50C260 50 280 110 300 110C320 110 340 70 360 70C380 70 400 30 420 30C440 30 460 130 480 130V150H0V120Z" fill="url(#lightGradient)"></path>
                                                <path d="M0 120C20 120 40 40 60 40C80 40 100 60 120 60C140 60 160 110 180 110C200 110 220 50 240 50C260 50 280 110 300 110C320 110 340 70 360 70C380 70 400 30 420 30C440 30 460 130 480 130" stroke="#2E7D6F" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                                <defs>
                                                    <linearGradient gradientUnits="userSpaceOnUse" id="lightGradient" x1="0" x2="0" y1="30" y2="150">
                                                        <stop stop-color="#2E7D6F" stop-opacity="0.12"></stop>
                                                        <stop offset="1" stop-color="#2E7D6F" stop-opacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div className="flex justify-between px-2">
                                                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Nov 22</p>
                                                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Jan</p>
                                                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Mar</p>
                                                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">May</p>
                                                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Jul</p>
                                                <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Sep</p>
                                                <p className="text-[var(--color-emerald-muted)] text-[10px] font-extrabold tracking-widest uppercase">Oct 23</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 flex flex-col gap-6">
                                        <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white border border-[var(--border-light)] shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <p className="text-slate-900 text-base font-bold">October 2023</p>
                                                <div className="flex gap-1">
                                                    <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors">
                                                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                                    </button>
                                                    <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors">
                                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-7 gap-y-2">
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Sun</div>
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Mon</div>
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Tue</div>
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Wed</div>
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Thu</div>
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Fri</div>
                                                <div className="text-slate-400 text-[10px] font-extrabold text-center uppercase tracking-tighter">Sat</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-300">25</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-300">26</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-300">27</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-300">28</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-300">29</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-medium text-slate-300">30</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">1</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">2</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">3</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">4</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold bg-[var(--color-emerald-muted)]/10 text-[var(--color-emerald-muted)] rounded-l-lg">5</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold bg-[var(--color-emerald-muted)]/10 text-[var(--color-emerald-muted)]">6</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold bg-[var(--color-emerald-muted)]/10 text-[var(--color-emerald-muted)]">7</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold bg-[var(--color-emerald-muted)] text-white rounded-r-lg shadow-sm">8</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">9</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">10</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">11</div>
                                                <div className="h-8 flex items-center justify-center text-[11px] font-bold text-slate-700">12</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-5 rounded-2xl p-7 bg-[var(--color-emerald-muted)] text-white shadow-xl shadow-[var(--color-emerald-muted)]/20 overflow-hidden relative">
                                            <div className="absolute -top-4 -right-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
                                            <div className="relative z-10 flex flex-col gap-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Loyalty Index</h4>
                                                </div>
                                                <p className="text-xl font-bold leading-tight">
                                                    Member retention grew <span className="bg-white text-[var(--color-emerald-muted)] px-1 rounded">12%</span> this quarter.
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full bg-white w-[81%] rounded-full"></div>
                                                    </div>
                                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/70">
                                                        <span>Current: 81.2%</span>
                                                        <span>Target: 85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col rounded-2xl bg-white border border-[var(--border-light)] overflow-hidden shadow-sm mb-12">
                                    <div className="p-8 border-b border-[var(--border-light)] flex flex-wrap gap-4 justify-between items-center">
                                        <div>
                                            <h3 className="text-slate-900 text-xl font-extrabold tracking-tight">Recent Activity</h3>
                                            <p className="text-slate-500 text-sm font-medium">Real-time subscription event monitoring</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-light)] text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                                                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                                <span>Filter</span>
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-light)] text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                                                <span className="material-symbols-outlined text-[18px]">search</span>
                                                <span>Search</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50/50">
                                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400">Subscriber</th>
                                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400">Plan Tier</th>
                                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400">Status</th>
                                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400">Joined Date</th>
                                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400">Last Payment</th>
                                                    <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr className="hover:bg-slate-50/80 transition-colors group">
                                                    <td className="px-8 py-5">
                                                        <div className="flex items-center gap-4">
                                                            <div className="size-10 rounded-xl bg-[var(--color-emerald-muted)]/10 flex items-center justify-center text-[var(--color-emerald-muted)] font-bold text-xs">AJ</div>
                                                            <div>
                                                                <p className="text-slate-900 text-sm font-extrabold">Alex Johnson</p>
                                                                <p className="text-slate-400 text-xs font-medium">alex.j@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="text-sm font-bold text-slate-700">Club Pro</span>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                            <span className="size-1.5 rounded-full bg-emerald-500 mr-2"></span>
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-sm font-medium text-slate-500">Oct 12, 2023</td>
                                                    <td className="px-8 py-5">
                                                        <p className="text-sm font-extrabold text-slate-900">$29.99</p>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Mastercard • 4422</p>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <button className="text-slate-300 hover:text-[var(--color-emerald-muted)] transition-colors opacity-0 group-hover:opacity-100">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/80 transition-colors group">
                                                    <td className="px-8 py-5">
                                                        <div className="flex items-center gap-4">
                                                            <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">SM</div>
                                                            <div>
                                                                <p className="text-slate-900 text-sm font-extrabold">Sarah Miller</p>
                                                                <p className="text-slate-400 text-xs font-medium">sarah.m@company.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="text-sm font-bold text-slate-700">Elite Yearly</span>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                            <span className="size-1.5 rounded-full bg-emerald-500 mr-2"></span>
                                                            Active
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-sm font-medium text-slate-500">Sept 28, 2023</td>
                                                    <td className="px-8 py-5">
                                                        <p className="text-sm font-extrabold text-slate-900">$199.00</p>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">PayPal Account</p>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <button className="text-slate-300 hover:text-[var(--color-emerald-muted)] transition-colors opacity-0 group-hover:opacity-100">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/80 transition-colors group">
                                                    <td className="px-8 py-5">
                                                        <div className="flex items-center gap-4">
                                                            <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">RK</div>
                                                            <div>
                                                                <p className="text-slate-900 text-sm font-extrabold">Robert King</p>
                                                                <p className="text-slate-400 text-xs font-medium">r.king@web.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="text-sm font-bold text-slate-700">Basic Monthly</span>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                                                            <span className="size-1.5 rounded-full bg-slate-400 mr-2"></span>
                                                            Churned
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-sm font-medium text-slate-500">Aug 15, 2023</td>
                                                    <td className="px-8 py-5">
                                                        <p className="text-sm font-extrabold text-slate-400">$9.99</p>
                                                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Stopped Oct 15</p>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <button className="text-slate-300 hover:text-[var(--color-emerald-muted)] transition-colors opacity-0 group-hover:opacity-100">
                                                            <span className="material-symbols-outlined">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="px-8 py-5 bg-slate-50/50 flex justify-between items-center">
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Showing 1 to 10 of 4,250 subscribers</p>
                                        <div className="flex gap-2">
                                            <button className="size-9 flex items-center justify-center rounded-xl border border-[var(--border-light)] text-slate-400 hover:bg-white disabled:opacity-30" disabled={true}>
                                                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                            </button>
                                            <button className="size-9 flex items-center justify-center rounded-xl bg-[var(--color-emerald-muted)] text-white text-xs font-black shadow-lg shadow-[var(--color-emerald-muted)]/20">1</button>
                                            <button className="size-9 flex items-center justify-center rounded-xl border border-[var(--border-light)] text-slate-500 text-xs font-black hover:bg-white hover:border-[var(--color-emerald-muted)]/30">2</button>
                                            <button className="size-9 flex items-center justify-center rounded-xl border border-[var(--border-light)] text-slate-500 text-xs font-black hover:bg-white hover:border-[var(--color-emerald-muted)]/30">3</button>
                                            <button className="size-9 flex items-center justify-center rounded-xl border border-[var(--border-light)] text-slate-500 hover:bg-white hover:border-[var(--color-emerald-muted)]/30">
                                                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}