import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Latest Projects - Landhsoft",
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
                      src={"/images/blog/newBlog-03.png"}
                      alt="Lebane"
                      width={800}
                      height={800}
                      className="rounded-xl object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Lebane: Revolutionizing Real Estate Tech
                </h2>

                <div className="blog-details">
                  <p>
                    Lebane, a leading B2B real estate and construction company
                    in Latin America, sought to revolutionize their operations
                    with a robust SaaS product. We stepped in to build their
                    MVP, ensuring a seamless, scalable, and efficient solution
                    that caters to the industry's demanding needs.
                  </p>

                  <h3 className="pt-8">The Challenge</h3>
                  <p>
                    Developing a SaaS product for the real estate sector
                    presented several challenges:
                  </p>
                  <ul>
                    <li>
                      B2B SaaS Development: Crafting a product tailored for the
                      real estate and construction industry.
                    </li>
                    <li>
                      Debugging Complexity: Efficiently resolving front-end and
                      back-end issues.
                    </li>
                    <li>
                      Strict Deadlines: Delivering client-required features
                      under tight timelines.
                    </li>
                    <li>
                      Scalable Back-End: Building robust functionalities using
                      Spring Boot integrated with MySQL.
                    </li>
                    <li>
                      Custom Front-End and Authentication: Developing a
                      user-friendly interface with Next.js and our proprietary
                      authentication system.
                    </li>
                  </ul>

                  <h3 className="pt-8">Our Solution</h3>
                  <p>
                    We tackled these challenges with a focused and agile
                    approach:
                  </p>
                  <ul>
                    <li>
                      End-to-End Development: We built a comprehensive B2B SaaS
                      product tailored to the real estate and construction
                      industry.
                    </li>
                    <li>
                      Efficient Debugging: Our team quickly resolved front-end
                      and back-end issues, ensuring a smooth user experience.
                    </li>
                    <li>
                      Timely Feature Delivery: We met strict deadlines by
                      prioritizing client requirements and agile development
                      practices.
                    </li>
                    <li>
                      Scalable Architecture: Utilizing Spring Boot with MySQL
                      integration, we delivered robust and scalable back-end
                      functionalities.
                    </li>
                    <li>
                      Custom Front-End Solutions: Leveraging Next.js and our own
                      MySQL-based authentication, we built a secure and
                      responsive front-end.
                    </li>
                  </ul>

                  <p>
                    Our collaboration with Lebane has laid the groundwork for a
                    future-proof solution, transforming how real estate
                    businesses operate in Latin America.
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
