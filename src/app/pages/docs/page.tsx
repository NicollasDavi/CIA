import CourseCard from '@/components/CourseCard'
import DocCard from '@/components/DocCard'
import React from 'react'

const page = () => {
  return (
    <div className='pt-8'>
      <div className='w-11/12 md:w-9/12 m-auto h-auto mb-10'>
        <h1 className='ml-1 pb-2 pt-10 md:pt-12'>Docs</h1>
      </div>
      <div className='gap-4 md:gap-0 w-11/12 m-auto h-auto mb-10 md:pl-28 grid grid-cols-2 md:grid-cols-4'>
       <DocCard />
       <DocCard />

       <DocCard />
       <DocCard />
       <DocCard />
       <DocCard />
       <DocCard />
       <DocCard />
       <DocCard />
       <DocCard />
       <DocCard />

      </div>
    </div>
  )
}

export default page