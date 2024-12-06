import Card from "@/components/Card";

export default function Dashboardlayout  (
    {children,notification,users,revenue}:
    {children:React.ReactNode,notification:React.ReactNode,users:React.ReactNode,revenue:React.ReactNode}
)  {
  return (
    <div>
        <div>{children}</div>
        <div className="" style={{display:"flex"}}>
           <div style={{display:"flex",flexDirection:"column"}}>
            <Card>
                {revenue}
            </Card>
             <Card>
                {users}
            </Card>
           </div>
           <div className="" style={{display:"flex",flexGrow:1}}>
            
            {notification}
                
           </div>
        </div>
    </div>
  )
}

