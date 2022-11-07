import React from 'react'
import Image from 'next/image'
function JobCard() {
  return (
    <div>
              
<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="rounded-t-lg" src="https://www.kaiostech.com/wp-content/uploads/Blog-200700-09-Reliance-Jio-Featured-Image.png" alt=""/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reliance Jio is hiring for Frontend Developer - Angular</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">They are looking for a Frontend developer who is proficient with Angular 8/9/11 and has knowledge in all stages of software development and delivery of projects from conception to final product, requiring excellent technical skills and attention to detail. The primary focus will be on developing user interface components and implementing them. Following well-known Angular workflows. The developer would ensure that these components and the overall application are robust and easy to maintain.</p>
        <a href="https://www.linkedin.com/jobs/view/3139562519/?alternateChannel=search&refId=wZwdluq5gvJ3J7cdASGrAA%3D%3D&trackingId=vEDrSPEkM0iqY6FNuh3OwQ%3D%3D" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply Now
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
    </div>
  )
}

export default JobCard