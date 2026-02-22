import styles from './order-mgt.module.css';

export default function OrderMgtPage() {
    return (
        <>
            <div className={`bg-[var(--background)] font-display text-[var(--slate-900-to-100)] min-h-screen ${styles.container}`}>
                {/* <!-- Top Navigation Bar --> */}
                <header className="sticky top-0 z-40 bg-[var(--white-to-slate-900)] border-b border-[var(--slate-200-to-800)]">
                    <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary flex items-center justify-center rounded-lg text-white">
                                    <span className="material-symbols-outlined">smartphone</span>
                                </div>
                                <h1 className="text-xl font-bold tracking-tight">Orders Portal</h1>
                            </div>
                            <div className="hidden md:flex items-center gap-6">
                                <a className="text-primary font-semibold text-sm border-b-2 border-primary h-16 flex items-center" href="#">Orders</a>
                                <a className="text-slate-500 hover:text-primary transition-colors font-medium text-sm h-16 flex items-center" href="#">Customers</a>
                                <a className="text-slate-500 hover:text-primary transition-colors font-medium text-sm h-16 flex items-center" href="#">Inventory</a>
                                <a className="text-slate-500 hover:text-primary transition-colors font-medium text-sm h-16 flex items-center" href="#">Payments</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </span>
                                <input className="bg-[var(--slate-100-to-800)] border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary" placeholder="Search orders..." type="text" />
                            </div>
                            <button className="p-2 text-slate-500 hover:bg-[var(--slate-100-to-800)] rounded-lg">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="flex items-center gap-3 pl-4 border-l border-[var(--slate-200-to-800)]">
                                <div className="text-right">
                                    <p className="text-sm font-semibold">Ama Mensah</p>
                                    <p className="text-xs text-slate-500">Ops Manager</p>
                                </div>
                                <div className="size-10 rounded-full bg-slate-200" data-alt="Staff profile photo portrait">
                                    <img alt="Profile" className="rounded-full size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdCRATo5Ss1Wxw16PvmTB4DREuseJ-okpvT0DQW8_3gRh7-9Ib_xrgkYhjGoO1B8rfE30IP5ijjEvSVl5yY-zxYgOhXWq3v-DsimQjhkkAWMDRssCkC1qJTZ4-VlXMAs0bZ7h7qL2RMTXLvuu6T2dm_81bpscl4SLswLDEbyr2R25tOJuScfdNLVeAD6cRwo5mjK2n7W9Ez-FOTlL7St6-DgptAIBCXldv2bjdiwpwJVbUd6IeQooXflnxEtlhuIhF_TPc26frflaE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="max-w-[1600px] mx-auto p-6 flex gap-6">
                    {/* <!-- Main Content Area --> */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* <!-- Dashboard Stats Summary --> */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-[var(--white-to-slate-900)] p-5 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <p className="text-sm text-slate-500 font-medium">Pending Approvals</p>
                                <div className="flex items-end justify-between mt-2">
                                    <h3 className="text-2xl font-bold">14</h3>
                                    <span className="text-amber-500 text-xs font-bold px-2 py-1 bg-[var(--amber-50-to-amber-900-20)] rounded-full">+3 since morning</span>
                                </div>
                            </div>
                            <div className="bg-[var(--white-to-slate-900)] p-5 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <p className="text-sm text-slate-500 font-medium">Installments Due Today</p>
                                <div className="flex items-end justify-between mt-2">
                                    <h3 className="text-2xl font-bold">42</h3>
                                    <span className="text-primary text-xs font-bold px-2 py-1 bg-primary/10 rounded-full">₵18,400 Total</span>
                                </div>
                            </div>
                            <div className="bg-[var(--white-to-slate-900)] p-5 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <p className="text-sm text-slate-500 font-medium">Ready for Dispatch</p>
                                <div className="flex items-end justify-between mt-2">
                                    <h3 className="text-2xl font-bold">08</h3>
                                    <span className="text-emerald-500 text-xs font-bold px-2 py-1 bg-[var(--emerald-50-900-20)] rounded-full">3 Riders Online</span>
                                </div>
                            </div>
                            <div className="bg-[var(--white-to-slate-900)] p-5 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <p className="text-sm text-slate-500 font-medium">Total Monthly Revenue</p>
                                <div className="flex items-end justify-between mt-2">
                                    <h3 className="text-2xl font-bold">₵245k</h3>
                                    <span className="text-emerald-500 text-xs font-bold px-2 py-1 bg-[var(--emerald-50-900-20)] rounded-full">↑ 12% vs last mo</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Main Table Section --> */}
                        <div className="bg-[var(--white-to-slate-900)] rounded-xl border border-[var(--slate-200-to-800)] shadow-sm overflow-hidden flex-1 flex flex-col">
                            <div className="p-4 border-b border-[var(--slate-200-to-800)] flex items-center justify-between">
                                <div className="flex items-center gap-1 bg-[var(--slate-100-to-800)] p-1 rounded-lg">
                                    <button className="px-4 py-1.5 text-sm font-semibold bg-[var(--white-to-slate-700)] shadow-sm rounded-md">All Orders</button>
                                    <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">Pending</button>
                                    <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">Shipped</button>
                                    <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">Delivered</button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-[var(--slate-200-to-slate-700)] rounded-lg hover:bg-slate-50">
                                        <span className="material-symbols-outlined text-lg">filter_list</span>
                                        Filter
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                        <span className="material-symbols-outlined text-lg">add</span>
                                        New Order
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="bg-[var(--slate-50-to-800-50)] text-slate-500 uppercase text-[11px] font-bold tracking-wider">
                                            <th className="px-6 py-3">Order ID</th>
                                            <th className="px-6 py-3">Customer</th>
                                            <th className="px-6 py-3">Phone Model</th>
                                            <th className="px-6 py-3">Installment Progress</th>
                                            <th className="px-6 py-3">Total Value</th>
                                            <th className="px-6 py-3">Status</th>
                                            <th className="px-6 py-3 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[var(--slate-100-to-800)]">
                                        {/* <!-- Row 1 --> */}
                                        <tr className="hover:bg-[var(--slate-50-to-800-50)] cursor-pointer transition-colors group bg-[var(--blue-50-50-to-primary-5)]">
                                            <td className="px-6 py-4 font-bold text-primary">#ORD-9921</td>
                                            <td className="px-6 py-4 font-medium">Kwame Mensah</td>
                                            <td className="px-6 py-4 text-[var(--slate-600-to-400)]">iPhone 15 Pro Max (256GB)</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 bg-[var(--slate-200-to-slate-700)] rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary" style={{ width: "50%" }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-600">3/6 Paid</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold">₵14,500.00</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs font-bold bg-[var(--amber-100-to-900-30)] text-[var(--amber-700-to-amber-500)] rounded-full">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-1.5 text-slate-400 hover:text-primary rounded-md">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 2 --> */}
                                        <tr className="hover:bg-[var(--slate-50-to-800-50)] cursor-pointer transition-colors">
                                            <td className="px-6 py-4 font-bold text-[var(--slate-900-to-100)]">#ORD-9918</td>
                                            <td className="px-6 py-4 font-medium">Abena Osei</td>
                                            <td className="px-6 py-4 text-[var(--slate-600-to-400)]">Samsung Galaxy S24 Ultra</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 bg-[var(--slate-200-to-slate-700)] rounded-full overflow-hidden">
                                                        <div className="h-full bg-emerald-500" style={{ width: "100%" }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-600">6/6 Paid</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold">₵16,200.00</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs font-bold bg-[var(--emerald-100-to-900-30)] text-[var(--emerald-700-to-500)] rounded-full">Delivered</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-1.5 text-slate-400 hover:text-primary rounded-md">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 3 --> */}
                                        <tr className="hover:bg-[var(--slate-50-to-800-50)] cursor-pointer transition-colors">
                                            <td className="px-6 py-4 font-bold text-[var(--slate-900-to-100)]">#ORD-9915</td>
                                            <td className="px-6 py-4 font-medium">Ekow Ansah</td>
                                            <td className="px-6 py-4 text-[var(--slate-600-to-400)]">Google Pixel 8 Pro</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 bg-[var(--slate-200-to-slate-700)] rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary" style={{ width: "16%" }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-600">1/6 Paid</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold">₵9,800.00</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs font-bold bg-[var(--blue-100-to-900-30)] text-[var(--blue-700-to-500)] rounded-full">Shipped</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-1.5 text-slate-400 hover:text-primary rounded-md">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 4 --> */}
                                        <tr className="hover:bg-[var(--slate-50-to-800-50)] cursor-pointer transition-colors">
                                            <td className="px-6 py-4 font-bold text-[var(--slate-900-to-100)]">#ORD-9910</td>
                                            <td className="px-6 py-4 font-medium">Ama Serwaa</td>
                                            <td className="px-6 py-4 text-[var(--slate-600-to-400)]">iPhone 15 (128GB)</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 bg-[var(--slate-200-to-slate-700)] rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary" style={{ width: "66%" }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-600">4/6 Paid</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold">₵8,500.00</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs font-bold bg-[var(--blue-100-to-900-30)] text-[var(--blue-700-to-500)] rounded-full">Shipped</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-1.5 text-slate-400 hover:text-primary rounded-md">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-auto p-4 border-t border-[var(--slate-200-to-800)] flex items-center justify-between">
                                <p className="text-xs text-slate-500 font-medium">Showing 1-10 of 256 orders</p>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 border border-[var(--slate-200-to-slate-700)] rounded hover:bg-slate-50 disabled:opacity-50" disabled={true}>
                                        <span className="material-symbols-outlined text-base">chevron_left</span>
                                    </button>
                                    <button className="p-2 border border-[var(--slate-200-to-slate-700)] rounded hover:bg-slate-50">
                                        <span className="material-symbols-outlined text-base">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Detail Side-Drawer --> */}
                    <aside className="w-[420px] bg-[var(--white-to-slate-900)] border border-[var(--slate-200-to-800)] rounded-xl shadow-lg flex flex-col h-[calc(100vh-112px)] sticky top-20 overflow-hidden">
                        {/* <!-- Header --> */}
                        <div className="p-6 border-b border-[var(--slate-200-to-800)]">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Order Details</span>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <h2 className="text-2xl font-black">#ORD-9921</h2>
                            <p className="text-slate-500 text-sm">Placed on Oct 24, 2023 · 10:45 AM</p>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {/* <!-- Customer Profile --> */}
                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">person</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Kwame Mensah</p>
                                        <p className="text-slate-500 text-sm">kwame.m@example.gh</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="bg-[var(--slate-50-to-slate-800)] p-3 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Phone</p>
                                        <p className="font-semibold">+233 24 555 0192</p>
                                    </div>
                                    <div className="bg-[var(--slate-50-to-slate-800)] p-3 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">GPS Address</p>
                                        <p className="font-semibold">GA-183-9920</p>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- Installment Tracker --> */}
                            <section>
                                <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-4">Payment Timeline</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold">Deposit Paid (₵4,500)</p>
                                            <p className="text-xs text-slate-500">Oct 24, 2023</p>
                                        </div>
                                        <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-2 rounded-full bg-emerald-500"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold">Month 1 (₵2,000)</p>
                                            <p className="text-xs text-slate-500">Nov 24, 2023</p>
                                        </div>
                                        <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-primary">Month 2 (₵2,000) - DUE</p>
                                            <p className="text-xs text-slate-500">Dec 24, 2023</p>
                                        </div>
                                        <button className="text-xs font-bold text-primary hover:underline">RE-SEND LINK</button>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- Logistics Control --> */}
                            <section className="space-y-4">
                                <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Logistics &amp; Actions</h3>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-2">Assign Delivery Rider</label>
                                    <select className="w-full bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm focus:ring-primary focus:border-primary">
                                        <option>Select a rider...</option>
                                        <option>Emmanuel (Motorcycle) - Nearby</option>
                                        <option>Suleiman (Van) - Active</option>
                                        <option>Bright (Motorcycle) - 5 mins away</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-2">Update Order Status</label>
                                    <select className="w-full bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm font-semibold text-amber-600 focus:ring-primary focus:border-primary">
                                        <option selected={false}>Pending Approval</option>
                                        <option>Confirmed &amp; Packaging</option>
                                        <option>Out for Delivery</option>
                                        <option>Delivered</option>
                                        <option className="text-red-500">Cancelled / Refunded</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-2">Internal Notes</label>
                                    <textarea className="w-full bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm placeholder:text-slate-400 min-h-[80px]" placeholder="Add a private note for other staff members..."></textarea>
                                </div>
                            </section>
                        </div>
                        {/* <!-- Sticky Action Footer --> */}
                        <div className="p-6 bg-[var(--slate-50-to-800-50)] border-t border-[var(--slate-200-to-800)] space-y-3">
                            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">save</span>
                                Save All Changes
                            </button>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-emerald-500 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors">
                                    <span className="material-symbols-outlined text-xl">chat</span>
                                    WhatsApp
                                </button>
                                <button className="flex-1 border border-[var(--slate-200-to-slate-700)] bg-[var(--white-to-slate-900)] text-[var(--slate-700-to-300)] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-xl">sms</span>
                                    SMS
                                </button>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    );
}