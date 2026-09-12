import BannnerImage from '../assets/banner-stack.png';
const Banner = () => {
    return (
        <section className="bg-white py-10 sm:py-16 lg:py-20">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[54px]">
                        Build Your Ideal
                        <span className="mt-1 block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-[540px] text-base leading-7 text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button className="rounded-lg bg-gradient-to-r from-orange-500 via-[#FF5722] to-[#EC4899] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                            Explore Technologies
                        </button>

                        <button className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 transition hover:border-gray-300">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={BannnerImage}
                        alt="Development technology stack"
                        className="w-[320px] object-contain sm:w-[380px] lg:w-[430px]"
                    />
                </div>


            </div>


        </section >
    )
}

export default Banner