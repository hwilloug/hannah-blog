

interface YoutubePlayerProps {
    video_id: string
}

const YoutubePlayer: React.FunctionComponent<YoutubePlayerProps> = ({video_id}) => {
    return (
        <iframe
            id="ytplayer" 
            width="100%" 
            height="300px"
            src={`https://www.youtube.com/embed/${video_id}`}
            title={video_id}
        >
        </iframe>
    )
}

export default YoutubePlayer