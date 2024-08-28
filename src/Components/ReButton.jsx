import React from 'react'

const ReButton = () => {
  return (
    <div className="relative w-32 h-10 bg-primary hover:cursor-pointer hover:bg-blue-800 text-white text-center rounded-lg transition-colors duration-300 group">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="">Regenerate</div>
      </div>
    </div>
  )
}

export default ReButton
