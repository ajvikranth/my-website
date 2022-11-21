import code from "../../public/code.png";
import Image from "next/image";

const Project = () => {
  


    return(
        <div id="project" className="">
            <h3 className="text-3xl mt-16 py-1  dark:text-white">Portfolio</h3>
          <div className="lg:flex gap-10  ">
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-white">
              <Image src={code} width={100} height={100} className="mx-auto content-center" alt="code image"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">In Progress</h3>
              <p className="py-2">
                Working on it
              </p>
            </div>
          </div>
        </div>
        
    )

}
export default Project;