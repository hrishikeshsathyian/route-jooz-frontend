"use client";


import { Truck, Route, Import } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {

  

  const router = useRouter();
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-300 opacity-50 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200 opacity-40 rounded-full blur-[160px] z-0" />
      
      {/* # HEADER FOR INDEX PAGE */}
      <header className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Truck className="h-5 w-5 bg-orange-500" />
              </div>
              <h1 className="text-2xl font-bold text-black">ijooz</h1>
            </div>
          </div>
      </header>

      {/* # MAIN TITLE AND DESCRIPTION */}
      <main className="text-center py-20">
        
        <h2 className="text-5xl font-bold font-bebas-neue text-gray-900 mb-4">
          iJooz Route Optimization
        </h2>
        <div className= "px-80">
          <p className="text-[1.375rem] text-gray-400 w-full mx-0 mb-6">
            Optimize your delivery routes with AI-powered algorithms. Reduce costs,
            save time, and improve efficiency for your fleet.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 mx-auto" onClick={() => {

          router.push("/route");}}>
          <Route className="h-5 w-5" />
          Start Route Optimization
        </button>
      </main>

      {/* # CARDS */}
      <div className="px-32 flex flex-wrap justify-center gap-6 mb-10">


      <div className="group max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Route className="h-7 w-7 bg-orange-100 text-orange-500" />
          </div>
          
          <h5 className="mb-2 text-xl font-semibold text-center text-black  group-hover:text-2xl transition-all duration-300">
            Smart Optimization
          </h5>
         
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
            Advanced algorithms calculate the most efficient routes for your deliveries, considering traffic patterns and delivery windows.
          </p>
          
      </div>
      <div className="group max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Truck className="h-7 w-7 bg-orange-100 text-orange-500" />
          </div>
          
          <h5 className="mb-2 text-xl font-semibold text-center text-black  group-hover:text-2xl transition-all duration-300">
            Multi-Driver Support
          </h5>
         
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
           Distribute deliveries across multiple drivers efficiently, balancing workload and minimizing total travel distance.
          </p>
          
      </div>
      <div className="group max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Import className="h-7 w-7 bg-orange-100 text-orange-500" />
          </div>
          
          <h5 className="mb-2 text-xl font-semibold text-center text-black group-hover:text-2xl transition-all duration-300">
            Easy Import
          </h5>
         
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
              Upload delivery points with ease from CSV, Excel, or JSON files          
          </p>     
      </div>
      

      </div>



    </div>
  );
}