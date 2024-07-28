import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="w-full h-auto py-12 flex flex-col justify-center items-center px-4 sm:px-12">
            <div className="bg-white rounded-lg w-full max-w-4xl p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
                <p className="mb-4 text-gray-700">Last updated: 26-7-2024</p>
                <p className="mb-4 text-gray-700">
                    At Alforia Private Limited, we strive to provide the best market research AI product to our customers.
                    Due to the nature of our product, we do not offer refunds once a purchase is made. However, we do provide
                    the option for customers to downgrade or upgrade their plan to lower or higher tiers as needed.
                </p>
                <p className="mb-4 text-gray-700">
                    If you have any questions or concerns about our refund policy, please contact us at:
                </p>
                <div className="mb-4">
                    <p className="text-gray-700"><strong>Email:</strong> contact@alforia.ai</p>
                    <p className="text-gray-700"><strong>Phone:</strong> 9778477748</p>
                    <p className="text-gray-700"><strong>Address:</strong> Alforia Private Limited, WeWork Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034</p>
                </div>
            </div>
        </div>
    );
}

export default RefundPolicy;
