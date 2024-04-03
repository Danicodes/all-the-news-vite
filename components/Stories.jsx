import Story from "./Story"

const Stories = ( { stories }) => {
    return (
        <div className="site-wrap">
            {stories.map((story, index) => (
                <Story key={index} story={story}></Story>
            ))}
            {/* <pre><code>{JSON.stringify(props.stories, null, 2)}</code></pre> */}
        </div>
    )
}

export default Stories