import { HashtagIcon } from '@heroicons/react/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setChannelInfo } from '../features/channelSlice'

function Channel({ id, channelName }) {
	const dispatch = useDispatch()
	const history = useHistory()

	const setChannel = () => {
		dispatch(
			setChannelInfo({
				channelId: id,
				channelName: channelName,
			})
		)
		history.push(`/channels/${id}`)
	}
	return (
		<div
			className='flex font-medium cursor-pointer items-center p-1 rounded-lg m-2
     hover:bg-discord_channelHover hover:text-white'
			onClick={setChannel}
		>
			<HashtagIcon className='h-5 mr-2' /> {channelName}
		</div>
	)
}

export default Channel
