import Card from '@/components/Card'
import Link from 'next/link'
const DefaultNotification = () => {
  return (
    <Card >
        <div className="">Notification <Link href={'/complax-dashboard/archived'}>Archived</Link></div>
            
         </Card>
  )
}

export default DefaultNotification