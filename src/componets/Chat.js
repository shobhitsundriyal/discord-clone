import React, { useRef } from 'react'
import { HashtagIcon, SearchIcon } from '@heroicons/react/outline'
import {
	UserIcon,
	ChatIcon,
	BellIcon,
	InboxIcon,
	QuestionMarkCircleIcon,
	PlusCircleIcon,
	GiftIcon,
	EmojiHappyIcon,
} from '@heroicons/react/solid'
import { selectChannelId, selectChannelName } from '../features/channelSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { useSelector } from 'react-redux'
import firebase from 'firebase/compat/app'
import { useCollection } from 'react-firebase-hooks/firestore'
import Message from './Message'

function Chat() {
	const channelId = useSelector(selectChannelId)
	const channelName = useSelector(selectChannelName)
	const [user] = useAuthState(auth)
	const [messages] = useCollection(
		channelId &&
			db
				.collection('channels')
				.doc(channelId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
	)
	const inputRef = useRef('') //see
	const chatRef = useRef(null)

	const scrollToBottom = () => {
		//seaseame
		chatRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	const sendMessages = (e) => {
		e.preventDefault()
		//Writing messages to db
		if (inputRef.current.value !== '') {
			// only if input is not empty string
			db.collection('channels')
				.doc(channelId)
				.collection('messages')
				.add({
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					message: inputRef.current.value,
					name: user?.displayName,
					photoURL: user?.photoURL,
					email: user?.email,
				})
		}
		inputRef.current.value = '' //resetting after writing
		scrollToBottom()
	}
	return (
		<div className='flex flex-col h-screen'>
			<header
				className='flex items-center justify-between space-x-5
      border-b border-gray-800 p-2 -m1-1'
			>
				<div className='flex items-center space-x-2'>
					<HashtagIcon className='h-6 text-chatHeader' />
					<h4 className='text-white font-semibold'>{channelName}</h4>
				</div>
				<div className='flex space-x-3'>
					<BellIcon className='icons hover:bg-gray-500' />
					<ChatIcon className='icons hover:bg-gray-500' />
					<UserIcon className='icons hover:bg-gray-500' />

					<div className='flex bg-discor_channelsBg text-s p-1 rounded-md'>
						<input
							type='text'
							placeholder='Search'
							className='bg-transparent focus:outline-none pl-1 text-white placeholder-gray-500'
						/>
						<SearchIcon className='h-4 m-1 text-gray-500 mt-2' />
					</div>
					<InboxIcon className='icons hover:bg-gray-500' />
					<QuestionMarkCircleIcon className='icons hover:bg-gray-500' />
				</div>
			</header>

			<main className='flex-grow overflow-y-scroll scrollbar-hide'>
				{messages?.docs.map((doc) => {
					const { message, timestamp, name, photoURL, email } =
						doc.data()

					return (
						<Message
							key={doc.id}
							id={doc.id}
							message={message}
							timestamp={timestamp}
							name={name}
							photoURL={photoURL}
							email={email}
						/>
					)
				})}
				<div ref={chatRef} className='pb-16' />
			</main>

			<div className='chatInput bg-chatInputBg p-1.5 mx-5 mb-3 rounded-lg flex items-center'>
				<PlusCircleIcon className='icons ml-1' />
				<form className='flex flex-grow'>
					<input
						className='bg-transparent focus:outline-none text-chatInputText 
            placeholder-chatHeader w-full text-sm ml-1 '
						type='text'
						disabled={!channelId}
						placeholder={
							channelId
								? `Message #${channelName}`
								: 'Select a channel to message'
						}
						ref={inputRef}
					/>
					<button hidden type='submit' onClick={sendMessages}>
						Send
					</button>
				</form>
				<GiftIcon className='icons' />
				<EmojiHappyIcon className='icons ml-0' />
			</div>
		</div>
	)
}

export default Chat
