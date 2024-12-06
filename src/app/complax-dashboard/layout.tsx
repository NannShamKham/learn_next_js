import Card from "@/components/Card";
import React from "react";

export default function Dashboardlayout  (
    {children,login,notification,register,users,revenue}:
    {   children:React.ReactNode,
        notification:React.ReactNode,
        register:React.ReactNode,
        users:React.ReactNode,
        revenue:React.ReactNode,
        login:React.ReactNode
    }
)  {
    const isLogin = false;
    // console.log(register)
  return isLogin?(<div>
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
                {/* {register}                */}
            </div>
            </div>
    </div>):(login)
  
}

