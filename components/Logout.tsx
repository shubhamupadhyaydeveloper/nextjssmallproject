import { signOut } from '@/lib/auth';

export const Loginpage = async () => {
    const handleLogin = async () => {
        'use server'
        await signOut();
    };
    return (
        <form action={handleLogin}>
            <button>Logout</button>
        </form>
    );
};