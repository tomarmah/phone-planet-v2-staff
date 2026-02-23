import styles from './inventory-mgt.module.css';

export default function InventoryMgtPage() {
    return (
        <>
            <div className={`bg-[var(--background)] text-[var(--slate-900-to-100)] min-h-screen ${styles.container}`}>
                <div className="flex h-screen overflow-hidden">
                    {/* <!-- Sidebar Navigation --> */}
                    <aside className="w-64 flex-shrink-0 bg-[var(--white-to-slate-900)] border-r border-[var(--slate-200-to-800)] flex flex-col">
                        <div className="p-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">smartphone</span>
                                </div>
                                <div>
                                    <h1 className="text-sm font-bold leading-tight">Premium Phones GH</h1>
                                    <p className="text-xs text-slate-500 font-medium">Admin Portal</p>
                                </div>
                            </div>
                        </div>
                        <nav className="flex-1 px-4 space-y-1">
                            <a className="flex items-center gap-3 px-3 py-2 text-[var(--slate-600-to-400)] hover:bg-[var(--slate-50-to-slate-800)] rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                                <span className="text-sm font-medium">Inventory</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-[var(--slate-600-to-400)] hover:bg-[var(--slate-50-to-slate-800)] rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="text-sm font-medium">Sales</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-[var(--slate-600-to-400)] hover:bg-[var(--slate-50-to-slate-800)] rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">payments</span>
                                <span className="text-sm font-medium">Installments</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-[var(--slate-600-to-400)] hover:bg-[var(--slate-50-to-slate-800)] rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">group</span>
                                <span className="text-sm font-medium">Customers</span>
                            </a>
                        </nav>
                        <div className="p-4 mt-auto border-t border-[var(--slate-200-to-800)]">
                            <a className="flex items-center gap-3 px-3 py-2 text-[var(--slate-600-to-400)] hover:bg-[var(--slate-50-to-slate-800)] rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">settings</span>
                                <span className="text-sm font-medium">Settings</span>
                            </a>
                            <div className="flex items-center gap-3 px-3 py-4 mt-2">
                                <div className="size-8 rounded-full bg-[var(--slate-200-to-slate-700)] overflow-hidden">
                                    <img alt="User avatar" data-alt="Portrait of a smiling staff member avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOuW8oTFeYT0JMB0kIHFAzDSLsUXCgoizZsXFJSiRDZR7VUIM_-rlMJ0Z5cJmo2yAOmvNg9JLWaryhAiiqivpL3NpCxbk10zS1T7IDiXbYDJ5z_6aDkL3hlk1Fpqo42NUaouQioU08bFQoyCArHjB23oRj4GZ81Lill8zn12NwVIA3NvoxUTcidzAQ0fik5PBKIWPUofQe23tjzUeLJhW7iUeJNFRmn0JgbLKoHLCsb9y9vwsfoNgD4QM-Xq4-tRMjDM32GXtZlZHJ" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold truncate">Kwame Mensah</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Inventory Manager</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* <!-- Main Content --> */}
                    <main className="flex-1 overflow-y-auto bg-[var(--background] scroll-smooth">
                        <header className="sticky top-0 z-10 bg-[var(--white-80-to-slate-900-80)] backdrop-blur-md border-bottom border-[var(--slate-200-to-800)] px-8 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">Inventory Management</h2>
                                <p className="text-xs text-slate-500">Manage premium device stock and installment plans</p>
                            </div>
                            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95">
                                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                Add New Product
                            </button>
                        </header>
                        <div className="p-8 max-w-7xl mx-auto space-y-8">
                            {/* <!-- Quick Stats --> */}
                            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-500 uppercase">Total Inventory Value</span>
                                        <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="text-2xl font-bold tracking-tight">GHS 1,250,400</h3>
                                        <span className="text-xs font-medium text-emerald-600 bg-[var(--emerald-50-900-20)] px-1.5 py-0.5 rounded">+5.2%</span>
                                    </div>
                                </div>
                                <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-500 uppercase">Low Stock Alerts</span>
                                        <span className="material-symbols-outlined text-amber-500">warning</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="text-2xl font-bold tracking-tight">12 Units</h3>
                                        <span className="text-xs font-medium text-rose-600 bg-[var(--rose-50-to-900-20)] px-1.5 py-0.5 rounded">Critical</span>
                                    </div>
                                </div>
                                <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-500 uppercase">Active Installment Plans</span>
                                        <span className="material-symbols-outlined text-primary">event_repeat</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="text-2xl font-bold tracking-tight">342 Plans</h3>
                                        <span className="text-xs font-medium text-slate-500">Across all models</span>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- Inventory Table Section --> */}
                            <div className="bg-[var(--white-to-slate-900)] rounded-xl border border-[var(--slate-200-to-800)] shadow-sm overflow-hidden">
                                {/* <!-- Search and Filters --> */}
                                <div className="p-4 border-b border-[var(--slate-200-to-800)] flex flex-wrap items-center gap-4">
                                    <div className="flex-1 min-w-[300px] relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                                        <input className="w-full pl-10 pr-4 py-2 bg-[var(--slate-50-to-slate-800)] border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search by Model, SKU, or IMEI..." type="text" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-2 px-3 py-2 bg-[var(--slate-50-to-slate-800)] text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">filter_alt</span>
                                            Brand
                                        </button>
                                        <button className="flex items-center gap-2 px-3 py-2 bg-[var(--slate-50-to-slate-800)] text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">sort</span>
                                            Sort by Value
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- Table --> */}
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-[var(--slate-50-to-800-50)]">
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Product Model</th>
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">In Stock</th>
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Retail Price</th>
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Min. Deposit</th>
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Installment</th>
                                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[var(--slate-100-to-800)]">
                                            {/* <!-- Item 1 --> */}
                                            <tr className="hover:bg-[var(--slate-50-50-to-800-50)] transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-12 rounded-lg bg-[var(--slate-100-to-800)] flex items-center justify-center border border-[var(--slate-200-to-slate-700)] overflow-hidden">
                                                            <img alt="iPhone 15 Pro" className="w-full h-full object-cover" data-alt="Close up of a Titanium Blue iPhone 15 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZJRawQgpyswuaD_uYeeupeU2Fehk-JG00znjn8CKReghOtCrj_meW0q1tB0f49arkFLTEuamIZy3bGNOlTA1D9WBM_m-NolHiywzBgAC2-CYK4rVQc1fsZ-fKIZDXMccL9bIKhe-Aq6vgweFeX4oAfjb9opLJzz-Ntt11AqKB-ZqKqKHvtPqi2eidS9pxbsyQQwX38_YtfFNXc4T6241bTTbGjImiVNLGrrdm02XmpMbwrCotVDsmn9qaZWO-BM31l3mEgbSGRPXz" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold">iPhone 15 Pro Max</div>
                                                            <div className="text-xs text-slate-500">Natural Titanium, 256GB</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-mono text-slate-500">IPH-15PM-NT-256</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="size-2 rounded-full bg-emerald-500"></span>
                                                        <span className="text-sm font-bold">24 Units</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold">GHS 18,500</td>
                                                <td className="px-6 py-4 text-sm text-[var(--slate-600-to-400)] font-medium">GHS 4,500</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-semibold text-primary">GHS 1,200/mo</div>
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase">12 Months</div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!-- Item 2 --> */}
                                            <tr className="hover:bg-[var(--slate-50-50-to-800-50)] transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-12 rounded-lg bg-[var(--slate-100-to-800)] flex items-center justify-center border border-[var(--slate-200-to-slate-700)] overflow-hidden">
                                                            <img alt="S24 Ultra" className="w-full h-full object-cover" data-alt="High quality render of a Samsung Galaxy S24 Ultra in Gray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5_U-gGd8IUhZpY-Dxqk-iG1_jsrcOjKFxqTXHnBnsbWG36zrT0o6mvzZGwOjrRylExpOc9QNVKaQM0IjW8CmJ6D7u5E-sQ8PqIm8ku8RWjDD9COeGQpiOxzYt4NCCvMUSwHcGY13XOUm0g1m-YsHeruIJTINOMnmspwR3TIgCg7hVoY9wk5BjOj2F1ISDwityS1Y-2rnuIxb5RnxSqVDTTjlHrlSUzrYX8uryT_6R21SUJssiGkbjLmK8PRE7Y8IjYRXeUawzGJ0" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold">Samsung Galaxy S24 Ultra</div>
                                                            <div className="text-xs text-slate-500">Titanium Gray, 512GB</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-mono text-slate-500">SAM-S24U-TG-512</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="size-2 rounded-full bg-amber-500 animate-pulse"></span>
                                                        <span className="text-sm font-bold">3 Units</span>
                                                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1 rounded">Low</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold">GHS 16,200</td>
                                                <td className="px-6 py-4 text-sm text-[var(--slate-600-to-400)] font-medium">GHS 3,500</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-semibold text-primary">GHS 1,100/mo</div>
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase">12 Months</div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!-- Item 3 --> */}
                                            <tr className="hover:bg-[var(--slate-50-50-to-800-50)] transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-12 rounded-lg bg-[var(--slate-100-to-800)] flex items-center justify-center border border-[var(--slate-200-to-slate-700)] overflow-hidden">
                                                            <img alt="iPhone 13" className="w-full h-full object-cover" data-alt="Product shot of an iPhone 13 in Starlight color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwW4cusAna85HKN1L2WA65zR3lez59iHCP8N68IIawjrgH4AsCjoursDGagQCVcwt4DMF0EEWhq5pKJ1CIIlKnA0M9XcD-ORsVET0TYGqvuy-Xy47WsOwhmd1WylKxs9clQKszcHsYd1a2N9xehv5Qeq5xvgqPSzX0BkPJ9lodayTVRiTneAp2Q_WYkmLrAUc43NWXwGh7YBJMtKubH9ZxAJKSeEn4JOzont3ca6_FDuyhCBFp7q8KvDwCU3dsV1gndkvp-cT9Z3Mh" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold">iPhone 13</div>
                                                            <div className="text-xs text-slate-500">Starlight, 128GB</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-mono text-slate-500">IPH-13-SL-128</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="size-2 rounded-full bg-emerald-500"></span>
                                                        <span className="text-sm font-bold">12 Units</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold">GHS 8,400</td>
                                                <td className="px-6 py-4 text-sm text-[var(--slate-600-to-400)] font-medium">GHS 1,500</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-semibold text-primary">GHS 650/mo</div>
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase">12 Months</div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!-- Item 4 --> */}
                                            <tr className="hover:bg-[var(--slate-50-50-to-800-50)] transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-12 rounded-lg bg-[var(--slate-100-to-800)] flex items-center justify-center border border-[var(--slate-200-to-slate-700)] overflow-hidden">
                                                            <img alt="Pixel 8 Pro" className="w-full h-full object-cover" data-alt="Close up of a Google Pixel 8 Pro in Porcelain color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0TqjY6ClvMRNeKhNs2YOisltml8hCrECQ37Zt7UJ3CorNepla6ULf73JbdssJNg96d7j4qg3Oc1-LUxkdYCAzzVWNQIlhZIqfkYNejZbaTRzdW0UkIGLtQ5SGuPStFZ_SMrQQa64qcSpk4u1mrK-wpUJtYh48hW2DvnSVzdLJ-jMyVPIVkxj7IIMUFbTxKl7Z5N1984J1xkAtsV5pMVwmktdkbvSo5XLX0p6SXGuK26t96SYy9nc_AmtBxzGqmPe6N6Dv8sxIH64C" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold">Google Pixel 8 Pro</div>
                                                            <div className="text-xs text-slate-500">Porcelain, 128GB</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-mono text-slate-500">PIX-8P-PC-128</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="size-2 rounded-full bg-rose-500"></span>
                                                        <span className="text-sm font-bold">0 Units</span>
                                                        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1 rounded uppercase">Out of Stock</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold">GHS 12,200</td>
                                                <td className="px-6 py-4 text-sm text-[var(--slate-600-to-400)] font-medium">GHS 2,800</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-semibold text-primary">GHS 850/mo</div>
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase">12 Months</div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                                        </button>
                                                        <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- Pagination --> */}
                                <div className="p-4 bg-[var(--slate-50-to-800-50)] border-t border-[var(--slate-200-to-800)] flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500">Showing 1 to 4 of 124 results</span>
                                    <div className="flex items-center gap-1">
                                        <button className="p-1.5 rounded-md hover:bg-[var(--slate-200-to-slate-700)] disabled:opacity-30" disabled={true}>
                                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                        </button>
                                        <button className="size-8 rounded-md bg-primary text-white text-xs font-bold">1</button>
                                        <button className="size-8 rounded-md hover:bg-[var(--slate-200-to-slate-700)] text-xs font-medium">2</button>
                                        <button className="size-8 rounded-md hover:bg-[var(--slate-200-to-slate-700)] text-xs font-medium">3</button>
                                        <button className="p-1.5 rounded-md hover:bg-[var(--slate-200-to-slate-700)]">
                                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Add New Product Form Section (Simulated Modal Content) --> */}
                            <div className="bg-[var(--white-to-slate-900)] rounded-xl border border-[var(--slate-200-to-800)] shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-[var(--slate-200-to-800)]">
                                    <h3 className="text-lg font-bold">Add New Product Details</h3>
                                    <p className="text-xs text-slate-500">Populate technical specifications and installment plan logic.</p>
                                </div>
                                <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest border-l-4 border-primary pl-4">Model Specifications</h4>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-slate-500">Model Name</label>
                                            <input className="w-full px-4 py-2.5 bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm focus:ring-primary/20" placeholder="e.g. iPhone 15 Pro Max" type="text" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase text-slate-500">Brand</label>
                                                <select className="w-full px-4 py-2.5 bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm focus:ring-primary/20">
                                                    <option>Apple</option>
                                                    <option>Samsung</option>
                                                    <option>Google</option>
                                                    <option>Xiaomi</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase text-slate-500">SKU Code</label>
                                                <input className="w-full px-4 py-2.5 bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm font-mono focus:ring-primary/20" placeholder="AUTO-GENERATE" type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-slate-500 flex items-center justify-between">
                                                <span>Serialized IMEI Units</span>
                                                <span className="text-[10px] text-slate-400 lowercase font-normal">One per line</span>
                                            </label>
                                            <textarea className="w-full px-4 py-2.5 bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm font-mono focus:ring-primary/20" placeholder="Enter each device IMEI number..." rows={4}></textarea>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest border-l-4 border-primary pl-4">Installment Configuration</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase text-slate-500">Full Retail Price (GHS)</label>
                                                <input className="w-full px-4 py-2.5 bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm focus:ring-primary/20" placeholder="12500" type="number" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase text-slate-500">Minimum Deposit (GHS)</label>
                                                <input className="w-full px-4 py-2.5 bg-[var(--slate-50-to-slate-800)] border-[var(--slate-200-to-slate-700)] rounded-lg text-sm focus:ring-primary/20" placeholder="3000" type="number" />
                                            </div>
                                        </div>
                                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                                            <div className="flex items-center justify-between mb-4">
                                                <label className="text-xs font-bold uppercase text-primary">Monthly Plan Calculation</label>
                                                <span className="material-symbols-outlined text-primary text-[20px]">calculate</span>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-600 font-medium">Remaining Balance:</span>
                                                    <span className="font-bold">GHS 9,500</span>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase">Duration</span>
                                                        <select className="w-full px-2 py-1.5 bg-[var(--white-to-slate-700)] border-[var(--slate-200-to-slate-600)] rounded text-xs">
                                                            <option>6 Months</option>
                                                            <option selected={true}>12 Months</option>
                                                            <option>24 Months</option>
                                                        </select>
                                                    </div>
                                                    <div className="space-y-1 text-right">
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase">Monthly Pay</span>
                                                        <div className="text-lg font-black text-primary">GHS 791.66</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 pt-2">
                                            <button className="flex-1 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-all shadow-md" type="submit">
                                                Confirm &amp; Save Product
                                            </button>
                                            <button className="px-6 py-3 bg-[var(--slate-100-to-800)] font-bold rounded-lg hover:bg-slate-200 transition-all" type="button">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Footer for auditing --> */}
                        <footer className="p-8 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em]">
                            Inventory Audit Log Updated: 2 mins ago • System Version 4.2.1-GH
                        </footer>
                    </main>
                </div>
            </div>
        </>
    );
}