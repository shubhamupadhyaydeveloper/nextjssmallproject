import React from 'react'
import { getData} from '@/lib/data';
interface User {
    id: string,
    username: string,
    password: string,
    email: string,
    isAdmin: boolean,
    img: string,
    createdAt: Date,
    updatedAt: Date
}

const Adminpage = async () => {
    const user: User[] = await getData()
    return (
        <div className='flex justify-evenly gap-10 p-5'>
            <div>
                <h1 className='text-xl font-semibold'>Hi i am admin of this website</h1>
            </div>

            <div className='flex flex-col'>
                {user.map((item) => (
                    <div className="max-w-xs rounded overflow-hidden">
                        <div className="px-6 py-4">
                            <div className=" mb-2">
                                <h1 className='font-bold text-xl'>{item.username}</h1>
                            </div>
                            <p className="text-gray-700 text-base">
                                Email: {item.email}
                            </p>
                            <p className="text-gray-700 text-base">
                                Admin: {item.isAdmin ? 'Yes' : 'No'}
                            </p>
                            <p className="text-gray-700 text-base">
                                Created  {item.createdAt.toString().slice(4, 16)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Adminpage;
