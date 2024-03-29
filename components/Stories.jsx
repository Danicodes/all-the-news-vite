import Story from "./Story"

const Stories = (props) => {
    return (
        <div className="site-wrap">
            {props.stories.map((story, index) => (
                <Story key={index} story={story}></Story>
            ))}
            {/* <pre><code>{JSON.stringify(props.stories, null, 2)}</code></pre> */}
        </div>
    )
}

export default Stories