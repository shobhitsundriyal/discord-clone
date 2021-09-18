import moment from 'moment'
import React from 'react'

function Message({ key, id, message, timestamp, name, photoURL, email }) {
	return (
		<div className='flex items-center p-1 pl-5 mr-2 my-5 hover:bg-chatHoverBg group'>
			<img
				src={photoURL}
				alt=''
				className={
					'h-10 rounded-full cursor-pointer hover:shadow-lg mr-3'
				}
			/>
			<div className='flex flex-col items-start'>
				<h4 className='flex'>
					<span className='text-white hover:underline text-sm cursor-pointer'>
						{name}
					</span>
					<span className='text-chatHeader text-xs ml-4'>
						{moment(timestamp?.toDate().getTime()).format('lll')}
					</span>
				</h4>
				<p className={'text-chatInputText text-sm '}>{message}</p>
			</div>
		</div>
	)
}

export default Message
