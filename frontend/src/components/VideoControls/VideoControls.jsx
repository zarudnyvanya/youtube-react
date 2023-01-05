import s from './VideoControls.module.scss'

const VideoControls = ({
	                       setIsPlay,
	                       isPlay,
	                       isVolume,
	                       setIsVolume,
	                       handlerProgressVideo,
	                       file,
	                       videoDuration,
	                       handlerFullScreen
                       }) => {
	
	
	return (
		
		
		<>
			
			{
				!isPlay ?
					<div className={s.video__btn_play} onClick={() => setIsPlay(!isPlay)}>
						<svg viewBox="0 0 32 32">
							<g>
								<path
									d="M26.78,13.45,11.58,4A3,3,0,0,0,7,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,11.58,28l15.2-9.41a3,3,0,0,0,0-5.1Z"/>
							</g>
						</svg>
					</div> : ''}
			
			
			<div className={s.video__controls_progress}>
				<input
					className={s.input__controls_progress}
					onChange={(e) => handlerProgressVideo(e.target.value)}
					value={file.playedSeconds}
					type='range'
					min="0"
					// max={file.loadedSeconds}
					max={videoDuration}
					step='1'/>
			
			
			</div>
			
			<div className={s.video__controls}>
				
				
				<div className={s.video__controls_block_left}>
					
					<div className={s.video__mini_play}>
						{!isPlay ? <svg viewBox="0 0 48 48">
							<path d="M-838-2232H562v3600H-838z" fill="none"/>
							<path d="M16 10v28l22-14z"/>
							<path d="M0 0h48v48H0z" fill="none"/>
						</svg> : <svg viewBox="0 0 48 48">
							<path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"/>
							<path d="M0 0h48v48H0z" fill='none'/>
						</svg>}
					</div>
					
					
					<div className={s.video__controls_volume}>
						<svg viewBox="0 0 48 48">
							<path
								d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/>
							<path d="M0 0h48v48H0z" fill="none"/>
						</svg>
						<input
							className={s.input__volume}
							value={isVolume}
							onChange={(e) => setIsVolume(e.target.value)}
							type='range'
							min="0"
							max="1"
							step='0.1'/>
					</div>
				</div>
				
				
				<div className={s.controls__fullScreen} onClick={handlerFullScreen}>
					
					<svg height="48" viewBox="0 0 48 48" width="48">
						<path d="M0 0h48v48h-48z" fill="none"/>
						<path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4h-10v10zm24 14h-6v4h10v-10h-4v6zm-6-24v4h6v6h4v-10h-10z"/>
					</svg>
				
				</div>
			
			
			</div>
		
		
		</>
	)
	
	
}

export default VideoControls