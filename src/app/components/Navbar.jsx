import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-center'>
                <ul className='flex justify-between w-1/2'>
                    <li>Home</li>
                    <li>Cars</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
