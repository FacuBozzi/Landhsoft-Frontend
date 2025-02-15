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
              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/newBlog-02.png"}
                      alt="Bumeran"
                      // fill
                      width={800}
                      height={800}
                      className="rounded-xl object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Bumeran: Building a Better Job Market
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
                  <p>
                    Bumeran, one of South America's leading job platforms, had
                    the goal to transform the job search experience. With our
                    iOS app, we aimed to deliver an intuitive, responsive, and
                    secure platform that truly connects talent with opportunity.
                  </p>

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
                  <p>Developing this app came with key challenges:</p>
                  <ul>
                    <li>
                      Performance Under Load: Supporting thousands of concurrent
                      users without sacrificing speed.
                    </li>
                    <li>
                      User-Centric Design: Creating an intuitive interface that
                      simplifies job search and application processes.
                    </li>
                    <li>
                      Legacy System Integration: Ensuring seamless communication
                      between the new app and our established backend systems.
                    </li>
                    <li>
                      Data Security: Protecting sensitive user information while
                      maintaining a smooth user experience.
                    </li>
                    <li>
                      Scalability: Building an app architecture that grows with
                      our expanding user base.
                    </li>
                  </ul>

                  <h3 className="pt-8">Our Solution</h3>
                  <p>
                    We tackled these challenges with a comprehensive approach:
                  </p>
                  <ul>
                    <li>
                      Optimized Architecture: We implemented a modular,
                      microservices-based system to efficiently handle high
                      traffic.
                    </li>
                    <li>
                      Intuitive UI/UX: Collaborating with designers, we crafted
                      a user-friendly interface featuring smart recommendations
                      and interactive filters.
                    </li>
                    <li>
                      Robust API Integration: Our APIs bridge the gap between
                      the new app and legacy systems, ensuring real-time data
                      sync.
                    </li>
                    <li>
                      Enhanced Security: Advanced encryption and multi-factor
                      authentication safeguard user data.
                    </li>
                    <li>
                      Scalability: Cloud-based infrastructure and performance
                      optimization techniques ensure the app can grow with
                      demand.
                    </li>
                  </ul>

                  <p>
                    This journey not only enhanced the job search experience for
                    millions but also set a strong foundation for future
                    innovations at Bumeran.
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
