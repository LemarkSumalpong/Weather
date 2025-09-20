import { Calendar } from 'lucide-react'
import React from 'react'

function ForeCast() {
  return (
    <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl'>
        <div className='flex items-center space-x-3nb-8'>
            <div className='p-2 bg-white/20 rounded-full'>
            <Calendar />
            </div>
        </div>
    </div>
  )
}

export default ForeCast