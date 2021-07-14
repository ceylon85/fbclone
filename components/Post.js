import Image from "next/image";

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
    </div>
  );
}

export default Post;
