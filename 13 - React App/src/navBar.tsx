import React from 'react';
import '@microsoft/mgt';
import './tailwind.generated.css';

const NavBar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between bg-gray-100 shadow-xl p-4">
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight">MGT + React = <span role="img" aria-label="love">❤️</span></span>
            </div>
            <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-grow">
                    <a href="https://docs.microsoft.com/en-us/graph/toolkit/overview" rel="noopener noreferrer" target="_blank" className="block mt-4 sm:inline-block sm:mt-0 hover:text-gray-600 mr-4">
                        MGT Docs
            </a>
                    <a href="https://www.npmjs.com/package/mgt-react" rel="noopener noreferrer" target="_blank" className="block mt-4 sm:inline-block sm:mt-0 hover:text-gray-600 mr-4">
                        MGT React
            </a>
                    <a href="https://twitter.com/franzinifabio" rel="noopener noreferrer" target="_blank" className="block mt-4 sm:inline-block sm:mt-0 hover:text-gray-600 mr-4">
                        @franzinifabio
            </a>
                </div>
                <div>
                    <mgt-login></mgt-login>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;