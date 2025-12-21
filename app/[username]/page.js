import React from "react";

export default async function Username({ params }) {
  const { username } = await params;
  return (
    <>
      <div>{username}</div>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/19.gif?token-hash=8oNeKR-txy9maj86Mg6TZk0uUWJdK38rOvuqPUmlOEY%3D&token-time=1767484800"
          alt="cover"
        />
        <div className="absolute -bottom-14 right-[50%] translate-x-[50%] rounded-full">
          <img
          className="rounded-full"
            width={100}
            height={100}
            src="https://i.pinimg.com/736x/1b/10/30/1b1030c9031d9eed9b02e447b003401b.jpg"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
}
