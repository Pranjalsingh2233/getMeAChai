import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh]">
        <h1 className="flex justify-center items-center font-bold text-5xl">
          Buy Me a Chai
          <span>
            <img src="tea.gif" width={88} alt="tea" />
          </span>
        </h1>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. !
        </p>
        <div className="">
          <button
            type="button"
            className="rounded text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2.5 text-center leading-5 me-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="rounded text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2.5 text-center leading-5"
          >
            Start Here
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white container mx-auto py-32">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your fans can buy you a chai
        </h2>
        <div className="flex justify-around gap-5">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 p-2 rounded-full"
              src="man.gif"
              alt="man"
              width={88}
            />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 p-2 rounded-full"
              src="coin.gif"
              alt="coin"
              width={88}
            />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 p-2 rounded-full"
              src="group.gif"
              alt="group"
              width={88}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white container mx-auto py-32">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <div className="flex flex-col items-center">
          <iframe
            width="560"
            height="315"
            className="rounded-lg"
            src="https://www.youtube.com/embed/wnHW6o8WMas?si=fwdfJhp7c_3iA2Ai"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
