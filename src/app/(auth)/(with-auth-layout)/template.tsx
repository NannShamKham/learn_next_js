"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { href: "/register", label: "Register" },
    { href: "/login", label: "Login" },
    { href: "/forget-password", label: "Forget Password" },
]
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    const [input,setInput] = useState('')
    return <div>
        <h1>Auth Layout</h1>
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="" id="" />
        </div>
        {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href)
            return (
                <Link className={`${isActive?'text-blue-600':'font-bold'} me-3`} key={link.href} href={link.href}>{link.label}</Link>
            )
        }
          
        )}
        {children}
        </div>;
}