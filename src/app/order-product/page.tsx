"use client"
export default function orderProduct () {
    const handleClick = () => {
        console.log("handleClick");
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white">Place Order</button>
        </div>
    );
};