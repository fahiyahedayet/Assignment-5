import logoText from "../assets/logo-text.png";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white pt-16 pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-12">

                    <div className="md:col-span-2">
                        <div className="flex items-center">
                            <img src={logoText} alt="Dev Stack" className="h-9 w-auto"/>
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">Curated tools, technologies, and resources for developers building modern software. </p>

                        <div className="mt-6 flex items-center gap-6 text-sm font-semibold text-gray-700">
                            <a href="#github" className="transition hover:text-[#EC4899]"> GitHub</a>
                            <a href="#twitter" className="transition hover:text-[#EC4899]">Twitter</a>
                            <a href="#linkedin" className="transition hover:text-[#EC4899]">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Product</h4>
                        <ul className="mt-4 space-y-3 text-sm text-gray-500">
                            <li> <a href="" className="transition hover:text-gray-900">Home </a> </li>
                            <li> <a href="" className="transition hover:text-gray-900">Technologies</a> </li>
                            <li><a href="" className="transition hover:text-gray-900">Projects</a> </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Company </h4>
                        <ul className="mt-4 space-y-3 text-sm text-gray-500">
                            <li><a href="" className="transition hover:text-gray-900">About </a></li>
                            <li><a href="" className="transition hover:text-gray-900"> Contact</a></li>
                            <li><a href="" className="transition hover:text-gray-900">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Legal</h4>
                        <ul className="mt-4 space-y-3 text-sm text-gray-500">
                            <li><a href="" className="transition hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="" className="transition hover:text-gray-900">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-gray-400 sm:flex-row">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <a href="" className="transition hover:text-gray-600">Privacy</a>
                        <a href="" className="transition hover:text-gray-600">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}