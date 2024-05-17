
export default function Footer() {
  return (
    <footer className="flex justify-center items-center self-stretch px-16 py-14 mt-52 w-full text-white bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 w-full max-w-[1422px] max-md:flex-wrap max-md:max-w-full">
        <h3 className="flex-auto text-4xl font-extrabold">Recruit.</h3>
        <div className="flex gap-5 my-auto text-right">
          <span className="grow text-xl tracking-wider">
            Designed and built by
          </span>
          <span className="flex-auto text-2xl font-bold tracking-widest">
            Terry Cheng
          </span>
        </div>
      </div>
    </footer>
  );
}
