import {DefaultPlayer as Video} from 'react-html5video'
import './VideoPlayer.css'

const VideoPlayer = ({videoId}) => {
	
	
	return (
		<Video>
			
			<source src={`/stream/${videoId}/`} type="video/mp4"/>
			
			<source src={`/stream/${videoId}/`} type="video/webm"/>
			<source src={`/stream/${videoId}/`} type="video/mkv"/>
		</Video>
	
	)
}

export default VideoPlayer