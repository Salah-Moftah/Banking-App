import AuthForm from '@/components/AuthForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Horizon - Sign up",
  description: "Horizon is a modern banking platform for everyone.",
};

const SignUp = () => {

  
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up'/>
    </section>
  )
}

export default SignUp