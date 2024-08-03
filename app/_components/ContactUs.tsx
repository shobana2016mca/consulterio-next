import Image from 'next/image';

export default function ContactUs() {
  return (
    <>
      <article className='self-center ml-20 text-xl tracking-wider text-black mt-44 max-md:mt-10'>
        Full Name
      </article>
      <form className='flex gap-5 px-5 mt-5 w-full text-3xl font-extrabold tracking-widest text-teal-400 uppercase whitespace-nowrap max-w-[1422px] max-md:flex-wrap max-md:max-w-full'>
        <label htmlFor='contactInput' className='sr-only'>
          contact
        </label>
        <input
          type='text'
          id='contactInput'
          className='w-full h-[81px] max-md:max-w-full bg-white rounded-xl border border-solid border-zinc-300'
          placeholder='Enter your contact'
        />
        <button type='submit' className='flex-auto self-start mt-2.5'>
          contact
        </button>
      </form>
      <section className='mt-2 w-full max-w-[1422px] max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <article className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
            <header className='flex flex-col px-5 max-md:mt-10 max-md:max-w-full'>
              <h4 className='text-5xl capitalize text-sky-950 max-md:max-w-full max-md:text-4xl'>
                Looking for a new opportunity?
              </h4>
              <p className='mt-12 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full'>
                Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed
                blandit rhoncus tellus senectus at quis. Mi at fermentum
                imperdiet velit magna a aliquam. Faucibus et quam ac elit
                placerat tristique vulputate
              </p>
            </header>
          </article>
          <article className='flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col px-5 text-xl tracking-wider text-black grow mt-7 max-md:mt-10 max-md:max-w-full'>
              <label htmlFor='emailInput' className='sr-only'>
                Email
              </label>
              <input
                id='emailInput'
                type='email'
                className='shrink-0 mt-5 bg-white rounded-xl border border-solid border-zinc-300 h-[81px] max-md:max-w-full'
                placeholder='Enter your email'
                aria-label='Enter your email'
              />
              <label htmlFor='contactNumberInput' className='sr-only'>
                Contact Number
              </label>
              <input
                id='contactNumberInput'
                type='tel'
                className='shrink-0 mt-9 bg-white rounded-xl border border-solid border-zinc-300 h-[81px] max-md:max-w-full'
                placeholder='Enter your contact number'
                aria-label='Enter your contact number'
              />
            </div>
          </article>
        </div>
      </section>

      <button className='flex justify-between gap-5 px-8 py-5 mt-16 ml-32 text-xl tracking-wider text-black bg-teal-400 whitespace-nowrap max-md:px-5 max-md:mt-10'>
        <span className='my-auto'>Submit</span>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/ebd3e41fc3252b10502e067502dfc45637c924ff6bfa217a79e21d1d48481379?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
          alt=''
          width={31}
          height={31}
          className='shrink-0 aspect-square w-[31px]'
        />
      </button>
    </>
  );
}
