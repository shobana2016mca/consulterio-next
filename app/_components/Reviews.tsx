export default function Reviews() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-2'>
        <div className='border border-gray-300 p-14'>Column 1 Content</div>
        <div className='border border-gray-300 p-14'>Column 2 Content</div>
      </div>

      <hr className='' />
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
    <div className='w-full py-24 bg-gray-900 sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto lg:max-w-none'>
          <div className='space-y-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Trusted by creators worldwide
            </h2>
            <p className='text-lg leading-8 text-gray-300'>
              We can help you grow your audience and your business, no matter
              the size.
            </p>
          </div>
          <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col p-8 bg-white/5'>
              <dt className='text-sm font-semibold leading-6 text-gray-300'>
                words written in 2023
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white'>
                12 million
              </dd>
            </div>
            <div className='flex flex-col p-8 bg-white/5'>
              <dt className='text-sm font-semibold leading-6 text-gray-300'>
                episodes uploaded
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white'>
                10k
              </dd>
            </div>
            <div className='flex flex-col p-8 bg-white/5'>
              <dt className='text-sm font-semibold leading-6 text-gray-300'>
                hours of media
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white'>
                6.6k
              </dd>
            </div>
            <div className='flex flex-col p-8 bg-white/5'>
              <dt className='text-sm font-semibold leading-6 text-gray-300'>
                answers
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white'>
                2.1k
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
