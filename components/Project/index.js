import code from "../../public/code.png";
import Image from "next/image";
import cars from "../../public/used_cars.jpg";

const Project = () => {
  


    return(
        <div id="project" className="">
            <h3 className="text-3xl mt-16 py-1  dark:text-white">Portfolio</h3>
          <div className="lg:flex gap-10 mt-12 mb-20">
            
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <Link href="/p1">
                    <Image className="rounded-t-lg" src={cars} alt="image of used car" />
               </Link>
                <div class="p-5">
                    <a href="/p1">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Used Car Price Predictor</h5>
                    </a>
                    <Link href="/p1">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Used Car Price Predictor</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link href="/p1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10  flex-1 dark:bg-white">
              
              <Image src={code} width={100} height={100} className="mx-auto content-center" alt="code image"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                In Progress
              </h3>
              <p className="py-2">
              Working on it
              </p>
              
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-white">
              <Image src={code} width={100} height={100} className="mx-auto content-center" alt="code image" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                In Progress
              </h3>
              <p className="py-2">
                Working on it
              </p>
              
            </div>

          </div>
        </div>
        
    )

}
export default Project;