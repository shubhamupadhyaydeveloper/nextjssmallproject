'use client'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

interface UserTableProps {
    post: {
        id: number,
        userId: number,
        title: string,
        body: string
    }
}

const UserTable = ({ post }: UserTableProps) => {
    const router = useRouter()
    const handleclick = () => {
       router.push(`/user/${post.userId}`)
    }
    
    return (
        <TableRow onClick={handleclick} className="cursor-pointer">
            <TableCell>{post.userId}</TableCell>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell className="text-right">{post.body.substring(0,100)}</TableCell>
        </TableRow>
    )
}

export default UserTable;
