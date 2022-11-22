import arc from "@architect/functions";

export async function handler() {
  const html = String.raw;

  let tables = await arc.tables();

  let visitcount = tables.visitcount;

  await visitcount.update({
    Key: { appName: "CloudResumeChallengeVisitorCount" },
    ExpressionAttributeValues: { ":inc": 1 },
    UpdateExpression: "ADD loadCount :inc",
  });

  let getAppInfo = await visitcount.query({
    KeyConditionExpression: "appName = :type",
    ExpressionAttributeValues: { ":type": "CloudResumeChallengeVisitorCount" },
  });

  let loadCount = getAppInfo["Items"][0]["loadCount"];

  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: html`
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/_static/style.css" rel="stylesheet" />
      </head>
      <body class="bg-resume-background">
        <div class="max-w-5xl mx-auto mt-6">
          <div
            class="flex flex-col sm:flex-row ml-8 mr-8 md:ml-auto md:mr-auto"
          >
            <div
              class="sm:shrink-0 w-full flex flex-col justify-center items-center md:block sm:w-48"
            >
              <img
                class="h-48 w-48 object-contain rounded-sm border-4 border-black"
                src="/_static/Profile_Pic.jpeg"
                alt="Modern building architecture"
              />
              <div
                class="py-1.5 bg-amber-300 text-amber-800 font-semibold uppercase text-xs tracking-wider block text-center shadow-sm hover:bg-yellow-300 w-48"
              >
                Visitor Count: <span class="text-cyan-600">${loadCount}</span>
              </div>
            </div>
            <div class="sm:pl-8 flex flex-col justify-between w-full">
              <div
                class="w-full uppercase tracking-wide text-sm font-semibold self-center text-center sm:text-left"
              >
                <h1 class="text-5xl text-resume-name pt-4 sm:pt-0">
                  Ben Patton
                </h1>
                <h2 class="text-xl">Software Developer</h2>
              </div>

              <div
                class="text-md grid grid-cols-2 grid-rows-2 gap-4 text-center sm:text-left lg:flex lg:flex-row lg:justify-between pt-8 text-slate-500"
              >
                <p>1.864.542.5869</p>
                <p>Chareston, SC US</p>
                <p>www.benapatton.dev</p>
                <p>bass41992ben@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Section -->

        <div
          class="mt-12 mx-auto max-w-xs sm:max-w-md py-2 bg-black text-white text-center text-md rounded-sm"
        >
          <p class="uppercase tracking-widest text-md md:text-xl">Profile</p>
        </div>

        <div
          class="h-40 ml-8 mr-8 pl-8 pr-8 flex justify-center items-center text-left md:ml-auto md:mr-auto mx-auto max-w-5xl -mt-5 rounded-lg border-4 border-black"
        >
          <p class="text-sm md:text-md lg:text-lg font-serif">
            I am a JavaScript Developer focusing on building Fullstack Web
            applications primarily using React and Node JS. My love of software
            craftsmanship leads me to help teams think strategically about
            systems and process for developer happiness and client success.
          </p>
        </div>

        <!-- Education Section -->

        <div
          class="mt-12 mx-auto max-w-xs sm:max-w-md py-2 bg-black text-white text-center rounded-sm"
        >
          <p class="uppercase tracking-widest">Education</p>
        </div>

        <div
          class="h-40 ml-8 mr-8 pl-8 pr-8 max-w-5xl md:ml-auto md:mr-auto mx-auto grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:justify-items-center -mt-5 rounded-lg border-4 border-black p-3"
        >
          <div
            class="grid grid-cols-5 gap-8 md:gap-10 md:flex w-full justify-between md:justify-center items-center pl-4"
          >
            <div class="col-span-1 ">
              <p class="md:text-md lg:text-lg font-serif">2010 - 2014</p>
            </div>
            <div class="col-span-4 ">
              <p class="md:text-md lg:text-lg font-serif pl-8">
                The Citadel: BA in History, Business Minor
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-5 gap-10 md:flex w-full justify-between md:justify-center items-center pl-4"
          >
            <div class="col-span-1 ">
              <p class="md:text-md lg:text-lg font-serif">2020</p>
            </div>
            <div class="col-span-4 ">
              <p class="md:text-md lg:text-lg font-serif pl-8">
                Jack Russell Coding School
              </p>
            </div>
          </div>
        </div>

        <!-- Work and Skills Section -->

        <div
          class="h-screen max-w-5xl mx-auto gap-8 grid grid-rows-8 md:grid-rows-1 md:grid-cols-2"
        >
          <!-- Work -->
          <div class="row-span-3 ">
            <div
              class="mt-12 mx-auto max-w-xs sm:max-w-md py-2 bg-black text-white text-center rounded-sm"
            >
              <p class="uppercase tracking-widest">Work</p>
            </div>

            <div
              class="h-5/6 md:h-auto md:flex md:flex-col md:justify-around ml-8 mr-8 md:ml-auto md:mr-auto mx-auto max-w-5xl -mt-5 rounded-lg border-4 border-black overflow-scroll space-y-4"
            >
              <!-- Split up each work experience like so -->
              <!-- Make each one a grid -->

              <!-- Current Job -->
              <div class="pl-4 pr-4 pt-6">
                <p class="text-lg md:text-xl font-semibold">
                  Associate Software Developer
                </p>
                <p class="text-md md:text-lg">
                  Compare Credit | Charleston, SC
                </p>
                <p class="text-md md:text-lg">April 2022 - Present</p>
                <ul role="list" class="list-disc ml-6 text-sm md:text-base">
                  <li>
                    Integrated with multiple marketing platforms to make website
                    data readable and consumable for marketing team.
                  </li>
                  <li>
                    Refactored critical sorting logic for faster, more reliable,
                    and more dynamic sorting
                  </li>
                  <li>
                    Technologies Used: Typescript | Nextjs | Sanity.io | Zod |
                    Jest | Lodash
                  </li>
                </ul>
              </div>

              <!-- Self-employed -->

              <div class="pl-4 pr-4">
                <p class="text-lg md:text-xl font-semibold">
                  Contractor Software Engineer
                </p>
                <p class="text-md md:text-lg">Self Employed | Charleston, SC</p>
                <p class="text-md md:text-lg">November 2020 - Present</p>
                <ul role="list" class=" list-disc pl-6 text-sm md:text-base">
                  <li>Building a course for egghead.io</li>
                  <li>Building websites for local non-profits</li>
                </ul>
              </div>

              <!-- TIAG -->

              <div class="pl-4 pr-4 pb-4">
                <p class="text-lg md:text-xl font-semibold">
                  Junior Software Developer
                </p>
                <p class="text-md md:text-lg">TIAG | Mt. Pleasant, SC</p>
                <p class="text-md md:text-lg">June 2021 - April 2022</p>
                <ul role="list" class="list-disc pl-6 text-sm md:text-base">
                  <li>
                    Added Typesafety to legacy code system with JSDoc &
                    Typescript
                  </li>
                  <li>Taught team Typescript/type-safety</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Projects & Skills -->

          <div class="grid grid-rows-4 md:grid-rows-3 row-span-5">
            <div class="row-span-2 md:row-span-2">
              <div
                class="mt-12 mx-auto max-w-xs sm:max-w-md py-2 bg-black text-white text-center rounded-sm"
              >
                <p class="uppercase tracking-widest">Projects</p>
              </div>

              <div
                class="h-4/5 grid grid-rows-3 gap-2 ml-8 mr-8 mx-auto max-w-5xl rounded-lg overflow-scroll"
              >
                <!-- Portfolio -->

                <div class="pl-7 pr-7 md:pl-0 md:pr-0 pt-2 ">
                  <p class="text-md md:text-lg font-semibold">
                    <a
                      href="https://benapatton.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="hover:underline hover:text-indigo-700"
                      >Portfolio</a
                    >
                  </p>
                  <p class="text-sm lg:text-base">
                    Website built with Nextjs, tRPC, TailwindCSS, & Sanity.io
                  </p>
                  <p class="text-sm lg:text-base">
                    Migrating to Remix, zod, & DynamoDB with TailwindCSS and
                    Sanity
                  </p>
                </div>

                <!-- Career Changers -->
                <div class="pl-7 pr-7 md:pl-0 md:pr-0 ">
                  <p class="text-md md:text-lg font-semibold">
                    <a
                      href="https://careerchangers.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="hover:underline hover:text-indigo-700"
                      >Career Changers</a
                    >
                  </p>
                  <p class="text-sm lg:text-base">
                    Weekly Newsletter for Career Changers
                  </p>
                  <p class="text-sm lg:text-base">
                    Current focus in on those changing careers to software
                    engineering
                  </p>
                </div>

                <!-- Beginner Serverless -->

                <div class="pl-7 pr-7 md:pl-0 md:pr-0  md:mb-4">
                  <p class="text-md md:text-lg font-semibold">
                    <a
                      href="https://beginnerserverless.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="hover:underline hover:text-indigo-700"
                      >Beginner Serverless</a
                    >
                  </p>
                  <p class="text-sm lg:text-base">
                    New Project that will I am building to house content and
                    training to help frontend devs learning serverless
                  </p>
                </div>
              </div>
            </div>

            <div class="row-span-2 md:row-span-1 md:-mt-6">
              <div
                class="mx-auto max-w-xs sm:max-w-md py-2 mt-4 md:mt-0 bg-black text-white text-center rounded-sm"
              >
                <p class="uppercase tracking-widest">Skills</p>
              </div>

              <div
                class="h-4/5 flex justify-around items-start ml-8 mr-8 md:ml-auto md:mr-auto mx-auto max-w-5xl -mt-5 rounded-lg "
              >
                <div class=" pt-8 md:text-lg text-center md:text-left">
                  <ul>
                    <li>React</li>
                    <li>Remix</li>
                    <li>Svelte/SvelteKit</li>
                    <li>Nodejs</li>
                    <li>SanityCMS / CMS</li>
                  </ul>
                </div>
                <div class=" pt-8 md:text-lg text-center md:text-left">
                  <ul>
                    <li>TailwindCSS / CSS</li>
                    <li>Typescript</li>
                    <li>AWS - Serverless Architecture</li>
                    <li>NoSQL</li>
                    <li>ORM's</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="flex justify-center items center h-10 w-full">
          <p class="">&copy; Ben A Patton</p>
        </footer>
      </body>
    `,
  };
}
