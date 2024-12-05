"use client"
import { useRouter } from "next/navigation";
export default function orderProduct () {
    const router = useRouter();
    const handleClick = () => {
        console.log("handleClick");
        router.push('/')
        // router.back();
        // router.forward();
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white">Place Order</button>
        </div>
    );
};