import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = ({ type }) => {
    const numberOfItems = 5;

    if (type === 'table') {
        return (
            <div className="w-full">
                {[...Array(numberOfItems)].map((_, index) => (
                    <div key={index} className="p-4 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row">
                            <Skeleton height={30} width={200} className="mb-2 sm:mb-0 sm:mr-4" />
                            <Skeleton height={30} width={150} />
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(numberOfItems)].map((_, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg">
                        <Skeleton height={200} />
                        <Skeleton height={30} className="mt-4" />
                        <Skeleton height={20} className="mt-2" />
                    </div>
                ))}
            </div>
        );
    }
};

export default SkeletonLoader;
