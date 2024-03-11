import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UserTable from "@/components/UserTable"

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Userpage = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
  const response: Post[] = await request.json()
  const posts = response.slice(0, 20)
  return (
    <div className="p-5">
      <Table>
        <TableCaption>List of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">UserId</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Description</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((post) => (
            <UserTable key={post.id} post={post} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Userpage;
