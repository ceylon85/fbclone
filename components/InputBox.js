import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
  const [session] = useSession();
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-2 mt-6 font-medium bg-white shadow-md text-gray-1000 rounded-2xl">
      <div className="flex items-center p-4 space-x-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="profile_img"
        />
        <form className="flex flex-1">
          <input
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            placeholder={`${session.user.name}님, 무슨 생각을 하고 계신가요?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex p-3 text-gray-600 border-t justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">라이브 방송</p>
        </div>

        <div className="inputIcon">
          <PhotographIcon className="text-green-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">사진/동영상</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">기분/활동</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;