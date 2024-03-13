import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UserTable from "@/components/UserTable"

interface User {
  id : string,
  username : string,
  email : string,
  isAdmin : boolean,
  img : string,
  createdAt : Date,
  updateAt : Date
}


// updatedAt DateTime @updatedAt
const Userpage = async () => {
  const request = await fetch('http://localhost:3000/api/user', { cache: 'no-store' })
  const response: User[] = await request.json()
  const users = response.slice(0, 20)
  return (
    <div className="p-5">
      <Table>
        <TableCaption>List of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
            <TableHead>email</TableHead>
            <TableHead>isAdmin</TableHead>
            <TableHead className="text-right">createdAT</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <UserTable key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Userpage;
