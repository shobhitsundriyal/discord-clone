import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'

function Header() {
	return (
		<div>
			<header className='flex items-center justify-between  px-6 bg-discord_blue'>
				<a href='/'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Discord_White_Text_Logo_%282015-2021%29.svg/2560px-Discord_White_Text_Logo_%282015-2021%29.svg.png'
						alt='whaat?'
						className='w-32 h-20 object-contain'
					/>
				</a>
				<div className='hidden lg:flex space-x-6 text-white'>
					<a className='link'>Download</a>
					<a className='link'>Why Discord</a>
					<a className='link'>Nitro</a>
					<a className='link'>Support</a>
				</div>
				<div className='flex space-x-4'>
					<button
						className='bg-white p-2 rounded-full font-medium text-xs md:text-sm
                    px-4 focus:outline-none 
                    hover:shadow-2xl hover:text-discord_blurple
                    transition duration-200 ease-in-out whitespace-nowrap font-medium'
					>
						Login
					</button>
					<MenuIcon className='h-9 text-white cursor-pointer lg:hidden' />
				</div>
			</header>
		</div>
	)
}

export default Header
