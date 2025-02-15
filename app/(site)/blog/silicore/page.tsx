import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Latest Projects - Landhsoft",

  // other metadata
  description: "Latest Projects - Landhsoft",
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div> */}

              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div> */}

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/newBlog-01.png"}
                      alt="Silicore"
                      // fill
                      width={800}
                      height={800}
                      className="rounded-xl object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Silicore: Bridging Markets with Real-Time Insights
                </h2>

                {/* <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Jhon Doe
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Events
                  </li>
                </ul> */}

                <div className="blog-details">
                  {/* <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div> */}

                  <h3 className="pt-8">The Challenge</h3>
                  <p>
                    New York–based startup Silicore sought to create a web
                    application that would provide users with real-time
                    cryptocurrency pricing data across 20+ exchanges. The
                    platform aimed to help users identify pricing disparities
                    between exchanges, allowing them to optimize their trades.
                    To enhance user engagement, the app would also include
                    features for rating exchanges, leaving reviews, and
                    leveraging seamless login via Google authentication.
                  </p>

                  <h3 className="pt-8">Our Solution</h3>
                  <p>
                    To bring Silicore’s vision to life, we started by developing
                    smart contracts in Rust for the Stellar Blockchain as part
                    of a competition funded by a $30k grant from Stellar. Post-
                    competition, we transitioned to building the Web2 components
                    of the platform, leveraging modern technologies such as
                    Next.js and TypeScript for the frontend and Nest.js for the
                    backend. A PostgreSQL database was set up to handle complex
                    relationships, and Google authentication was integrated for
                    a smooth user experience.
                  </p>

                  <h3 className="pt-8">The Results</h3>
                  <ul>
                    <li>
                      Real-time updates from over 20 exchanges every 30 seconds
                    </li>
                    <li>Seamless user experience with Google authentication</li>
                    <li>
                      Enhanced user engagement through ratings and reviews
                    </li>
                    <li>
                      Improved trading efficiency by providing actionable
                      insights
                    </li>
                  </ul>

                  <h3 className="pt-8">Technical Implementation</h3>
                  <p>
                    One of the primary challenges was integrating WebSocket APIs
                    from 20+ cryptocurrency exchanges, each with unique
                    protocols. We established a robust system to fetch, process,
                    and update pricing data in real-time, ensuring users
                    received fresh data every 30 seconds. The modular
                    architecture of Nest.js enabled us to handle dependency
                    injection effectively and deliver a robust API. Next.js and
                    TypeScript provided a dynamic and responsive frontend
                    experience, while PostgreSQL ensured efficient handling of
                    user and review data.
                  </p>

                  <h3 className="pt-8">Future Impact</h3>
                  <p>
                    Silicore’s platform has the potential to revolutionize how
                    traders interact with cryptocurrency markets by
                    democratizing access to real-time data and user-generated
                    insights. With plans to integrate additional exchanges and
                    advanced analytics, the platform is poised to become an
                    indispensable tool for both casual and professional traders.
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
