import React from 'react'

const NonMemberAlert = () => {
    return (
        <div className=' w-full h-60 bg-gradient-to-b from-transparent to-secondary flex justify-center items-center px-12'>
            <div className=' flex justify-center items-center flex-col text-center'>
                <h1>Market Insight AI made this a subscriber-only Content</h1>
                <h1 className=' font-bold text-2xl'>Get 20% off membership for a limited time</h1>
                <button
                    type="button"
                    className="mt-3 flex items-center justify-center w-full p-3 bg-primary rounded-3xl text-white hover:bg-blue-700"
                >
                    <div className=' flex gap-4 items-center' >
                        <span className=' font-semibold '>Confirm</span>
                    </div>

                </button>
            </div>
        </div>
    )
}

export default NonMemberAlert
