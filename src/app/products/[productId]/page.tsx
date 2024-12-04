
import { Metadata } from "next";
type Props = {
    params:{
        productId:string
    }
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
    return (
        <div>
            <h1>Product Detail {params.productId}</h1>
        </div>
    );
}