import { Building2, Home, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-[80%] mx-auto flex items-center justify-between border-b border-gray-900 py-4">
            <h2 className="text-2xl bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary font-bold">
                IBuiltThis</h2>

            <div>
                <ul className="flex items-center gap-6">
                    <li className="flex items-center gap-2"><Home /> <Link href="/" className="text-[16px]">Home</Link></li>
                    <li className="flex items-center gap-2"><Search /> <Link href="/explore" className="text-[16px]">Explore</Link></li>
                </ul>
            </div>

            <nav>
                <ul className="flex gap-4 items-center">
                    <li className="border border-gray-400 px-4 py-2 rounded-[10px] hover:bg-gray-100  hover:text-black cursor-pointer">
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="bg-primary px-4 py-2 text-white rounded-[10px] hover:border border-gray-400 cursor-pointer">
                        <Link href="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
