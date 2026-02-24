import styles from './finance-rpt.module.css';

export default function FinanceDashboardPage() {
    return (
        <>
            <div className={`min-h-screen flex overflow-hidden ${styles.container}`}>
                <aside className="w-64 border-r border-[var(--border-neutral)] bg-white flex flex-col h-screen">
                    <div className="p-6 flex items-center gap-3">
                        <div className="bg-[var(--deep-teal)] rounded-lg p-1.5 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">smartphone</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold leading-tight text-[var(--deep-teal)]">PhonePlanet</h1>
                            <p className="text-xs text-slate-500 font-medium">Staff Portal</p>
                        </div>
                    </div>
                    <nav className="flex-1 px-4 space-y-2 mt-4">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl active-nav" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm font-semibold">Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
                            <span className="material-symbols-outlined">bar_chart</span>
                            <span className="text-sm font-medium">Reports</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
                            <span className="material-symbols-outlined">group</span>
                            <span className="text-sm font-medium">Customers</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span className="text-sm font-medium">Payments</span>
                        </a>
                        <div className="pt-4 pb-2 px-4 text-[10px] uppercase tracking-wider text-slate-400 font-bold">System</div>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                    </nav>
                    <div className="p-4 mt-auto">
                        <div className="bg-slate-50 rounded-xl p-4 border border-[var(--border-neutral)]">
                            <p className="text-xs font-semibold text-[var(--deep-teal)] mb-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">emergency_home</span> Support
                            </p>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">Having issues with financial sync? Contact IT Support.</p>
                            <button className="w-full py-2 bg-white hover:bg-slate-100 text-[var(--deep-teal)] text-xs font-bold rounded-lg transition-all border border-[var(--border-neutral)]">
                                Get Help
                            </button>
                        </div>
                        <div className="flex items-center gap-3 mt-6 px-2">
                            <div className="size-10 rounded-full bg-slate-100 border border-[var(--border-neutral)] overflow-hidden">
                                <img alt="Staff Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbvdPka96ShhUq2d4HFbY6OYxdatTGe3L4c-tito1NBazGUYlZHx8LMa1sU2ZdVWbvzO-gslJEtE3RDdn4lS-5agW7X9E0zh5PxSvYviMt1qOoWedgfwhXNv5Fb2XPulIUbbkzmR4RQGFiEbaGEaT6Kh71PcMGQbMQ0G3Tmi9Prch6nRzsvPsjNXQ45t4O8hh5Hd936a1Jo9bpvPEozt5C3n-7F3eY9xJiLK22w_F6tK3TIcYWVBFVEMF-_dEmqSso3IjKU2-0Xh7u" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold truncate text-[var(--deep-teal)]">Alex Rivera</p>
                                <p className="text-[10px] text-slate-500 font-medium truncate uppercase tracking-tighter">Senior Auditor</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer hover:text-[var(--deep-teal)]">logout</span>
                        </div>
                    </div>
                </aside>
                <div className='flex-1 flex flex-col overflow-y-auto'>
                    <header className="h-20 border-b border-[var(--border-neutral)] px-8 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
                        <div>
                            <h2 className="text-xl font-bold text-[var(--deep-teal)]">Staff Finance Dashboard</h2>
                            <div className="flex items-center gap-2 mt-0.5">
                                <div className="size-2 rounded-full bg-[var(--emerald)]"></div>
                                <p className="text-xs text-slate-500 font-medium">Live System Health: Stable • Last updated: 14:32 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <label className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </label>
                                <input className="bg-white border-[var(--border-neutral)] rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:ring-[var(--deep-teal)] focus:border-[var(--deep-teal)] transition-all" placeholder="Search transactions..." type="text" />
                            </div>
                            <button className="size-10 flex items-center justify-center bg-white border border-[var(--border-neutral)] rounded-xl hover:bg-slate-50 transition-all relative">
                                <span className="material-symbols-outlined text-slate-500">notifications</span>
                                <span className="absolute top-2 right-2.5 size-2 bg-[var(--muted-terracotta)] rounded-full ring-2 ring-white"></span>
                            </button>
                            <button className="bg-[var(--deep-teal)] hover:bg-opacity-90 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Add Transaction
                            </button>
                        </div>
                    </header>
                    <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white border border-[var(--border-neutral)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                                <p className="text-slate-500 text-sm font-medium mb-1">Today's Revenue</p>
                                <h3 className="text-3xl font-semibold tracking-tight text-[var(--deep-teal)] mb-2">$12,450.00</h3>
                                <div className="flex items-center gap-1 text-[var(--emerald)] text-xs font-bold bg-emerald-50 w-fit px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                    +12.4%
                                </div>
                            </div>
                            <div className="bg-white border border-[var(--border-neutral)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                                <p className="text-slate-500 text-sm font-medium mb-1">Outstanding Installments</p>
                                <h3 className="text-3xl font-semibold tracking-tight text-[var(--deep-teal)] mb-2">$84,200.50</h3>
                                <div className="flex items-center gap-1 text-[var(--muted-terracotta)] text-xs font-bold bg-orange-50 w-fit px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-[14px]">warning</span>
                                    14 Overdue
                                </div>
                            </div>
                            <div className="bg-white border border-[var(--border-neutral)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                                <p className="text-slate-500 text-sm font-medium mb-1">Active Subscribers</p>
                                <h3 className="text-3xl font-semibold tracking-tight text-[var(--deep-teal)] mb-2">1,240</h3>
                                <div className="flex items-center gap-1 text-[var(--emerald)] text-xs font-bold bg-emerald-50 w-fit px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-[14px]">person_add</span>
                                    +28 new
                                </div>
                            </div>
                            <div className="bg-white border border-[var(--border-neutral)] p-6 rounded-xl relative overflow-hidden group shadow-sm">
                                <p className="text-slate-500 text-sm font-medium mb-1">Monthly Recurring Revenue</p>
                                <h3 className="text-3xl font-semibold tracking-tight text-[var(--deep-teal)] mb-2">$45,800.00</h3>
                                <div className="flex items-center gap-1 text-[var(--primary-teal)] text-xs font-bold bg-cyan-50 w-fit px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-[14px]">autorenew</span>
                                    8.4% growth
                                </div>
                            </div>
                        </section>
                        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-4 bg-white border border-[var(--border-neutral)] rounded-xl p-6 flex flex-col h-full min-h-[450px] shadow-sm">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h4 className="font-bold text-lg text-[var(--deep-teal)]">Revenue Breakdown</h4>
                                        <p className="text-xs text-slate-500">Distribution across revenue streams</p>
                                    </div>
                                    <button className="material-symbols-outlined text-slate-400 hover:text-[var(--deep-teal)] transition-colors">more_vert</button>
                                </div>
                                <div className="flex-1 flex flex-col justify-end gap-10">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-semibold">
                                                <span className="text-slate-500">Outright Sales</span>
                                                <span className="text-[var(--deep-teal)]">$42.7k (30%)</span>
                                            </div>
                                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[var(--amber)] rounded-full" style={{ width: "30%" }}></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-semibold">
                                                <span className="text-slate-500">Installments</span>
                                                <span className="text-[var(--deep-teal)]">$56.9k (40%)</span>
                                            </div>
                                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[var(--primary-teal)] rounded-full" style={{ width: "40%" }}></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-semibold">
                                                <span className="text-slate-500">Subscriptions</span>
                                                <span className="text-[var(--deep-teal)]">$42.8k (30%)</span>
                                            </div>
                                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[var(--emerald)] rounded-full" style={{ width: "30%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-[var(--border-neutral)]">
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="bg-slate-50 p-3 rounded-lg border border-[var(--border-neutral)] text-center">
                                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Growth</p>
                                                <p className="text-sm font-bold text-[var(--emerald)]">+8.2%</p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-[var(--border-neutral)] text-center">
                                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Churn</p>
                                                <p className="text-sm font-bold text-[var(--muted-terracotta)]">2.4%</p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-[var(--border-neutral)] text-center">
                                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">ROI</p>
                                                <p className="text-sm font-bold text-[var(--deep-teal)]">18.5%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-8 bg-white border border-[var(--border-neutral)] rounded-xl overflow-hidden flex flex-col h-full shadow-sm">
                                <div className="p-6 border-b border-[var(--border-neutral)] flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-lg text-[var(--deep-teal)]">Recent Transactions</h4>
                                        <p className="text-xs text-slate-500">Processing real-time payment data</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-xs font-bold text-[var(--deep-teal)] px-3 py-1.5 rounded-lg border border-[var(--border-neutral)] bg-white hover:bg-slate-50 transition-all">Export CSV</button>
                                        <button className="text-xs font-bold text-slate-500 px-3 py-1.5 rounded-lg border border-[var(--border-neutral)] bg-slate-50 hover:bg-slate-100 transition-all">View All</button>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                                            <tr>
                                                <th className="px-6 py-4">Status</th>
                                                <th className="px-6 py-4">Transaction ID</th>
                                                <th className="px-6 py-4">User</th>
                                                <th className="px-6 py-4">Type</th>
                                                <th className="px-6 py-4 text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[var(--border-neutral)] text-sm">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-[var(--emerald)] uppercase border border-emerald-100">Success</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 font-medium">#TXN-9012</td>
                                                <td className="px-6 py-4 font-bold text-[var(--deep-teal)]">Alice Johnson</td>
                                                <td className="px-6 py-4 text-slate-500">Subscription</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[var(--deep-teal)]">$1,200.00</td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-[var(--muted-terracotta)] uppercase border border-orange-100">Overdue</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 font-medium">#TXN-9011</td>
                                                <td className="px-6 py-4 font-bold text-[var(--deep-teal)]">Bob Smith</td>
                                                <td className="px-6 py-4 text-slate-500">Installment</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[var(--deep-teal)]">$450.00</td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-[var(--emerald)] uppercase border border-emerald-100">Success</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 font-medium">#TXN-9010</td>
                                                <td className="px-6 py-4 font-bold text-[var(--deep-teal)]">Charlie Davis</td>
                                                <td className="px-6 py-4 text-slate-500">Outright</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[var(--deep-teal)]">$899.99</td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-[var(--amber)] uppercase border border-amber-100">Pending</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 font-medium">#TXN-9009</td>
                                                <td className="px-6 py-4 font-bold text-[var(--deep-teal)]">Diana Prince</td>
                                                <td className="px-6 py-4 text-slate-500">Installment</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[var(--deep-teal)]">$210.00</td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-[var(--emerald)] uppercase border border-emerald-100">Success</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 font-medium">#TXN-9008</td>
                                                <td className="px-6 py-4 font-bold text-[var(--deep-teal)]">Ethan Hunt</td>
                                                <td className="px-6 py-4 text-slate-500">Subscription</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[var(--deep-teal)]">$1,200.00</td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-[var(--muted-terracotta)] uppercase border border-orange-100">Overdue</span>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 font-medium">#TXN-9007</td>
                                                <td className="px-6 py-4 font-bold text-[var(--deep-teal)]">Fiona Glenanne</td>
                                                <td className="px-6 py-4 text-slate-500">Installment</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[var(--deep-teal)]">$320.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="px-8 pb-8">
                        <div className="bg-orange-50 border border-[var(--muted-terracotta)]/30 p-4 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-[var(--muted-terracotta)]/10 flex items-center justify-center text-[var(--muted-terracotta)]">
                                    <span className="material-symbols-outlined">priority_high</span>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-[var(--deep-teal)] leading-none">System Alert: High Overdue Balance</h5>
                                    <p className="text-xs text-slate-500 mt-1">There are currently 14 installments overdue by more than 30 days. Collection protocols recommended.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="text-xs font-bold text-slate-500 hover:text-[var(--deep-teal)] transition-colors">Dismiss</button>
                                <button className="bg-[var(--muted-terracotta)] hover:bg-opacity-90 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm">Run Recovery Action</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
