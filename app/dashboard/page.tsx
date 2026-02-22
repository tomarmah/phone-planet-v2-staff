import 'material-icons/iconfont/material-icons.css';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    return (
        <div className={`text-[var(--slate-800-to-slate-200)] min-h-screen ${styles.container}`}>
            <div className="flex">
                {/* <!-- Sidebar --> */}
                <aside className="w-64 min-h-screen bg-[var(--white-to-slate-900)] border-r border-primary/10 flex flex-col fixed inset-y-0">
                    <div className="p-6 border-b border-primary/10">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="material-icons text-white text-xl">smartphone</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[var(--slate-900-to-white)]">Staff<span className="text-primary">Portal</span></span>
                        </div>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                        <a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary font-medium rounded-lg" href="#">
                            <span className="material-icons">dashboard</span>
                            Dashboard
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-[var(--slate-50-to-slate-800)] transition-colors rounded-lg" href="#">
                            <span className="material-icons text-slate-400">shopping_cart</span>
                            Orders
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-[var(--slate-50-to-slate-800)] transition-colors rounded-lg" href="#">
                            <span className="material-icons text-slate-400">inventory_2</span>
                            Inventory
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-[var(--slate-50-to-slate-800)] transition-colors rounded-lg" href="#">
                            <span className="material-icons text-slate-400">campaign</span>
                            Campaigns
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-[var(--slate-50-to-slate-800)] transition-colors rounded-lg" href="#">
                            <span className="material-icons text-slate-400">people</span>
                            Customers
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-[var(--slate-50-to-slate-800)] transition-colors rounded-lg" href="#">
                            <span className="material-icons text-slate-400">bar_chart</span>
                            Reports
                        </a>
                    </nav>
                    <div className="p-4 border-t border-primary/10">
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-[var(--slate-50-to-slate-800)] transition-colors rounded-lg" href="#">
                            <span className="material-icons text-slate-400">settings</span>
                            Settings
                        </a>
                    </div>
                </aside>
                {/* <!-- Main Content Area --> */}
                <main className="ml-64 flex-1">
                    {/* <!-- Header --> */}
                    <header className="h-20 bg-[var(--white-80-to-slate-900-80)] backdrop-blur-md border-b border-primary/10 sticky top-0 z-10 px-8 flex items-center justify-between">
                        <div className="relative w-96">
                            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input className="w-full pl-10 pr-4 py-2 bg-[var(--slate-100-to-800)] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" placeholder="Search IMEI, Order ID or Customer..." type="text" />
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="relative text-slate-500 hover:text-primary transition-colors">
                                <span className="material-icons">notifications</span>
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-[var(--white-to-slate-900)] rounded-full"></span>
                            </button>
                            <div className="flex items-center gap-3 pl-6 border-l border-[var(--slate-200-to-800)]">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-[var(--slate-900-to-white)] leading-none">Kwame Mensah</p>
                                    <p className="text-xs text-slate-500 mt-1">Senior Staff</p>
                                </div>
                                <img className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover" data-alt="Staff profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs82umdyLPJj69PRmkriNn1dkpKJpD547xatINkJnNXWsmA6cwM7OS7upfexsuXwBkWUBE6fO2Serpczs7nyhVO1l6P43sDyGvXyMMLMJGYglMPux9VYcROcoTRPR_Zx2X3ypvY_1WkUkZUYGpZ23GHCGlcpQpTIyrh8MTfM16FSQ4k60LUqcYyExH4mkmMC7Lm12uwFkRy7SJUYfkIkwbSYIxwetTOA-d-CVKtThf611EdH8SL7wRLrp_FxYtBc8ovhAKlQJ3HvdG" />
                            </div>
                        </div>
                    </header>
                    {/* <!-- Dashboard Content --> */}
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-[var(--slate-900-to-white)]">Dashboard Overview</h1>
                                <p className="text-slate-500">Welcome back. Here is what's happening today.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-[var(--white-to-slate-900)] border border-[var(--slate-200-to-800)] rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                                    <span className="material-icons text-sm">calendar_today</span>
                                    Oct 24, 2023
                                </button>
                                <button className="px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-semibold hover:brightness-110 transition-all flex items-center gap-2">
                                    <span className="material-icons text-sm font-bold">add</span>
                                    New Order
                                </button>
                            </div>
                        </div>
                        {/* <!-- Summary Cards --> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* <!-- Card 1 --> */}
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-lg border border-primary/10 shadow-sm relative overflow-hidden">
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium">Pending Orders</p>
                                        <h3 className="text-3xl font-bold mt-2 text-[var(--slate-900-to-white)]">24</h3>
                                        <p className="text-emerald-500 text-xs mt-2 flex items-center gap-1 font-semibold">
                                            <span className="material-icons text-xs">arrow_upward</span>
                                            +12% from yesterday
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-primary">hourglass_empty</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"></div>
                            </div>
                            {/* <!-- Card 2 --> */}
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-lg border border-primary/10 shadow-sm relative overflow-hidden">
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium">New Enquiries</p>
                                        <h3 className="text-3xl font-bold mt-2 text-[var(--slate-900-to-white)]">158</h3>
                                        <p className="text-slate-500 text-xs mt-2 flex items-center gap-1">
                                            <span className="material-icons text-xs">trending_flat</span>
                                            Steady traffic
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-blue-500">question_answer</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/5 rounded-full"></div>
                            </div>
                            {/* <!-- Card 3 --> */}
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-lg border border-primary/10 shadow-sm relative overflow-hidden">
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium">Low Stock Alerts</p>
                                        <h3 className="text-3xl font-bold mt-2 text-[var(--slate-900-to-white)]">7</h3>
                                        <p className="text-amber-500 text-xs mt-2 flex items-center gap-1 font-semibold">
                                            <span className="material-icons text-xs">warning</span>
                                            Requires attention
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-amber-500">inventory</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/5 rounded-full"></div>
                            </div>
                        </div>
                        {/* <!-- Recent Activity Section --> */}
                        <div className="bg-[var(--white-to-slate-900)] rounded-lg border border-primary/10 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-[var(--slate-100-to-800)] flex items-center justify-between">
                                <h2 className="text-lg font-bold text-[var(--slate-900-to-white)]">Recent Activity</h2>
                                <a className="text-primary text-sm font-semibold hover:underline" href="#">View All Records</a>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[var(--slate-50-800-50)]">
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Order ID</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer Name</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Device Model</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Payment Plan</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[var(--slate-100-to-800)]">
                                        {/* <!-- Row 1 --> */}
                                        <tr className="hover:bg-[var(--slate-50-800-50)] transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="font-mono text-xs font-semibold">#ORD-2023-0492</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[var(--slate-200-to-slate-700)] flex items-center justify-center text-xs font-bold">EA</div>
                                                    <span className="text-sm font-medium text-[var(--slate-900-to-white)]">Emmanuel Appiah</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-[var(--slate-900-to-white)]">iPhone 15 Pro Max</p>
                                                <p className="text-xs text-slate-500">256GB / Natural Titanium</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="w-32">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">4 of 6 months</span>
                                                        <span className="text-[10px] font-bold text-primary">66%</span>
                                                    </div>
                                                    <div className="w-full bg-[var(--slate-100-to-800)] h-1.5 rounded-full">
                                                        <div className="bg-primary h-full rounded-full" style={{ width: "66%" }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-primary"><span className="material-icons">more_horiz</span></button>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 2 --> */}
                                        <tr className="hover:bg-[var(--slate-50-to-800-50)] transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="font-mono text-xs font-semibold">#ORD-2023-0498</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[var(--slate-200-to-slate-700)] flex items-center justify-center text-xs font-bold">SO</div>
                                                    <span className="text-sm font-medium text-[var(--slate-900-to-white)]">Sarah Owusu</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-[var(--slate-900-to-white)]">Samsung Galaxy S24 Ultra</p>
                                                <p className="text-xs text-slate-500">512GB / Titanium Black</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="w-32">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">0 of 12 months</span>
                                                        <span className="text-[10px] font-bold text-amber-500">0%</span>
                                                    </div>
                                                    <div className="w-full bg-[var(--slate-100-to-800)] h-1.5 rounded-full">
                                                        <div className="bg-amber-500 h-full rounded-full" style={{ width: "5%" }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">Awaiting Deposit</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-primary"><span className="material-icons">more_horiz</span></button>
                                            </td>
                                        </tr>
                                        {/* <!-- Row 3 --> */}
                                        <tr className="hover:bg-[var(--slate-50-to-800-50)] transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="font-mono text-xs font-semibold">#ORD-2023-0501</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[var(--slate-200-to-slate-700)] flex items-center justify-center text-xs font-bold">KB</div>
                                                    <span className="text-sm font-medium text-[var(--slate-900-to-white)]">Kofi Boateng</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-[var(--slate-900-to-white)]">Google Pixel 8 Pro</p>
                                                <p className="text-xs text-slate-500">128GB / Bay Blue</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="w-32">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">1 of 3 months</span>
                                                        <span className="text-[10px] font-bold text-red-500">33%</span>
                                                    </div>
                                                    <div className="w-full bg-[var(--slate-100-to-800)] h-1.5 rounded-full">
                                                        <div className="bg-red-500 h-full rounded-full" style={{ width: "33%" }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-red-500/10 text-red-500 border border-red-500/20">Overdue</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-primary"><span className="material-icons">more_horiz</span></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- Secondary Row --> */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                            {/* <!-- Inventory Management Info --> */}
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-lg border border-primary/10 shadow-sm">
                                <h2 className="text-lg font-bold text-[var(--slate-900-to-white)] mb-6">Inventory Trends</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <img className="w-12 h-12 rounded-lg object-cover" data-alt="iPhone 15 Pro Max product photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCAw3RX3QpY7CBgt9dZiOUL7Wikq6YYZYihNwNCusZyX-yfSY-MBEkDe6Dzb1HR8e8k07Vqz9skxdmdz4-4Ug9ereqV8f5rTbu2Vijl4r9jKxNFY14Z52OtFlqTavS3YZtuHmnxRx0Fg0g85eeCi-V4gpIUmqLmR40PIDJQhLxURvA570tQebErjPB34lXdYQbvMN2weVWmZL3BeixLU6D8RfZ0DjSxcaYYlTIG5Ipbtvlk0ieVdhpCt1PFn2-HkdxmXuqZFu-VGom" />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h4 className="text-sm font-semibold text-[var(--slate-900-to-white)]">iPhone 15 Pro Max</h4>
                                                <span className="text-sm font-bold text-amber-500">2 Left</span>
                                            </div>
                                            <p className="text-xs text-slate-500">High demand • Fast mover</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img className="w-12 h-12 rounded-lg object-cover" data-alt="Samsung Galaxy S24 product photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZdXSEQjXNHW18fia21q-8SMGPS0H2fR9F2TPDNDn9BaiAta7lJgLsSOmj52dEtp4MFHGRU5B1MtOgfUOPMLcUn1zMiY_sy94Mt8U1p9GleFw82-2sgN89Rb1ut9NrUg1SQV5fmJiSSgD4aGmxFmz-sic2g6y6cWsLJQxMu1OCeptCAwYVgirdmj0rGk4bQIIHbK_V429WQvT9drucs1cAwf9-pEswpGUopsyqOf9xqj_3bJWSIWqibYbIt9Qp35dIaQGB0-pmjyLs" />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h4 className="text-sm font-semibold text-[var(--slate-900-to-white)]">Samsung Galaxy S24 Ultra</h4>
                                                <span className="text-sm font-bold text-emerald-500">14 Left</span>
                                            </div>
                                            <p className="text-xs text-slate-500">Restocked 2 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Quick Tools --> */}
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-lg border border-primary/10 shadow-sm">
                                <h2 className="text-lg font-bold text-[var(--slate-900-to-white)] mb-6">Staff Quick Actions</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 bg-[var(--slate-50-to-slate-800)] hover:bg-primary/10 transition-colors rounded-lg text-left group">
                                        <span className="material-icons text-primary mb-2">qr_code_scanner</span>
                                        <h4 className="text-sm font-bold text-[var(--slate-900-to-white)] group-hover:text-primary">Scan IMEI</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">In-store handoff</p>
                                    </button>
                                    <button className="p-4 bg-[var(--slate-50-to-slate-800)] hover:bg-primary/10 transition-colors rounded-lg text-left group">
                                        <span className="material-icons text-primary mb-2">request_quote</span>
                                        <h4 className="text-sm font-bold text-[var(--slate-900-to-white)] group-hover:text-primary">Check Eligibility</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">Credit assessment</p>
                                    </button>
                                    <button className="p-4 bg-[var(--slate-50-to-slate-800)] hover:bg-primary/10 transition-colors rounded-lg text-left group">
                                        <span className="material-icons text-primary mb-2">receipt_long</span>
                                        <h4 className="text-sm font-bold text-[var(--slate-900-to-white)] group-hover:text-primary">Print Ledger</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">Financial records</p>
                                    </button>
                                    <button className="p-4 bg-[var(--slate-50-to-slate-800)] hover:bg-primary/10 transition-colors rounded-lg text-left group">
                                        <span className="material-icons text-primary mb-2">support_agent</span>
                                        <h4 className="text-sm font-bold text-[var(--slate-900-to-white)] group-hover:text-primary">Escalate Query</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">Management approval</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}