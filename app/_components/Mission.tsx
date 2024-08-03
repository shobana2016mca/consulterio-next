import Image from 'next/image';

export default function Mission() {
  return (
    <section className='w-full max-w-[1584px] max-md:max-w-full mt-10'>
      <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
        <article className='flex flex-col w-[43%] max-md:ml-0 max-md:w-full'>
          <div className='flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full'>
            <h3 className='text-3xl font-extrabold tracking-widest text-teal-400 uppercase max-md:max-w-full'>
              misson
            </h3>
            <h4 className='text-5xl mt-9 text-sky-950 max-md:max-w-full max-md:text-4xl'>
              We’ve managed over 2.5 million candidates
            </h4>
            <p className='mt-16 text-xl tracking-wider text-black max-md:mt-10 max-md:max-w-full'>
              Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed
              blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet
              velit magna a aliquam. Faucibus et quam ac elit placerat tristique
              vulputate. Elit sit varius condimentum tempor vel commodo
              malesuada.
            </p>
            <Image
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/c3897aa5cb3f0f84de4a9f19da339b70ac11571da12a77c0d627a24fd55d9bd4?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
              alt=''
              width={77}
              height={77}
              className='mt-12 aspect-[1.1] w-[77px] max-md:mt-10'
            />
          </div>
        </article>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/623d0841a0fffdb3b2cd20a7f3f463112a061db5ccca652452f2060002a111ec?apiKey=54709c8bd30b4ce38ba82e61049e17ec&'
          alt='Mission Image'
          layout='intrinsic'
          objectFit='cover'
          width={716}
          height={640}
          className='flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full max-md:mt-10 max-md:max-w-full'
        />
      </div>
    </section>
  );
}
