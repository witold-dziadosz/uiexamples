import { Footer } from "flowbite-react";
import { Content } from "./Content";
import NewComponent from "./NewComponent";
import Pricing from "./Pricing";
import AnotherTable from "./AnotherTable";
import Header from "./Header";
import Kutty from "./Kutty";
import KuttyStats from "./KuttyStats";
import Breadcrumbs from "./Breadcrumbs";
import Shop from "./Shop";
import LastDashboard from "./LastDashboard";





function App() {
  return (
    <>
      <div className="bg-white lg:pb-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <header className="flex items-center justify-between py-4 md:py-8">
            {/* logo - start */}
            <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
              <svg width={95} height={94} viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Coindashboard
            </a>


            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex">
              <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
              <a href="#" className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500">
                Features
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
              <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
              <a href="#" className="inline-block px-4 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 rounded-lg outline-none focus-visible:ring ring-indigo-300 hover:text-indigo-500 active:text-indigo-600 md:text-base">Sign in</a>
              <a href="#" className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base">Sign up</a>
            </div>
            <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Menu
            </button>
            {/* buttons - end */}
          </header>
          {/* menu - start */}
          <div className="hidden w-full max-w-screen-sm mx-auto -mt-4 overflow-hidden bg-white border rounded-lg shadow-sm lg:block">
            <div className="grid grid-cols-2 gap-8 m-6 mb-10">
              {/* link - start */}
              <a href="#" className="flex gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 text-white transition duration-100 bg-indigo-500 rounded-lg shadow-lg md:w-12 md:h-12 shrink-0 group-hover:bg-indigo-600 group-active:bg-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Growth</div>
                  <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                </div>
              </a>
              {/* link - end */}
              {/* link - start */}
              <a href="#" className="flex gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 text-white transition duration-100 bg-indigo-500 rounded-lg shadow-lg md:w-12 md:h-12 shrink-0 group-hover:bg-indigo-600 group-active:bg-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Security</div>
                  <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                </div>
              </a>
              {/* link - end */}
              {/* link - start */}
              <a href="#" className="flex gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 text-white transition duration-100 bg-indigo-500 rounded-lg shadow-lg md:w-12 md:h-12 shrink-0 group-hover:bg-indigo-600 group-active:bg-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Cloud</div>
                  <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                </div>
              </a>
              {/* link - end */}
              {/* link - start */}
              <a href="#" className="flex gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 text-white transition duration-100 bg-indigo-500 rounded-lg shadow-lg md:w-12 md:h-12 shrink-0 group-hover:bg-indigo-600 group-active:bg-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Analytics</div>
                  <p className="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
                </div>
              </a>
              {/* link - end */}
            </div>
            {/* link - start */}
            <a href="#" className="block p-4 transition duration-100 bg-gray-50 hover:bg-gray-100 active:bg-gray-200">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-semibold leading-none">Enterprise solutions</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold leading-none rounded-full px-2 py-1 mt-0.5">New</span>
              </div>
              <p className="text-sm text-gray-500">This is a section of some simple filler text.</p>
            </a>
            {/* link - end */}
          </div>
          {/* menu - end */}
        </div>
      </div>



      <div className="container w-2/3 mx-auto">
        <KuttyStats />
      </div>




      <div className="container flex justify-center w-1/3 py-6 m-16 mx-auto shadow-lg align-center">
        <div>


          <div>
            <Breadcrumbs />
          </div>

          <div className="flex flex-col justify-between mt-12">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="w-32 mx-auto rounded-full" alt="Avatar" />
            <h1 className="mx-auto mt-6 mb-4 text-xl text-black">This is some guy</h1>
          </div>

        </div>

      </div>

      <Shop/>

      <Content />



      <Pricing />



      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex flex-col items-center max-w-xl mx-auto text-center">
            <p className="mb-4 font-semibold text-indigo-500 md:text-lg xl:text-xl md:mb-6">Coindashboard Project</p>
            <h1 className="mb-8 text-3xl font-bold text-black-800 sm:text-4xl md:text-5xl md:mb-12">Look at those shiny coins!</h1>
            <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <a href="#" className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base">Start now</a>
              <a href="#" className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none hover:bg-gray-300 focus-visible:ring ring-indigo-300 active:text-gray-700 md:text-base">Take tour</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-2/3 mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center border">
                  <thead className="border-b">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-sm font-medium text-gray-900 border-r">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-medium text-gray-900 border-r">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-medium text-gray-900 border-r">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-medium text-gray-900">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r whitespace-nowrap">1</td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 border-r whitespace-nowrap">
                        Mark
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 border-r whitespace-nowrap">
                        Otto
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r whitespace-nowrap">2</td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 border-r whitespace-nowrap">
                        Jacob
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 border-r whitespace-nowrap">
                        Thornton
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                        @fat
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r whitespace-nowrap">3</td>
                      <td colSpan={2} className="px-6 py-4 text-sm font-light text-center text-gray-900 border-r whitespace-nowrap">
                        Larry the Bird
                      </td>
                      <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                        @twitter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>


      <Kutty />

      <div className="container w-11/12 mx-auto">
        <section className="relative text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
            <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
              <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
              <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
                <div className="px-6 lg:w-1/2">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
                  <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
                  <a className="leading-relaxed text-indigo-500">example@email.com</a>
                  <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
              <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
              <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" defaultValue={""} />
              </div>
              <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
              <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section>

      </div>





      <NewComponent />

      <Header />

      <AnotherTable />

    <LastDashboard/>
      
      <div className="mt-36">


        <Footer container={true}>
          <div className="w-full text-center">
            <div className="justify-between w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
              <Footer.LinkGroup>
                <Footer.Link href="#">
                  About
                </Footer.Link>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Licensing
                </Footer.Link>
                <Footer.Link href="#">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright
              href="#"
              by="Flowbite™"
              year={2022}
            />
          </div>




        </Footer>
      </div>






    </>
  );




}

export default App;
