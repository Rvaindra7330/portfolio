export default function Education() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>

      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="flex">
            <img src="/college.jpg" alt="" className="w-15 h-15 rounded-full"/>
            <div className="pl-4">
              <h3 className="font-medium">Jawaharlal Nehru Technical University</h3>
            <p className="text-gray-400 text-sm">
              B.Tech CSE 
            </p>
            </div>
            
          </div>
          <span className="text-gray-500 text-sm">
            2022 Grad
          </span>
        </div>

       
      </div>
    </section>
  );
}
