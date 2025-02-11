import { getCurrentSession } from '@/actions/auth'
import SignUp from '@/components/auth/SignUp';
import { redirect } from 'next/navigation';
import React from 'react'

const SignUpPage = async () => {

    const { user } = await getCurrentSession();

    if(user) {
        return redirect("/");
    }
  return (
    <SignUp/>
  )
}

export default SignUpPage