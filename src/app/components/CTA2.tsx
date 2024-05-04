export default function CTA2() {
  return (
    <>
      <div className="mt-16 px-4 sm:px-10 bg-blue-200 border border-[#1553A4] mx-10 rounded-3xl">
        <div className="min-h-[400px] relative h-full max-w-2xl mx-auto flex flex-col justify-center items-center text-center px-6 py-16">
          <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
            Real human insight, delivered real fast
          </h2>
          <p>
            Watch real people engage with your products, apps, or services, and
            easily get a vivid, first-person understanding of any experience.
          </p>
          <button className="bg-[#1553A4] hover:bg-blue-200 text-white hover:text-[#1553A4] hover:border-[#1553A4] border flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] fill-current ml-2"
              viewBox="0 0 492.004 492.004"
            >
              <path
                d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
