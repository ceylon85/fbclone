import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed() {
    return (
        <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40">
            <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
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
