import React from "react";

export default async function Username({ params }) {
  const { username } = await params;
  return (
    <>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/19.gif?token-hash=8oNeKR-txy9maj86Mg6TZk0uUWJdK38rOvuqPUmlOEY%3D&token-time=1767484800"
          alt="cover"
        />
        <div className="absolute -bottom-14 right-[50%] translate-x-[50%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={100}
            height={100}
            src="https://i.pinimg.com/736x/1b/10/30/1b1030c9031d9eed9b02e447b003401b.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="info text-center my-16 space-y-2 max-w-2xl mx-auto">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">
          Creating Animated Websites & Apps with React JS & Next JS.
        </div>
        <div className="text-slate-400">
          9178 members &bull; 34 posts &bull; 12 comments
        </div>
      </div>
      <div className="payment flex flex-wrap justify-center gap- mb-20">
        <div className="supporters w-1/2 bg-slate-900 p-10 rounded-lg text-white ">
          {/* show all list of supporters as a leaderboard */}
          <h2 className="font-bold text-2xl mb-5">Supporters</h2>
          <ul className="mx-5 text-lg">
            <li className="my-4 flex gap-2 items-center">
              <img src="avatar.gif" alt="user" width={33} />
              <span>
                Riya donated <span className="font-bold">$30</span> with a
                message "I support you. Lots of ❤️"
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <img src="avatar.gif" alt="user" width={33} />
              <span>
                Riya donated <span className="font-bold">$30</span> with a
                message "I support you. Lots of ❤️"
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <img src="avatar.gif" alt="user" width={33} />
              <span>
                Riya donated <span className="font-bold">$30</span> with a
                message "I support you. Lots of ❤️"
              </span>
            </li>
          </ul>
        </div>
        <div className="makePayments w-1/2 bg-slate-900 p-10 rounded-lg text-white ">
          <h2 className="font-bold text-2xl mb-5">Make a Payment</h2>
          {/* input for name and message */}
          <div className="mb-2">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800 mb-3"
              placeholder="Enter your name"
            />
            <textarea
              className="w-full p-3 rounded-lg bg-slate-800"
              rows={4}
              placeholder="Enter a message (optional)"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Amount"
            />
            <button className="bg-blue-700 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-blue-800">
              Pay
            </button>
          </div>
          {/* or choose from these amounts */}
          <div className="flex gap-3 mt-5">
            <button className="bg-slate-800 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-slate-700">
              $5
            </button>
            <button className="bg-slate-800 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-slate-700">
              $10
            </button>
            <button className="bg-slate-800 px-5 py-2 cursor-pointer rounded-lg font-medium hover:bg-slate-700">
              $25
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
