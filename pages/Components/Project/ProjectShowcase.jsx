import ProjectData from "@/feckProjectdata"


const ProjectShowcase = () => {
  return (
   <div className="bg-gray-900">
    <h2 className=" text-blue-600 text-3xl font-semibold uppercase text-center">Previous Work</h2>
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 dark:text-gray-400 text-gray-500 text-center">Discover our expertise and creativity through our Project Showcase section on our agency website. From successful campaigns to impactful projects, see how we have delivered results for our clients</p>
     <div className="flex flex-wrap">
     {
      ProjectData.map(data=> <div key={data.id} className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-6">
      <img src={data.imgurl} alt="project 1" className="w-full h-64 object-cover rounded-sm" />
      <h2 className="mt-4 text-xl font-bold text-white">{data.title}</h2>
      <p className="text-base leading-7 dark:text-gray-400 text-gray-500">{data.text}</p>
    </div>)
     }
    </div>
   </div>
  )
}

export default ProjectShowcase
