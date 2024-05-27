import React from 'react';
import {Logo} from "@/app/(auth)/_components/logo";


const AuthLayout = ({ children }: { children: React.ReactNode}) =>  {
  return (
      <div
        className="flex flex-col h-full justify-center items-center gap-y-4"
      >
          <Logo />
          {children}
      </div>
  )
};

export default AuthLayout;