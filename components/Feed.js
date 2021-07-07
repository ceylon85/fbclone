import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed() {
    return (
        <div>
            <div>
                {/* Stories */}
                <Stories/>
                {/* InputBox */}
                <InputBox/>
                {/* Posts */}
                <Posts/>
            </div>
        </div>
    )
}

export default Feed
