import {DefaultPlayer as Video} from 'react-html5video'
import './VideoPlayer.css'
import {HOST} from '../HOST/HOST'
const VideoPlayer = ({videoId}) => {
	
	
	return (
		<Video autoPlay>
			
			<source src={`${HOST}/stream/${videoId}/`} type="video/mp4"/>
			<source src={`${HOST}/stream/${videoId}/`} type="video/webm"/>
			<source src={`${HOST}/stream/${videoId}/`} type="video/mkv"/>
		
		</Video>
	)
}

export default VideoPlayer