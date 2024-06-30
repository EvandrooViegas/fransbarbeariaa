import SectionContainer from '@/components/section-container'
import SectionTitle from '@/components/section-title'
import React from 'react'
import reviews from "./data.ts"
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaStar } from 'react-icons/fa'
export default function Reviews() {
  return (
    <SectionContainer id='reviews' className='bg-foreground text-black space-y-6'>
        <SectionTitle>O QUE ELES FALAM SOBRE NÓS?</SectionTitle>
        <div className='md:grid md:grid-cols-3 flex flex-col gap-4'>
{reviews.map(r => (
    <Card key={r.name} className='flex flex-col justify-center items-center '>
      <CardHeader className='text-center'>
      <IoPersonCircleOutline className='text-5xl m-auto text-neutral-800' />
        <CardTitle className='text-2xl font-bold'>{r.name}</CardTitle>
        <div className="flex items-center justify-center  gap-1.5 text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
        <CardDescription className='italic text-xl'>&ldquo;{r.description}&rdquo;</CardDescription>
      </CardHeader>
    </Card>
))}
        </div>
    </SectionContainer>
  )
}
