import { type FC } from 'react';

const Loader: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 space-y-4 w-full h-full">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-green-100 rounded-full"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-green-700 uppercase tracking-[0.2em] animate-pulse">Loading</span>
                <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest text-center">Wait for a little bit...</span>
            </div>
        </div>
    );
};

export default Loader;
