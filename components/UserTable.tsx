'use client'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

interface UserTableProps {
    user: {
        id: string,
        username: string,
        email: string,
        isAdmin: boolean,
        img: string,
        createdAt: Date,
        updateAt: Date
    }
}

const UserTable = ({ user }: UserTableProps) => {
    const router = useRouter()
    const handleclick = () => {
        router.push(`/user/${user.id}`)
    }

    return (
        <TableRow onClick={handleclick} className="cursor-pointer">
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.isAdmin ? "Yes" : "No"}</TableCell>
            <TableCell className="text-right">{user.createdAt.toString().slice(5,16)}</TableCell>
        </TableRow>
    )
}

export default UserTable;
