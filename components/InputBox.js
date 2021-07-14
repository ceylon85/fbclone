import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              //when the upload completes
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  const addImgaeToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
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
            ref={inputRef}
            placeholder={`${session.user.name}님, 무슨 생각을 하고 계신가요?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>

          {imageToPost && (
            <div
              onClick={removeImage}
              className="flex flex-col transition duration-150 transform cursor-pointer filter hover:brightness-110 hover:scale-105"
            >
              <img
                className="object-contain h-10"
                src={imageToPost}
                alt="image"
              />
              <p className="text-xs text-center text-red-500">Remove</p>
            </div>
          )}
        </form>
      </div>
      <div className="flex p-3 text-gray-600 border-t justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">라이브 방송</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <PhotographIcon className="text-green-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">사진/동영상</p>
          <input
            hidden
            ref={filepickerRef}
            onChange={addImgaeToPost}
            type="file"
          />
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
