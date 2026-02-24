import styles from './plan.module.css';

export default function InstallmentPlanDetailsPage() {
    return (
        <>
            <div className={`min-h-screen ${styles.container}`}>
                <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-3 text-[var(--primary)]">
                                    <span className="material-symbols-outlined text-3xl font-bold">account_balance_wallet</span>
                                    <h1 className="text-[var(--primary)] text-lg font-bold tracking-tight">Staff Portal</h1>
                                </div>
                                <nav className="hidden md:flex items-center gap-6">
                                    <a className="text-slate-500 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Dashboard</a>
                                    <a className="text-[var(--primary)] text-sm font-semibold border-b-2 border-[var(--primary)] pb-5 mt-5" href="#">Finance</a>
                                    <a className="text-slate-500 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Inventory</a>
                                    <a className="text-slate-500 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Customers</a>
                                </nav>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative hidden lg:block">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                                    <input className="bg-slate-50 border-slate-200 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-[var(--primary)] focus:border-[var(--primary)] w-64 text-slate-700 placeholder:text-slate-400" placeholder="Search contracts..." type="text" />
                                </div>
                                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                                </button>
                                <div className="h-8 w-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xs">
                                    JS
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                        <a className="hover:text-[var(--primary)] transition-colors" href="#">Finance</a>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <a className="hover:text-[var(--primary)] transition-colors" href="#">Installment Plans</a>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900 font-medium">Kwesi Mensah</span>
                    </nav>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kwesi Mensah</h2>
                                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 uppercase tracking-wider">Active Plan</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-500">
                                <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm">badge</span>
                                    <span className="text-sm">GHA-721049532-4</span>
                                </div>
                                <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
                                    <span className="material-symbols-outlined text-sm">id_card</span>
                                    <span className="text-sm">Contract ID: PP-CON-8829</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-5 py-2.5 bg-white text-slate-700 rounded-xl font-bold text-sm border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                                <span className="material-symbols-outlined text-sm">description</span>
                                View Agreement
                            </button>
                            <button className="px-6 py-2.5 bg-[var(--primary)] text-white rounded-xl font-bold text-sm hover:opacity-95 transition-all shadow-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">add_card</span>
                                Record Payment
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white shadow-soft border border-slate-100 rounded-xl p-6 flex items-start gap-4">
                            <div className="h-16 w-16 rounded-xl bg-slate-50 overflow-hidden shrink-0 border border-slate-100">
                                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTdwVnDZZhjt90BlRzBlPTkSP7LWxzmcK5LqsWiZFpBbSiUZfCUBiV8s_g_RmJ2R1_nyTPivU-mqoUjkqLiUkHJuQ82Yd3wq5bTA-ahaOEN7LC2fgjjR86iQ2bIY2vxjP0sXn7OYCMzwVSRX4kGOy_RPaLN48rfc9LZSa32-5uP7m38BjUkkcrLZq2MHsGXR8RXweG07PRKEfqpk6t2XyBBscCykW8EjGLj4vOKN8UFz215O5Fl-qQg-FVl_ZkhZoh50WBEXwj-OYk" />
                            </div>
                            <div className="space-y-0.5">
                                <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Customer Profile</h3>
                                <p className="text-slate-900 font-bold">Kwesi Mensah</p>
                                <p className="text-slate-500 text-sm">+233 24 123 4567</p>
                                <p className="text-slate-400 text-xs">kwesi.m@example.com</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-soft border border-slate-100 rounded-xl p-6 flex items-start gap-4">
                            <div className="h-16 w-16 rounded-xl bg-slate-50 overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl text-[var(--accent)]">smartphone</span>
                            </div>
                            <div className="space-y-0.5">
                                <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Device Details</h3>
                                <p className="text-slate-900 font-bold">iPhone 15 Pro, 256GB</p>
                                <p className="text-slate-500 text-sm">Natural Titanium</p>
                                <p className="text-slate-400 text-xs italic">IMEI: 354672109844211</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-soft border border-slate-100 rounded-xl p-6">
                            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">Repayment Progress</h3>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-2xl font-black text-slate-900">GHS 8,000 <span className="text-xs text-slate-400 font-normal">paid</span></span>
                                <span className="text-sm font-bold text-[var(--accent)]">58%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                <div className="bg-[var(--accent)] h-full rounded-full" style={{ width: "58%" }}></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                                <span>Paid: GHS 8,000</span>
                                <span>Remaining: GHS 5,800</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white shadow-soft border border-slate-100 rounded-xl p-5">
                            <p className="text-slate-400 text-xs font-semibold mb-1 uppercase tracking-tight">Original Price</p>
                            <p className="text-xl font-bold text-slate-900">GHS 12,000</p>
                        </div>
                        <div className="bg-white shadow-soft border border-slate-100 rounded-xl p-5">
                            <p className="text-slate-400 text-xs font-semibold mb-1 uppercase tracking-tight">Interest Rate</p>
                            <div className="flex items-center gap-2">
                                <p className="text-xl font-bold text-slate-900">15%</p>
                                <span className="text-[10px] bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded border border-slate-100 font-medium">Standard</span>
                            </div>
                        </div>
                        <div className="bg-white shadow-soft border border-[var(--primary)]/10 ring-1 ring-[var(--primary)]/5 rounded-xl p-5">
                            <p className="text-[var(--primary)]/70 text-xs font-bold mb-1 uppercase tracking-tight">Total Contract Value</p>
                            <p className="text-xl font-bold text-[var(--primary)]">GHS 13,800</p>
                        </div>
                        <div className="bg-white shadow-soft border border-slate-100 rounded-xl p-5">
                            <p className="text-slate-400 text-xs font-semibold mb-1 uppercase tracking-tight">Monthly Installment</p>
                            <p className="text-xl font-bold text-slate-900">GHS 1,150</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-soft border border-slate-100 rounded-xl overflow-hidden mb-12">
                        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-slate-900 font-bold flex items-center gap-2">
                                Payment Schedule
                                <span className="text-xs font-normal text-slate-400">(12 Months Plan)</span>
                            </h3>
                            <div className="flex gap-4">
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Paid
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Pending
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-rose-500"></span> Overdue
                                </span>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
                                        <th className="px-6 py-4">Installment</th>
                                        <th className="px-6 py-4">Due Date</th>
                                        <th className="px-6 py-4">Amount Due</th>
                                        <th className="px-6 py-4">Date Paid</th>
                                        <th className="px-6 py-4">Method</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">#01</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">Oct 15, 2023</td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900">GHS 1,150</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">Oct 14, 2023</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">Mobile Money</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-bold">
                                                <span className="material-symbols-outlined text-sm font-bold">check_circle</span> PAID
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-[var(--primary)] transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="bg-rose-50/30 hover:bg-rose-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">#02</td>
                                        <td className="px-6 py-4 text-sm font-bold text-rose-600">Nov 15, 2023</td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900">GHS 1,150</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 text-rose-600 text-[11px] font-bold">
                                                <span className="material-symbols-outlined text-sm font-bold">warning</span> OVERDUE
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm hover:bg-rose-700 transition-colors">Resolve</button>
                                        </td>
                                    </tr>
                                    <tr className="bg-[var(--bg-main)]/50 hover:bg-[var(--bg-main)] transition-colors border-l-4 border-[var(--accent)]">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">#03</td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900">Dec 15, 2023</td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900">GHS 1,150</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 text-amber-600 text-[11px] font-bold">
                                                <span className="material-symbols-outlined text-sm font-bold">schedule</span> PENDING
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-[var(--primary)] hover:text-[var(--accent)] font-bold text-[11px] uppercase tracking-wider transition-colors underline decoration-2 underline-offset-4">Pay Now</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors opacity-70">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-400">#04</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">Jan 15, 2024</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">GHS 1,150</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4">
                                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Scheduled</span>
                                        </td>
                                        <td className="px-6 py-4 text-right"></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors opacity-70">
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-400">#05</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">Feb 15, 2024</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">GHS 1,150</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4 text-sm text-slate-400">—</td>
                                        <td className="px-6 py-4">
                                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Scheduled</span>
                                        </td>
                                        <td className="px-6 py-4 text-right"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                            <p className="text-[11px] text-slate-400 italic">Showing active contract payment history for 2023-2024</p>
                            <div className="flex gap-2">
                                <button className="p-1.5 text-slate-400 hover:text-[var(--primary)] disabled:opacity-30 transition-colors" disabled={true}>
                                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-[var(--primary)] transition-colors">
                                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="fixed inset-0 bg-[var(--primary)]/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto hidden">
                    <div className="bg-white border border-slate-100 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Record Payment</h3>
                                <p className="text-sm text-slate-500">Input transaction details for Kwesi Mensah</p>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount Paid (GHS)</label>
                                    <input className="w-full bg-slate-50 border-slate-200 rounded-lg text-slate-900 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-sm" type="number" value="1150" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment Date</label>
                                    <input className="w-full bg-slate-50 border-slate-200 rounded-lg text-slate-900 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-sm" type="date" value="2023-11-20" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment Method</label>
                                <select className="w-full bg-slate-50 border-slate-200 rounded-lg text-slate-900 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-sm">
                                    <option>Mobile Money (MTN/Telecel)</option>
                                    <option>Cash</option>
                                    <option>Bank Transfer</option>
                                    <option>Cheque</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction Reference</label>
                                <input className="w-full bg-slate-50 border-slate-200 rounded-lg text-slate-900 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-sm" placeholder="TXN-9920-XXX" type="text" />
                            </div>
                            <div className="space-y-1.5 pt-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input checked={true} className="rounded border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)] bg-white" type="checkbox" />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Generate digital receipt and SMS to customer</span>
                                </label>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all" type="button">Cancel</button>
                                <button className="flex-1 px-4 py-3 bg-[var(--primary)] text-white rounded-xl font-bold text-sm hover:opacity-95 shadow-lg transition-all" type="submit">Confirm Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
                <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-[var(--primary)] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-40">
                    <span className="material-symbols-outlined text-3xl">add</span>
                </button>
            </div>
        </>
    );
}