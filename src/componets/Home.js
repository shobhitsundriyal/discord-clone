import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Redirect } from 'react-router'
import { auth, db } from '../firebase'
import dlogo from '../assests/dlogo.png'
import ServerIcon from './ServerIcon'
import { ChevronDownIcon, PlusIcon, LogoutIcon } from '@heroicons/react/outline'
import Channel from './Channel'
import Chat from './Chat'

function Home() {
	const [user] = useAuthState(auth)
	const [channels] = useCollection(db.collection('channels')) //fetching from collection "channels" onchange in realtime

	const handleAddChannel = () => {
		const channelName = prompt('Enter a new channel name')
		if (channelName) {
			db.collection('channels').add({
				channelName: channelName,
			})
		}
	}
	return (
		<>
			{!user && <Redirect to='/' />}
			<div className='flex h-screen'>
				<div className='bg-discord_serverListBg flex flex-col space-y-3 p-3 min-w-max'>
					<div className='server-default hover:bg-discord_purple'>
						<a href='/'>
							<img src={dlogo} alt='logo' className='h-6' />
						</a>
					</div>
					<hr className='border-gray-700 border w-8 mx-auto' />
					<ServerIcon image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9511dbb5-9be4-4651-be20-99508a7fbd79/de70n0o-8ff5462e-0387-4c9c-a3d6-67116643b708.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MTFkYmI1LTliZTQtNDY1MS1iZTIwLTk5NTA4YTdmYmQ3OVwvZGU3MG4wby04ZmY1NDYyZS0wMzg3LTRjOWMtYTNkNi02NzExNjY0M2I3MDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mJIphiXWW3eQgYV5qUA40KbgGqN29_Mvj_lurvlBEzc' />
					{/*<ServerIcon image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9511dbb5-9be4-4651-be20-99508a7fbd79/de70n0o-8ff5462e-0387-4c9c-a3d6-67116643b708.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MTFkYmI1LTliZTQtNDY1MS1iZTIwLTk5NTA4YTdmYmQ3OVwvZGU3MG4wby04ZmY1NDYyZS0wMzg3LTRjOWMtYTNkNi02NzExNjY0M2I3MDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mJIphiXWW3eQgYV5qUA40KbgGqN29_Mvj_lurvlBEzc' />
					<ServerIcon image='https://c4.wallpaperflare.com/wallpaper/919/76/1010/anime-attack-on-titan-attack-on-titan-scouting-legion-hd-wallpaper-preview.jpg' />
          <ServerIcon image='https://c4.wallpaperflare.com/wallpaper/577/826/501/shingeki-no-kyojin-mikasa-ackerman-logo-scout-regiment-wallpaper-preview.jpg' />*/}
					<div className='server-default hover:bg-discord_green group'>
						<PlusIcon className='text-discord_green h-7 group-hover:text-white' />
					</div>
				</div>
				<div className='bg-discor_channelsBg flex flex-col min-w-max'>
					<h2
						className='flex text-white font-bold items-center justify-between
          border-b border-gray-800 p-4 hover:bg-discord_channelHover cursor-pointer'
					>
						One Punch Man server...
						<ChevronDownIcon className='h-5 ml-2' />
					</h2>
					<div className='text-discord_channelText flex-grow overflow-y-scroll scrollbar-hide'>
						<div className='flex items-center p-2 mb-2'>
							<ChevronDownIcon className='h-5 mr-2' />
							<h4 className='font-semibold'>Channels</h4>
							<PlusIcon
								className='h-5 ml-auto cursor-pointer hover:text-white'
								onClick={handleAddChannel}
							/>
						</div>
						<div>
							{channels?.docs.map((doc) => (
								<Channel
									key={doc.id}
									id={doc.id}
									channelName={doc.data().channelName}
								/>
							))}
						</div>
					</div>
					<div className=' bg-discord_userSec'>
						<div className='flex m-3'>
							<img
								src={user?.photoURL}
								alt=''
								className='h-10 rounded-full cursor-pointer '
							/>
							<h4 className='text-white font-medium text-sm ml-5'>
								{user?.displayName}
								<span className='text-gray-400 block'>
									#{user?.uid.substring(0, 5)}
								</span>
							</h4>
							<LogoutIcon
								className='icons'
								onClick={() => {
									auth.signOut()
								}}
							/>
						</div>
					</div>
				</div>
				<div className='bg-chat_bg flex-grow'>
					<Chat />
				</div>
			</div>
		</>
	)
}

export default Home
