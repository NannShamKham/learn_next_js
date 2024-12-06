
const Card = ({children}:{children:React.ReactNode}) => {
    const cardStyle={
        padding:"100px",
        margin:"20px",
        alighItems:"center",
        border:"1px solid #ccc",
    }
  return (
    <div style={cardStyle}>{children}</div>
  )
}

export default Card