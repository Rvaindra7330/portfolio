export default function Experience() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
      
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex ">
          <div>
            <span>
        <img src="/cts.jpg" alt="" className="w-15 h-15 rounded-full"/>
      </span>
          </div>
          <div className="pl-5">
            <h3 className="font-medium">Cognizant</h3>
          <p className="text-gray-400 text-sm">
           Intern
          </p>
          </div>
          
        </div>
        <span className="text-gray-500 text-sm">
          Feb 2022 - AUG 2022
        </span>
      </div>
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
      <div className="flex pt-2">
        <div>
          <span>
        <img src="/cts.jpg" alt="" className="w-15 h-15 rounded-full"/>
      </span>
        </div>
         <div className="pl-5">
          <h3 className="font-medium">Cognizant</h3>
          <p className="text-gray-400 text-sm">
            Full Stack Engineer
          </p>
        </div>
      </div>
       
        <span className="text-gray-500 text-sm">
          Apr 2023 –Present
        </span>
      </div>
      
    </section>
  );
}
