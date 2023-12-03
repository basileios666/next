import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar text-zinc-950 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li>
                            <a>Services</a>
                            <ul className="p-1">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost no-animation hover:bg-transparent text-3xl">Next</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>

                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className="bg-white w-32">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>

            <div className="navbar-end">
                <Link href="/" className="btn btn-outline btn-error">Register</Link>
            </div>
        </div>
    )
}

export default Navbar