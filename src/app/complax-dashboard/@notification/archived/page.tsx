import Card from "@/components/Card"
import Link from "next/link"
const archived = () => {
  return (
    <Card>Archived Notifications <Link href={'/complax-dashboard'} >Default</Link>
    </Card>
  )
}

export default archived