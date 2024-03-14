import LoginForm from '@/components/LoginForm';
import { signIn } from '@/lib/auth';

const Loginpage = async () => {
    const handleLogin = async () => {
        'use server'
        await signIn("github");
    };

    return (

        <div className='flex flex-col  p-5'>
            <h1 className='text-xl font-semibold'>hello this is Login Page</h1>
            <form action={handleLogin} className='mt-5'>
                <button className='bg-black text-white p-2 rounded-sm'>Login with GitHub</button>
            </form>
            <LoginForm />
        </div>
    );
};

export default Loginpage;
