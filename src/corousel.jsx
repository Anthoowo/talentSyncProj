import { Carousel } from "flowbite-react";

export default function Carouselcomponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 h 2xl:h-[30rem]">
      <Carousel>
        <div className="flex h-full justify-around bg-[#f9fafb] p-4">
          <div className="  flex flex-col justify-between">
            <img className="w-28" src="images/Shopify.svg" alt="coinbase" />
            <img className="w-28 " src="icons/5stars.svg" alt="" />
            <div>
              <h2 className="text-xl font-semibold">
                ClearLink has upgraded our
              </h2>
              <h2 className="text-xl font-semibold">
                remote meetings. High-quality
              </h2>
              <h2 className="text-xl font-semibold">
                video, screen sharing, and
              </h2>
              <h2 className="text-xl font-semibold">
                top-notch security make it{" "}
              </h2>
              <h2 className="text-xl font-semibold">essential for our team.</h2>
            </div>
            <div className="flex">
              <img className="" src="images/Avatarsarah.svg" alt="sarah img" />
              <div>
                <h3>Sarah Thompson</h3>
                <p>Project Manager, Shopify</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="h-[95%]"
              src="images/Contents.svg"
              alt="people img"
            />
          </div>
        </div>
        <div className="flex h-full justify-around bg-gray-200 p-4">
          <div className="  flex flex-col justify-between">
            <img className="w-28" src="images/Shopify.svg" alt="coinbase" />
            <img className="w-28 " src="icons/5stars.svg" alt="" />
            <div>
              <h2 className="text-xl font-semibold">
                ClearLink has upgraded our
              </h2>
              <h2 className="text-xl font-semibold">
                remote meetings. High-quality
              </h2>
              <h2 className="text-xl font-semibold">
                video, screen sharing, and
              </h2>
              <h2 className="text-xl font-semibold">
                top-notch security make it{" "}
              </h2>
              <h2 className="text-xl font-semibold">essential for our team.</h2>
            </div>
            <div className="flex">
              <img className="" src="images/Avatarsarah.svg" alt="sarah img" />
              <div>
                <h3>Sarah Thompson</h3>
                <p>Project Manager, Shopify</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="h-[95%]"
              src="images/Contents.svg"
              alt="people img"
            />
          </div>
        </div>

        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
}
