export default function Reviews() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-2">
        <div className="border border-gray-300 p-14">Column 1 Content</div>
        <div className="border border-gray-300 p-14">Column 2 Content</div>
      </div>

      <hr className="" />
      <br />
      <br />
      <br />
      <br />
      <Staticcards />
    </>
  );
}
function Staticcards() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              We can help you grow your audience and your business, no matter
              the size.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">
                words written in 2023
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                12 million
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">
                episodes uploaded
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                10k
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">
                hours of media
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                6.6k
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">
                answers
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                2.1k
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
