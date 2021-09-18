import React from 'react'

function ServerIcon({ image }) {
	return (
		<img
			src={image}
			alt=''
			className='h-12 w-12 cursor-pointer rounded-full 
      transition-all duration-150 ease-out hover:rounded-2xl'
		/>
	)
}

export default ServerIcon
