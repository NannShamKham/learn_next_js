
import { Metadata } from "next";
type Props = {
    params:{
        productId:string
    }
}

const getRandomInt = (count:number) =>{
    return Math.floor(Math.random() * count)
}
export const generateMetadata = async ({params}:Props):Metadata =>{
    const title = await new Promise (resolve =>{
        setTimeout(()=>{
            resolve(`IPhone ${params.productId}`)
        })
    })
    return {
        title:`Product Detail ${title}`
    }
}


export default function productDetail({params }: {params: {productId: string}}) {
    const random = getRandomInt(2)
    if(random === 1){
        console.log("from condition")
        throw new Error('Error loanding product')
    }
    
    return (
        <div>
            <h1>Product Detail {params.productId}</h1>
        </div>
    );
}