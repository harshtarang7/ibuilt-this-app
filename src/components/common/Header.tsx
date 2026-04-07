import { Show, SignIn, SignInButton, SignUp, SignUpButton, UserButton } from "@clerk/nextjs";
import { Building2, File, Home, Search, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
    const isSignedIn = false;
    return (
        <header className="w-[80%] mx-auto flex items-center justify-between border-b border-gray-900 py-4">
            <span className="flex items-center gap-2">
                <span className="bg-blue-600 p-2 rounded-[6px]"><Building2 color="white" /> </span>
                <h2 className="text-2xl bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary font-bold">
                    IBuiltThis</h2>
            </span>

            <div>
                <ul className="flex items-center gap-6">
                    <li className="flex items-center gap-2 cursor-pointer hover:border-b hover:border-gray-400 hover:pb-1"><Home /> <Link href="/" className="text-[16px]">Home</Link></li>
                    <li className="flex items-center gap-2 cursor-pointer hover:border-b hover:border-gray-400 hover:pb-1"><Search /> <Link href="/explore" className="text-[16px]">Explore</Link></li>
                </ul>
            </div>



            <nav>

                <Show when={'signed-in'}>
                    <div className="flex item-center gap-2">
                        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-[10px] hover:bg-gray-100  hover:text-black cursor-pointer">
                            <File />  <Link href="/">Submit Project</Link>
                        </button>

                        <UserButton />
                    </div>
                </Show>

                <Show when={'signed-out'}>
                    <ul className="flex gap-4 items-center">
                        <li className="border border-gray-400 px-4 py-2 rounded-[10px] hover:bg-gray-100  hover:text-black cursor-pointer">
                            <SignInButton />
                        </li>
                        <li className="bg-primary px-4 py-2 text-white rounded-[10px] hover:border border-gray-400 cursor-pointer">
                            <SignUpButton />
                        </li>
                    </ul>
                </Show>

            </nav>
        </header>
    )

}
