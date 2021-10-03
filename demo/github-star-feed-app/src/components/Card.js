import './Card.css';

const Card = (props) => {
    return (
        <div className={"card"}>
            <div className={"cardRight"}>
                <div className={"title"}><h1>{props.title}</h1></div>
                <div className={"summary"}>{props.summary}</div>
                <div className={"link"} onClick={props.onClickUrl}><span className={"subtitles"} >Post:</span> {props.url}</div>
                <div className={"author"}>{props.name}</div>
                <div className={"uri"} onClick={props.onClickUri}><span className={"subtitles"}>Profile: </span> {props.uri}</div>
                <div className={"update"}>{props.updated}</div>
            </div>
        </div>
    )
}

export default Card;