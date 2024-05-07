export default function TESTIMONIALS() {
  return (
    <>
      <div className="px-4 sm:px-10 mt-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
                What our happy client say
              </h2>
              {/* <p>Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit
              occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p> */}
            </div>
            <div className="flex space-x-4 items-end justify-end">
              <div className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#333] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="bg-[#1553A4] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#fff] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div>
              <div className="flex items-center">
                <img src="securly-logo.png" className="w-1/4 h-full" />
              </div>
              <div className="mt-4">
                <p>
                  The service is really good, and it's just the right price. We
                  use it instead of other pricier options.
                </p>
              </div>
              <div className="flex space-x-2 mt-6">
                <div className="">
                  <h4 className="font-extrabold">Brandan</h4>
                  <p className="mt-1 text-xs text-gray-700">
                    Product Manager at Securly
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img src="iqnext-logo.png" className="w-1/4 h-full " />
              </div>
              <div className="mt-4">
                <p>
                  Userforce is a lifesaver, It is the best user testing
                  platform, nothing comes close.
                </p>
              </div>
              <div className="flex space-x-2 mt-6">
                <div className="">
                  <h4 className="font-extrabold">Nicolas</h4>
                  <p className="mt-1 text-xs text-gray-700">
                    Sr User researcher at IQ Next
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img src="tooljet.svg" className="w-1/4 h-full " />
              </div>
              <div className="mt-4">
                <p>
                  Userforce is perfect for me because it's fast, cheap, and gets
                  the job done well. I love it and tell everyone about it!
                </p>
              </div>
              <div className="flex space-x-2 mt-6">
                <div className="">
                  <h4 className="font-extrabold">Michael</h4>
                  <p className="mt-1 text-xs text-gray-700">
                    Sr Product manager at Tooljet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
