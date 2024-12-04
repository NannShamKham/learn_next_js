"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/register", label: "Register" },
    { href: "/login", label: "Login" },
    { href: "/forget-password", label: "Forget Password" },
]
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return <div>
        <h1>Auth Layout</h1>
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