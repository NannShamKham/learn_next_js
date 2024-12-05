const getRandomInt = (count:number) =>{
    return Math.floor(Math.random() * count)
}
export default function ProductLayout({ children }: { children: React.ReactNode }) {
    const random = getRandomInt(2)
    if(random === 1){
        console.log("from condition")
        throw new Error('Error loanding review')
    }
    return (
        <div>
            <h1>Product Feature</h1>
            {children}
        </div>
    );
}