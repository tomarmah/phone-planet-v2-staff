'use client';

export default function LoginPage() {
    return (
        <>
            <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-[450px]">
                    {/* <!-- Login Card --> */}
                    <div className="bg-[var(--white-to-teal-950)] shadow-xl shadow-primary/5 rounded-xl overflow-hidden border border-primary/10">
                        <div className="p-8 sm:p-10">
                            <div className="text-center mb-8">
                                <h1 className="text-[var(--primary-dark-to-white)] text-2xl font-bold mb-2">Staff Secure Login</h1>
                                <p className="text-[var(--slate-500-to-slate-400)] text-sm">Access the installment and inventory dashboard</p>
                            </div>
                            <form className="space-y-6" onSubmit={() => { return false; }}>
                                {/* <!-- Email Field --> */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-[var(--primary-dark-to-slate-200)]">
                                        Email Address
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary">
                                            <span className="material-symbols-outlined text-xl">mail</span>
                                        </div>
                                        <input className="block w-full pl-11 pr-4 py-3.5 bg-[var(--background)] border border-[var(--slate-200-to-slate-700)] rounded-lg text-[var(--primary-dark-to-white)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="name@phonestore.com.gh" required={false} type="email" />
                                    </div>
                                </div>
                                {/* <!-- Password Field --> */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-semibold text-[var(--primary-dark-to-slate-200)]">
                                            Password
                                        </label>
                                        <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary">
                                            <span className="material-symbols-outlined text-xl">lock</span>
                                        </div>
                                        <input className="block w-full pl-11 pr-11 py-3.5 bg-[var(--background)] border border-[var(--slate-200-to-slate-700)] rounded-lg text-[var(--primary-dark-to-white)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="••••••••" required={true} type="password" />
                                        <button className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-primary transition-colors" type="button">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- Submit Button --> */}
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group" type="submit">
                                    <span>Login to Dashboard</span>
                                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </form>
                        </div>
                        {/* <!-- Footer/Notice --> */}
                        <div className="bg-[var(--primary-5-to-primary-10)] px-8 py-4 flex items-center justify-center gap-2 border-t border-primary/10">
                            <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                            <span className="text-xs font-bold text-[var(--primary-dark-to-primary)] uppercase tracking-widest">Authorized Personnel Only</span>
                        </div>
                    </div>
                    {/* <!-- Additional Help/Links --> */}
                    <div className="mt-8 text-center space-y-4">
                        <p className="text-[var(--slate-500-to-slate-400)] text-xs leading-relaxed max-w-sm mx-auto">
                            By logging in, you agree to PhoneStore Ghana's internal data security policies. All access attempts are logged and monitored.
                        </p>
                        <div className="flex items-center justify-center gap-6">
                            <a className="text-xs font-medium text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                            <a className="text-xs font-medium text-slate-400 hover:text-primary transition-colors" href="#">System Status</a>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- Background Decorative Elements --> */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
            </div>
            <footer className="w-full py-6 text-center border-t border-primary/5">
                <p className="text-slate-400 text-[10px] font-medium tracking-widest uppercase">
                    © 2024 PhoneStore Ghana. Built for premium mobile retail.
                </p>
            </footer>
        </>
    );
}