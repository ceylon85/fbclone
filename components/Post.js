import Image from "next/image";
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from '@heroicons/react/outline'

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 mt-5 bg-white shadow-sm rounded-t-2xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="post"
          />

          <div>
            <p className="font-medium"> {name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image
            src={postImage}
            objectFit="cover"
            layout="fill"
            alt="postImage"
          />
        </div>
      )}

      {/* Footer of Posts */}
      <div className="flex items-center justify-between text-gray-600 bg-white border-t shadow-md rounded-b-2xl">
        <div className="rounded-none inputIcon rounded-bl-2xl" >
        <ThumbUpIcon className="h-4"/>
            <p className="text-xs sm:text-base">좋아요</p>
        </div>
        <div className="rounded-none inputIcon ">
        <ChatAltIcon className="h-4"/>
            <p className="text-xs sm:text-base">댓글 달기</p>
        </div>
        <div className="rounded-none inputIcon rounded-br-2xl">
            <ShareIcon className="h-4"/>
            <p className="text-xs sm:text-base">공유하기</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
