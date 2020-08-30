import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Player.css";

class Player extends React.Component {
	handlePlayer = () => {
		// if (this.props.toPlay) {
		// 	this.player.audio.pause();
		// }
	};

	render() {
		return (
			<AudioPlayer
				ref={c => {
					this.player = c;
				}}
				toPlay={this.handlePlayer()}
				autoPlayAfterSrcChange={false}
				src={this.props.src}
			/>
		);
	}
}

export default Player;