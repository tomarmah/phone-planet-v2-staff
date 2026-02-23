import styles from './campaign-lead-mgt.module.css';

export default function LeadMgtPage() {
    return (
        <>
            <div className={`bg-[var(--background)] text-[var(--slate-900-to-100)] min-h-screen ${styles.container}`}>
                <div className="relative flex h-full min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                    {/* <!-- Top Navigation Bar --> */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--slate-200-to-800)] bg-[var(--white-to-slate-900)] px-6 py-3 sticky top-0 z-50">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3 text-primary">
                                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <h2 className="text-[var(--slate-900-to-white)] text-lg font-bold leading-tight tracking-tight">FonePay Admin</h2>
                            </div>
                            <div className="hidden md:flex items-center gap-6">
                                <a className="text-[var(--slate-600-to-300)] text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
                                <a className="text-[var(--slate-600-to-300)] text-sm font-medium hover:text-primary transition-colors" href="#">Inventory</a>
                                <a className="text-primary text-sm font-semibold border-b-2 border-primary py-4 -mb-4" href="#">Campaigns</a>
                                <a className="text-[var(--slate-600-to-300)] text-sm font-medium hover:text-primary transition-colors" href="#">Leads</a>
                                <a className="text-[var(--slate-600-to-300)] text-sm font-medium hover:text-primary transition-colors" href="#">Staff</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="hidden lg:flex items-center relative min-w-64">
                                <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
                                <input className="w-full h-10 pl-10 pr-4 rounded-xl border-none bg-[var(--slate-100-to-800)] text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search campaigns..." type="text" />
                            </label>
                            <button className="p-2 rounded-xl bg-[var(--slate-100-to-800)] text-[var(--slate-600-to-300)] hover:bg-slate-200">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="User profile avatar of a staff member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1dKxHS7aYxJhf7TBUXleMQfn9RLSQNA0jGzpTbI-k_9HwZYN9jsqJipjNKWNlpb6mHQgetkFt91quyaN-Yiwxux1aJiDHK6O2QRsDZmc-Vv94prkajnJPHv_onOFDL4S2IOT3MZKfOROaCkostBsdSQLZhZjTpNn8thYYetJIDBwO7DcO6wYqg2fJ32zdwL6ZeL5DohqUxbajFKpjy0ZkQOz7r0Q2r-PLlPbTDukz9dP-FmvEaAFbO71ssFPdINLFeoFeG_R8i9JM" />
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
                        {/* <!-- Page Header --> */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl font-black text-[var(--slate-900-to-white)] tracking-tight">Campaign &amp; Lead Management</h1>
                                <p className="text-[var(--slate-500-to-slate-400)] mt-1">Design, deploy and analyze installment plan marketing across Ghana.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--white-to-slate-800)] border border-[var(--slate-200-to-slate-700)] text-[var(--slate-700-to-200)] text-sm font-semibold shadow-sm hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-[20px]">file_download</span>
                                    Export Waitlist CSV
                                </button>
                                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    New Campaign
                                </button>
                            </div>
                        </div>
                        {/* <!-- Stats Overview --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[var(--slate-500-to-slate-400)] text-sm font-medium">Active Campaigns</span>
                                    <span className="material-symbols-outlined text-primary">campaign</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-[var(--slate-900-to-white)]">14</span>
                                    <span className="text-xs font-bold text-emerald-500 flex items-center">
                                        <span className="material-symbols-outlined text-xs">trending_up</span> +2
                                    </span>
                                </div>
                            </div>
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[var(--slate-500-to-slate-400)] text-sm font-medium">Leads Captured (24h)</span>
                                    <span className="material-symbols-outlined text-orange-500">group_add</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-[var(--slate-900-to-white)]">128</span>
                                    <span className="text-xs font-bold text-emerald-500 flex items-center">
                                        <span className="material-symbols-outlined text-xs">trending_up</span> 18%
                                    </span>
                                </div>
                            </div>
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[var(--slate-500-to-slate-400)] text-sm font-medium">Conversion Rate</span>
                                    <span className="material-symbols-outlined text-indigo-500">ads_click</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-[var(--slate-900-to-white)]">4.2%</span>
                                    <span className="text-xs font-bold text-rose-500 flex items-center">
                                        <span className="material-symbols-outlined text-xs">trending_down</span> 0.5%
                                    </span>
                                </div>
                            </div>
                            <div className="bg-[var(--white-to-slate-900)] p-6 rounded-xl border border-[var(--slate-200-to-800)] shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[var(--slate-500-to-slate-400)] text-sm font-medium">Waitlist Total</span>
                                    <span className="material-symbols-outlined text-teal-500">list_alt</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-[var(--slate-900-to-white)]">2,405</span>
                                    <span className="text-xs font-bold text-slate-400">Region: GH</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* <!-- Left: Table Section --> */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-[var(--white-to-slate-900)] rounded-xl border border-[var(--slate-200-to-800)] shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-[var(--slate-200-to-800)] flex items-center justify-between">
                                        <h3 className="font-bold text-[var(--slate-900-to-white)]">Recent Campaigns</h3>
                                        <div className="flex gap-2">
                                            <button className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--slate-100-to-800)] text-[var(--slate-600-to-400)]">All</button>
                                            <button className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Active</button>
                                            <button className="text-xs font-semibold px-3 py-1 rounded-full text-slate-500">Drafts</button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-[var(--slate-50-to-800-50)]">
                                                <tr>
                                                    <th className="px-6 py-3 text-xs font-bold text-[var(--slate-500-to-slate-400)] uppercase tracking-wider">Campaign</th>
                                                    <th className="px-6 py-3 text-xs font-bold text-[var(--slate-500-to-slate-400)] uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-3 text-xs font-bold text-[var(--slate-500-to-slate-400)] uppercase tracking-wider">Engagement</th>
                                                    <th className="px-6 py-3 text-xs font-bold text-[var(--slate-500-to-slate-400)] uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-[var(--slate-100-to-800)]">
                                                <tr className="hover:bg-[var(--slate-50-50-to-800-30)] transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-10 w-16 rounded bg-[var(--slate-200-to-slate-700)] overflow-hidden flex-shrink-0">
                                                                <img className="w-full h-full object-cover" data-alt="iPhone 15 Pro promotional banner layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4daeIj2l3LOQC4JO9FRuzKmwjjHOkodLz6nJP5649SFHLlMIIVQBPLRROv0L5lzAKKC6WLB1RHvfeM70sVGo4_9zgM-FoNlGWJaKuD4YvkCG4uyxljzprQXMhCRYMMZdv1bN4B1n0_9mLNDC-YmNIu2hxGlSY_csbQvuoXwAp-QURFuFih7PGOey9nYjK6zk5RkMeeUBD_qZ5FQtpWly7-8Fpqw9ImGhw3Y7tFKIyWQ5hIJ7a17WhCO9shxhJlCwy4m4aEv5ekXcJ" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-[var(--slate-900-to-white)] leading-tight">iPhone 15 Launch</p>
                                                                <p className="text-xs text-slate-500 leading-tight">Start: 12 Oct 2023</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--emerald-100-to-900-30)] text-[var(--emerald-700-to-400)] uppercase">
                                                            <span className="size-1.5 rounded-full bg-emerald-500"></span> Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-bold text-[var(--slate-700-to-300)]">1.2k Leads</span>
                                                            <span className="text-[10px] text-slate-500 uppercase font-medium">8.4% CTR</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <button className="p-1.5 hover:bg-[var(--slate-200-to-slate-700)] rounded-lg text-slate-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                                            </button>
                                                            <button className="p-1.5 hover:bg-[var(--slate-200-to-slate-700)] rounded-lg text-slate-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-[var(--slate-50-50-to-800-30)] transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-10 w-16 rounded bg-[var(--slate-200-to-slate-700)] overflow-hidden flex-shrink-0">
                                                                <img className="w-full h-full object-cover" data-alt="Samsung S24 Ultra installment plan advertisement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiqE3eQyq0QoKqsxKEXP0PODNkXrlhIGSpNEVXf0sneR-1gMMWFv4K9u0ZkGBnkd1odpRBpe2RUAWl8aVU2qg0eDXwDnWCrDvp74Z8hBvDhTt9wiSLJs8dPwlYWoWJpaU5s-ge7sI_jsNOpTq7WgT8EENeX4E5fZQbv_5cWz3nxM0Leui_-KmMILRg_Q7_Vza7KeG4qkoiVXv3qqLkygHmtRYZCg0psKU72QCNBHY3Pjq6lAZzeiuEbFKlUfulbeoIiFkgB8QA9Quw" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-[var(--slate-900-to-white)] leading-tight">S24 Ultra Early Bird</p>
                                                                <p className="text-xs text-slate-500 leading-tight">Start: 05 Nov 2023</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--slate-100-to-800)] text-[var(--slate-500-to-slate-400)] uppercase">
                                                            <span className="size-1.5 rounded-full bg-slate-400"></span> Inactive
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-bold text-[var(--slate-700-to-300)]">450 Leads</span>
                                                            <span className="text-[10px] text-slate-500 uppercase font-medium">3.1% CTR</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <button className="p-1.5 hover:bg-[var(--slate-200-to-slate-700)] rounded-lg text-slate-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                                            </button>
                                                            <button className="p-1.5 hover:bg-[var(--slate-200-to-slate-700)] rounded-lg text-slate-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-[var(--slate-50-50-to-800-30)] transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-10 w-16 rounded bg-[var(--slate-200-to-slate-700)] overflow-hidden flex-shrink-0">
                                                                <img className="w-full h-full object-cover" data-alt="Back to school smartphone discount campaign" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjlZAWPC93Zdy4M3KA5ZySHvbsAN7GeetQHRsHhvZzh6UJGrZxvLpGzkZj4vLz5uPwGIiMTc9R-YdHSqkOgsk6PUscqxCp5hAqn2VqQujZ5dS6mQ1jJuGLuRiM-mwDsGNlsX12Pn-9EbpI5WHtxtYcQblWgzdeLkuKLJT4K25nvrUCog55i_Q26hSBlxOjQkKTw4hebpq-GoXU_GpAeg43cfmEcDPn9kVyvsuLx84sEzBWuK7-nLU5YRPeWg0Qm_6VH4h_QGiPOGH0" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-[var(--slate-900-to-white)] leading-tight">Student Special Plan</p>
                                                                <p className="text-xs text-slate-500 leading-tight">Start: 20 Dec 2023</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--emerald-100-to-900-30)] text-[var(--emerald-700-to-400)] uppercase">
                                                            <span className="size-1.5 rounded-full bg-emerald-500"></span> Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-bold text-[var(--slate-700-to-300)]">2.8k Leads</span>
                                                            <span className="text-[10px] text-slate-500 uppercase font-medium">12.2% CTR</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <button className="p-1.5 hover:bg-[var(--slate-200-to-slate-700)] rounded-lg text-slate-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                                            </button>
                                                            <button className="p-1.5 hover:bg-[var(--slate-200-to-slate-700)] rounded-lg text-slate-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="px-6 py-4 bg-[var(--slate-50-to-800-30)] flex justify-center">
                                        <button className="text-xs font-bold text-primary hover:underline">View All Campaigns</button>
                                    </div>
                                </div>
                                {/* <!-- Waitlist Section --> */}
                                <div className="bg-[var(--white-to-slate-900)] rounded-xl border border-[var(--slate-200-to-800)] shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="font-bold text-lg text-[var(--slate-900-to-white)]">Recent Waitlist Signups</h3>
                                            <p className="text-sm text-slate-500">Potential customers for installment outreach</p>
                                        </div>
                                        <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded">LIVE UPDATES</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--slate-50-to-800-50)] border border-[var(--slate-100-to-700)]">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">KA</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--slate-900-to-white)]">Kwame Appiah</p>
                                                    <p className="text-xs text-slate-500">iPhone 15 Pro • Accra, GH</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-medium text-slate-400">2 mins ago</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--slate-50-to-800-50)] border border-[var(--slate-100-to-700)]">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">EM</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--slate-900-to-white)]">Efua Mensah</p>
                                                    <p className="text-xs text-slate-500">Samsung S23 • Kumasi, GH</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-medium text-slate-400">14 mins ago</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--slate-50-to-800-50)] border border-[var(--slate-100-to-700)]">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">JO</div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--slate-900-to-white)]">John Osei</p>
                                                    <p className="text-xs text-slate-500">Google Pixel 8 • Tema, GH</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-medium text-slate-400">1 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Right: Creation Form Panel --> */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-[var(--white-to-slate-900)] rounded-xl border border-[var(--slate-200-to-800)] shadow-sm overflow-hidden flex flex-col h-full">
                                    <div className="px-6 py-5 bg-primary text-white">
                                        <h3 className="font-bold text-lg">Create New Campaign</h3>
                                        <p className="text-white/80 text-xs">Set up your next marketing effort</p>
                                    </div>
                                    <form className="p-6 space-y-5 flex-1 overflow-y-auto">
                                        <div>
                                            <label className="block text-sm font-bold text-[var(--slate-700-to-300)] mb-1.5">Campaign Title</label>
                                            <input className="w-full h-11 px-4 rounded-xl border-[var(--slate-200-to-slate-700)] bg-[var(--white-to-slate-800)] text-sm focus:border-primary focus:ring-primary" placeholder="e.g. Easter Promo 2024" type="text" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[var(--slate-700-to-300)] mb-1.5">Banner Media</label>
                                            <div className="border-2 border-dashed border-[var(--slate-200-to-slate-700)] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-[var(--slate-50-to-slate-800)] transition-colors cursor-pointer group">
                                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary mb-2 text-3xl">upload_file</span>
                                                <p className="text-xs font-bold text-[var(--slate-500-to-slate-400)]">Click to upload or drag &amp; drop</p>
                                                <p className="text-[10px] text-slate-400 mt-1">SVG, PNG, JPG (1200x400px)</p>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[var(--slate-700-to-300)] mb-1.5">CTA Redirect Link</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-slate-400">link</span>
                                                <input className="w-full h-11 pl-10 pr-4 rounded-xl border-[var(--slate-200-to-slate-700)] bg-[var(--white-to-slate-800)] text-sm focus:border-primary focus:ring-primary" placeholder="https://fonepay.com/installment/iphone" type="url" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[var(--slate-700-to-300)] mb-1.5">Description</label>
                                            <textarea className="w-full p-4 rounded-xl border-[var(--slate-200-to-slate-700)] bg-[var(--white-to-slate-800)] text-sm focus:border-primary focus:ring-primary resize-none" placeholder="Explain the campaign goals or specific installment terms..." rows={3}></textarea>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-[var(--slate-50-to-800-50)] rounded-xl">
                                            <div>
                                                <p className="text-sm font-bold text-[var(--slate-900-to-white)]">Set Active Now</p>
                                                <p className="text-[10px] text-slate-500 uppercase font-medium">Publish immediately</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input checked={false} className="sr-only peer" type="checkbox" value="" />
                                                <div className="w-11 h-6 peer-focus:outline-none rounded-full peer bg-[var(--slate-200-to-slate-700)] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-[var(--gray-300-to-600)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                        <div className="pt-4">
                                            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="button">
                                                Launch Campaign
                                            </button>
                                            <button className="w-full mt-3 bg-transparent text-slate-500 py-2 text-sm font-semibold hover:text-slate-800" type="button">
                                                Save as Draft
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* <!-- Footer --> */}
                    <footer className="mt-auto border-t border-[var(--slate-200-to-800)] bg-[var(--white-to-slate-900)] px-6 py-4">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-500 text-xs">© 2024 FonePay Ghana Admin Portal. All rights reserved.</p>
                            <div className="flex items-center gap-6">
                                <a className="text-slate-400 hover:text-primary text-xs font-medium" href="#">Privacy Policy</a>
                                <a className="text-slate-400 hover:text-primary text-xs font-medium" href="#">Terms of Service</a>
                                <a className="text-slate-400 hover:text-primary text-xs font-medium" href="#">System Status</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}