import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="flex flex-col px-5 mb-10  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-9 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-start max-md:flex-wrap">
                  <div className="flex flex-col grow shrink-0 self-start px-5 basis-0 w-fit max-md:max-w-full">
                    <div className="text-6xl text-black max-md:max-w-full max-md:text-4xl">
                      <span className="font-bold">Payment</span>
                      <span className=""> for </span>
                      <br />
                      <span className="">any </span>
                      <span className="font-bold">buseniss</span>
                    </div>
                    <div className="mt-8 text-2xl text-neutral-700 max-md:mt-10 max-md:max-w-full">
                      we bring everything that's required to build websites and
                      apps <br />
                      that accept payments and send payout globally
                    </div>
                  </div>
                </div>
                <div className="flex flex-col xs:flex-col px-20 mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex xs:flex-col-2 md:flex-col-2 xs:py-2.5 xs:pr-12 gap-5 items-center py-3.5 pr-16 pl-7 border-2 border-solid shadow-sm bg-slate-50 border-neutral-300 rounded-[34px] max-md:flex-wrap max-md:pr-5 max-md:mr-1">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb1d40d457b3780e0f791fbbfbaea10ecbae16f9605881a7a11b7fa6a22a729d?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                      className="shrink-0 self-stretch my-auto rounded-full aspect-square w-[50px] max-md:w-[40px]"
                    />
                    <div className="flex-auto self-stretch my-auto text-2xl xs:text-xs font-medium text-black max-md:text-xl">
                      +49 30 901820
                    </div>
                    <div className="flex justify-center self-stretch px-4 py-2 text-2xl text-white bg-blue-500 rounded-[53px] max-md:px-5 max-md:text-base max-md:py-1.5">
                      Get early access
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3e12e250dc9e16935cefd934503ec8e10f5a0e8ee28b3c9b132f2644cc4e3ae?apiKey=0f4c54ba75ba4153919e5c6d0c102c64&"
                  className="w-full aspect-[1.01] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
