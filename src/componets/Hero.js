import { DownloadIcon, GlobeAltIcon } from '@heroicons/react/outline'
import React from 'react'
import { auth, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import heroImg1 from '../assests/heroImg1.png'
import heroImg2 from '../assests/heroImg2.png'

function Hero() {
	const history = useHistory()
	const [user] = useAuthState(auth)

	const signIn = (e) => {
		e.preventDefault() // stop default page refresh
		auth.signInWithPopup(provider)
			.then(() => history.push('/channels'))
			.catch((error) => alert(error.message))
	}
	return (
		<div className='bg-discord_blue pb-8 lg:pb-0'>
			<div className='p-7 py-9 h-87vh md:flex relative lg:justify-center'>
				{/**we will have som absolute things */}
				<div className='flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center lg:items-center'>
					<h1 className='text-white text-5xl font-bold'>
						IMAGINE A PLACE...
					</h1>
					<h2 className='text-white font-light text-lg tracking-wide lg:max-w-3xl w-full z-10'>
						...where you can belong to a school club, a gaming
						group, or a worldwide art community. Where just you and
						a handful of friends can spend time together. A place
						that makes it easy to talk every day and hang out more
						often.
					</h2>
					<div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6'>
						<button
							className='bg-white w-60 font-medium flex items-center justify-center 
            rounded-full p-4 hover:text-discord_blurple hover:shadow-lg text-lg
            focus:outline-none transition ease-in-out duration-500 z-10'
						>
							<DownloadIcon className='w-6 mr-2' /> Download
							Discord
						</button>
						<button
							className='bg-gray-900 text-white w-60 font-medium flex items-center justify-center 
            rounded-full p-4 hover:bg-gray-800 hover:shadow-lg text-lg
            focus:outline-none transition ease-in-out duration-500 z-10'
							onClick={
								!user ? signIn : () => history.push('/channels')
							}
						>
							<GlobeAltIcon className='w-6 mr-2' />
							Open on browser
						</button>
					</div>
					{/** Images div */}
					<div className='flex-grow'>
						<img
							src={heroImg1}
							alt='img1'
							className='absolute bottom-0 left-20 mt-16 opacity-80 sm:left-30
               lg:block lg:bottom-0 lg:left-0
               md:hidden'
						/>
						{/**Overlapping images at certain size to fix in ui */}
						<img
							src={heroImg2}
							alt='img2'
							className='hidden md:inline absolute opacity-80 right-2 md:bottom-0'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
