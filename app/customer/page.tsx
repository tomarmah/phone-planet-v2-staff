'use client';

import styles from './customer.module.css';

export default function CustomerMgtPage() {
    return (
        <>
            <div className={`bg-[var(--background)] text-[var(--color-deep-teal)] min-h-screen ${styles.container}`}>
                {/* <!-- Main Layout Container --> */}
                <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                    {/* <!-- Top Navigation Bar --> */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--color-accent-teal)] bg-white px-10 py-3 sticky top-0 z-50">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4 text-[var(--color-deep-teal)]">
                                <div className="size-6 text-primary">
                                    <span className="material-symbols-outlined text-3xl">smartphone</span>
                                </div>
                                <h2 className="text-[var(--color-deep-teal)] text-lg font-bold leading-tight tracking-[-0.015em]">PhoneStore Admin</h2>
                            </div>
                            <nav className="hidden md:flex items-center gap-9 ml-4">
                                <a className="text-[var(--color-deep-teal)] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Dashboard</a>
                                <a className="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1" href="#">Customers</a>
                                <a className="text-[var(--color-deep-teal)] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Installments</a>
                                <a className="text-[var(--color-deep-teal)] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Enquiries</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <button className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-accent-teal)] text-[var(--color-deep-teal)] hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined">notifications</span>
                                </button>
                                <button className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-accent-teal)] text-[var(--color-deep-teal)] hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined">settings</span>
                                </button>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-[var(--color-accent-teal)]" data-alt="Staff profile picture of a male administrator" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD77PQ0BAy0lRgBYQl0bcf5HlVn1Fhaex__rkZGhe-JZVytchtG7n6KrL-DPr3OlbVMztby_5Fs14s8UQI2XrUfgXAeG5Hegtk3AOFNJbfuqUKGQtVQHpNR6-1qYERNCX3i64eCJyAO5-1t6P93xwEQhXRWzcJvvDXj28oZAqvMTncpN-lT0_WpmctiJnh8QFpEv4oc70QKg78TcUnJo3BD3Ri89yxVjADL_LkNMBQTTUym35dd3i_uqTp_qjo81D2NgjF3CoZVt1lo')" }}></div>
                        </div>
                    </header>
                    <main className="flex-1 max-w-[1200px] mx-auto w-full p-6 space-y-6">
                        {/* <!-- Global Customer Search Section --> */}
                        <section className="bg-white rounded-xl border border-[var(--color-accent-teal)] p-6 shadow-sm">
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-2xl font-bold text-[var(--color-deep-teal)] mb-4 text-center">Lookup Customer Profile</h1>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-[var(--color-muted-teal)] group-focus-within:text-primary">search</span>
                                    </div>
                                    <input className="block w-full pl-12 pr-32 py-4 bg-[var(--color-accent-teal)] border-none rounded-xl text-[var(--color-deep-teal)] placeholder-muted-teal focus:ring-2 focus:ring-primary focus:bg-white transition-all text-lg" placeholder="Enter Phone Number (e.g. 024...) or Email Address" type="text" value="024 123 4567" onChange={() => { }} />
                                    <div className="absolute inset-y-0 right-0 flex items-center p-2">
                                        <button className="h-full px-6 bg-primary text-[var(--color-deep-teal)] font-bold rounded-lg hover:brightness-105 active:scale-95 transition-all">
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-[var(--color-muted-teal)] text-center">Searching in: Ghana Region • Last sync: 2 mins ago</p>
                            </div>
                        </section>
                        {/* <!-- Customer Profile Main View --> */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* <!-- Left Column: Identity & Contact --> */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white rounded-xl border border-[var(--color-accent-teal)] p-6 shadow-sm">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="size-24 rounded-full border-4 border-[var(--color-accent-teal)] bg-cover bg-center mb-4" data-alt="Customer portrait of Kofi Mensah" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB87BDbcE11ckAkJxb-y1Ya7fWBQBFxlAsXfs_Y-exJ-HvPRqvIxwBplM1aSVmBAA53Tf5g52M7-4IdmiA2Q_F3wvR9z2WoNB2z7427WCso8w1or26G1HBoh2zUd1MbAyzPVcfsk5hg1O67B_MO4H6-HY82wFnW1-JqZDAFSXO4QXOk_GdElZY1QEJuAVDVd3w9gVL2D7NTAcqAuNiQ7zM848QJamIUD7VtBbcids_oBCKxZM01DgEDlMAC39_w3GtJfWU7XWLiXwnH")' }}></div>
                                        <h2 className="text-xl font-bold text-[var(--color-deep-teal)]">Kofi Mensah</h2>
                                        <span className="mt-1 px-3 py-1 bg-primary/20 text-[var(--color-deep-teal)] text-xs font-bold rounded-full uppercase tracking-wider">Verified Premium Member</span>
                                        <p className="mt-4 text-sm text-[var(--color-muted-teal)] flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            Accra, Greater Accra • GA-123-4567
                                        </p>
                                    </div>
                                    <div className="mt-6 space-y-3 pt-6 border-t border-[var(--color-accent-teal)]">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[var(--color-muted-teal)]">Phone</span>
                                            <span className="font-semibold text-[var(--color-deep-teal)]">+233 24 123 4567</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[var(--color-muted-teal)]">Email</span>
                                            <span className="font-semibold text-[var(--color-deep-teal)]">k.mensah@example.gh</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[var(--color-muted-teal)]">ID Type</span>
                                            <span className="font-semibold text-[var(--color-deep-teal)]">Ghana Card (Voters)</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-col gap-2">
                                        <button className="w-full py-2 bg-primary text-[var(--color-deep-teal)] font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-105 transition-all">
                                            <span className="material-symbols-outlined text-sm">message</span>
                                            Send WhatsApp
                                        </button>
                                        <button className="w-full py-2 bg-[var(--color-accent-teal)] text-[var(--color-deep-teal)] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-muted-teal/10 transition-all">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                            Edit Details
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- Credit Status Card --> */}
                                <div className="bg-[var(--color-deep-teal)] text-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-sm font-medium text-[var(--color-muted-teal)] uppercase tracking-widest mb-4">Installment Status</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1 text-sm font-bold">
                                                <span>iPhone 15 Pro Max (Titanium)</span>
                                                <span>75%</span>
                                            </div>
                                            <div className="w-full bg-[var(--color-muted-teal)]/30 rounded-full h-2">
                                                <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 pt-2">
                                            <div>
                                                <p className="text-[10px] text-[var(--color-muted-teal)] uppercase">Remaining</p>
                                                <p className="text-lg font-bold">GHS 4,500</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[var(--color-muted-teal)] uppercase">Next Due</p>
                                                <p className="text-lg font-bold text-primary">Oct 15</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Right Column: Stats, Timeline & Enquiries --> */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* <!-- Metrics Ribbon --> */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-xl border border-[var(--color-accent-teal)] p-5 shadow-sm">
                                        <div className="flex items-center gap-3 text-[var(--color-muted-teal)] mb-2">
                                            <span className="material-symbols-outlined">shopping_cart</span>
                                            <span className="text-sm font-medium">Total Orders</span>
                                        </div>
                                        <p className="text-2xl font-bold text-[var(--color-deep-teal)]">12</p>
                                    </div>
                                    <div className="bg-white rounded-xl border border-[var(--color-accent-teal)] p-5 shadow-sm">
                                        <div className="flex items-center gap-3 text-[var(--color-muted-teal)] mb-2">
                                            <span className="material-symbols-outlined">payments</span>
                                            <span className="text-sm font-medium">Installments Active</span>
                                        </div>
                                        <p className="text-2xl font-bold text-[var(--color-deep-teal)]">GHS 4,500</p>
                                    </div>
                                    <div className="bg-white rounded-xl border border-[var(--color-accent-teal)] p-5 shadow-sm">
                                        <div className="flex items-center gap-3 text-[var(--color-muted-teal)] mb-2">
                                            <span className="material-symbols-outlined">trending_up</span>
                                            <span className="text-sm font-medium">Lifetime Value</span>
                                        </div>
                                        <p className="text-2xl font-bold text-[var(--color-deep-teal)] text-primary">GHS 18,200</p>
                                    </div>
                                </div>
                                {/* <!-- Customer Journey Timeline --> */}
                                <div className="bg-white rounded-xl border border-[var(--color-accent-teal)] p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-[var(--color-deep-teal)] mb-6">Customer Journey</h3>
                                    <div className="relative">
                                        {/* <!-- Timeline Line --> */}
                                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--color-accent-teal)]"></div>
                                        {/* <!-- Timeline Items --> */}
                                        <div className="space-y-8 relative">
                                            <div className="flex items-start gap-6 ml-1">
                                                <div className="size-6 bg-primary rounded-full ring-4 ring-[var(--color-accent-teal)] z-10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[14px] text-[var(--color-deep-teal)] font-bold">check</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--color-deep-teal)]">Account Created</p>
                                                    <p className="text-xs text-[var(--color-muted-teal)]">Jan 12, 2023 • 09:15 AM</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-6 ml-1">
                                                <div className="size-6 bg-primary rounded-full ring-4 ring-[var(--color-accent-teal)] z-10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[14px] text-[var(--color-deep-teal)] font-bold">shopping_bag</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--color-deep-teal)]">First Order Placed</p>
                                                    <p className="text-xs text-[var(--color-muted-teal)]">Feb 05, 2023 • iPhone 14 Pro Max</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-6 ml-1">
                                                <div className="size-6 bg-primary rounded-full ring-4 ring-[var(--color-accent-teal)] z-10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[14px] text-[var(--color-deep-teal)] font-bold">verified_user</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--color-deep-teal)]">Elite Club Membership Joined</p>
                                                    <p className="text-xs text-[var(--color-muted-teal)]">Mar 10, 2023 • Credit limit increased</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-6 ml-1">
                                                <div className="size-6 bg-[var(--color-accent-teal)] border-2 border-primary rounded-full z-10 flex items-center justify-center">
                                                    <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--color-deep-teal)]">Active Installment Plan</p>
                                                    <p className="text-xs text-[var(--color-muted-teal)]">Started Aug 20, 2024 • 4 months remaining</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Enquiries & Interactions --> */}
                                <div className="bg-white rounded-xl border border-[var(--color-accent-teal)] shadow-sm overflow-hidden">
                                    <div className="p-6 border-b border-[var(--color-accent-teal)] flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-[var(--color-deep-teal)]">Recent Enquiries</h3>
                                        <button className="text-sm font-bold text-primary hover:underline">View All</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-[var(--color-accent-teal)]/50 text-[var(--color-muted-teal)] text-xs uppercase tracking-wider">
                                                <tr>
                                                    <th className="px-6 py-3 font-semibold">Ref ID</th>
                                                    <th className="px-6 py-3 font-semibold">Subject</th>
                                                    <th className="px-6 py-3 font-semibold">Status</th>
                                                    <th className="px-6 py-3 font-semibold">Staff</th>
                                                    <th className="px-6 py-3 font-semibold">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-[var(--color-accent-teal)]">
                                                <tr className="hover:bg-[var(--color-accent-teal)]/20 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium text-[var(--color-deep-teal)]">#ENQ-8901</td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-deep-teal)]">Warranty claim for battery</td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold rounded-full uppercase">Pending</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-muted-teal)]">Ama Serwaa</td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-muted-teal)]">Oct 02</td>
                                                </tr>
                                                <tr className="hover:bg-[var(--color-accent-teal)]/20 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium text-[var(--color-deep-teal)]">#ENQ-7723</td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-deep-teal)]">Installment date change</td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded-full uppercase">Resolved</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-muted-teal)]">Kwame O.</td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-muted-teal)]">Sep 28</td>
                                                </tr>
                                                <tr className="hover:bg-[var(--color-accent-teal)]/20 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium text-[var(--color-deep-teal)]">#ENQ-5510</td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-deep-teal)]">Inquiry: S24 Ultra Pre-order</td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded-full uppercase">Resolved</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-muted-teal)]">Ama Serwaa</td>
                                                    <td className="px-6 py-4 text-sm text-[var(--color-muted-teal)]">Aug 15</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="p-4 bg-[var(--color-accent-teal)]/30 text-center">
                                        <button className="flex items-center gap-2 mx-auto text-sm font-bold text-[var(--color-deep-teal)] hover:text-primary transition-all">
                                            <span className="material-symbols-outlined text-lg">add_circle</span>
                                            Log New Staff Interaction
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* <!-- Footer --> */}
                    <footer className="mt-auto border-t border-[var(--color-accent-teal)] bg-white py-8 px-10 text-center">
                        <p className="text-sm text-[var(--color-muted-teal)]">© 2024 PhoneStore Ghana Admin Portal. Internal Use Only.</p>
                    </footer>
                </div>

            </div>
        </>
    );
}