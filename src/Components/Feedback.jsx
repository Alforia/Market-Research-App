import React from 'react'

const Feedback = () => {
    return (
        <div className='w-full bg-gradient-to-b from-secondary to-white h-auto items-center justify-center py-10 px-10 rounded-t-[4rem] flex flex-col gap-16 sm:px-40'>
            <div>
                <div className=' text-center flex flex-col gap-4'>
                    <h1
                        className={"text-3xl sm:text-5xl font-bold md:text-center text-left transition-transform transform duration-1000"}
                    >
                        We Value Your
                        <span className='text-primary'> Feedback! </span>
                    </h1>
                    <p className=' text-left md:text-center'>our goal is to provide you with the most accurate and insightful market research possible. Your feedback is crucial to us in achieving this goal. We want to hear about your experience using our AI market research web app, what you found helpful, and any areas where we can improve.</p>
                </div>
                <div className=' w-full h-auto flex flex-col gap-2'>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-muted-foreground" for="full-name">Full name</label>
                        <input type="text" id="full-name" class="mt-1 block w-full border border-border rounded-md p-2 focus:ring focus:ring-ring" placeholder="Enter your full name" required />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-muted-foreground" for="email">Email</label>
                        <input type="email" id="email" class="mt-1 block w-full border border-border rounded-md p-2 focus:ring focus:ring-ring" placeholder="Enter your email" required />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-muted-foreground" for="feedback">What do you like the most about Research AI?</label>
                        <textarea id="feedback" class="mt-1 block w-full border border-border rounded-md p-2 focus:ring focus:ring-ring" rows="3" placeholder="Your feedback" required></textarea>
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-muted-foreground" for="improvement">How can we improve Research AI for you?</label>
                        <textarea id="improvement" class="mt-1 block w-full border border-border rounded-md p-2 focus:ring focus:ring-ring" rows="3" placeholder="Your suggestions" required></textarea>
                    </div>

                    <div class="mb-4">
                        <span class="block text-sm font-medium text-muted-foreground">Would you recommend Research AI to a colleague?</span>
                        <label class="inline-flex items-center mt-2">
                            <input type="radio" class="form-radio" name="recommend" value="yes" required />
                            <span class="ml-2 text-muted-foreground">Yes</span>
                        </label>
                        <label class="inline-flex items-center mt-2">
                            <input type="radio" class="form-radio" name="recommend" value="no" required />
                            <span class="ml-2 text-muted-foreground">No</span>
                        </label>
                    </div>

                    <button type="submit" class=" bg-primary w-32   py-2 rounded-md text-white font-semibold hover:bg-primary/80">Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Feedback
