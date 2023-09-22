import React from 'react'
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
    const schema = z
    .object({
      firstName: z.string().min(3, "name should contain atleast 3 character").max(30),
      lastName: z.string().min(3,"name should contain atleast 3 character").max(30),
      email: z.string().email(),
      password: z.string().min(5,"password should contain min 5 character").max(15),
      confirmPassword: z.string().min(5).max(15),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("IT WORKED", data);
  };

  return (
    <div className='flex items-center justify-center'>
    <div className="w-[500px] h-[500px] mt-[30px] border-solid border-[1px] border-black">
      <form onSubmit={handleSubmit(submitData)} className='flex flex-col gap-2 items-center text-start'>
        <div className='flex flex-col gap-1'>
        <label className='font-mono text-lg'> First Name </label>
        <input type="text" className='w-[200px]' {...register("firstName")} />
        {errors.firstName && <span className='text-red-400 text-sm'> {errors.firstName.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
        <label className='font-mono'> Last Name: </label>
        <input className='w-[200px]' type="text" {...register("lastName")} />
        {errors.lastName && <span className='text-red-400 text-sm'> {errors.lastName.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
        <label className='font-mono'> Email: </label>
        <input className='w-[200px] ' type="email" {...register("email")} />
        {errors.email && <span className='text-red-400 text-sm'> {errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
        <label className='font-mono'> Password: </label>
        <input className='w-[200px]' type="password" {...register("password")} />
        {errors.password && <span className='text-red-400 text-sm'> {errors.password.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
        <label className='font-mono'> Confirm Password: </label>
        <input className='w-[200px]' type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span className='text-red-400 text-sm'> {errors.confirmPassword.message}</span>
        )}
         </div>
        <input className='w-[200px] px-4 py-2 rounded-lg bg-black text-white' type="submit" />
      </form>
    </div>
    </div>
  );
}

export default Register