"use client";

import { UploadCloud, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RouteOptimizationPage() {
  const [numDrivers, setNumDrivers] = useState(3);
  const router = useRouter();

  const handleGenerate = () => {
    router.push(`/route/results?drivers=${numDrivers}`);
  };
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-10 md:px-20 relative">
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-300 opacity-50 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200 opacity-40 rounded-full blur-[160px] z-0" />

      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-bebas-neue font-bold text-gray-900">
          iJooz Route Optimization
        </h1>
        <p className="text-center text-gray-400 mt-1 mb-8 text-md">
          Optimize delivery routes for multiple drivers
        </p>

       
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 space-y-6">
          
          <div className="flex items-center gap-2 text-orange-600 font-semibold text-lg">
            <Settings className="h-5 w-5" />
            <span>Route Configuration</span>
          </div>

          
          <div>
            <label htmlFor="drivers" className="block text-sm font-medium text-gray-700">
              Number of Drivers
            </label>
            <input
              id="drivers"
              type="number"
              min="1"
              max="10"
              onChange={(e) => setNumDrivers(Number(e.target.value))}
              defaultValue={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-orange-500 focus:border-orange-500 text-orange-700"
            />
            <p className="mt-1 text-sm text-gray-500">
              Specify how many drivers you want to optimize routes for (1–10)
            </p>
          </div>

        
          <div className="border border-dashed border-orange-200 rounded-xl p-6 text-center bg-orange-50 opacity-60 cursor-not-allowed select-none">
            <div className="flex justify-center mb-3">
                <UploadCloud className="h-8 w-8 text-orange-300" />
            </div>
            <p className="text-gray-500 mb-2">Upload your delivery points file</p>
            <div className="flex justify-center gap-4 mb-2">
                <button disabled className="bg-white text-orange-400 font-medium border border-orange-300 px-4 py-2 rounded-md cursor-not-allowed">
                Upload File
                </button>
            </div>
            <p className="text-orange-500 font-bold text-sm font-medium mb-1">
                Hardcoded CSV File is being used for demo purposes.
            </p>
            <p className="text-xs text-gray-500">
                File upload coming soon. Using 30 Singapore delivery points for simulation.
            </p>
            <p className="text-center text-sm text-gray-400">
            Supported formats: CSV, Excel (.xlsx), JSON.
          </p>
            </div>
            <div className="mt-6 bg-orange-100 border-l-4 border-orange-400 p-4 rounded-md text-sm text-gray-700">
              <p className="font-semibold text-orange-700 mb-1">ℹ️ Note on File Upload</p>
              <p className="mb-2">
                File upload is currently disabled. For current demo purposes, a delivery point dataset provided by <span className="font-medium text-orange-800">iJooz</span> is being used.
              </p>
              
              <a
                href="/dummy_data.csv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline font-medium hover:text-orange-800"
              >
                📄 View Demo Dataset File
              </a>
            

              <p className="mb-2">
                Support for user-uploaded files will be enabled in a future update.
              </p>
              <p>
                When enabled, the expected CSV format should include the following columns:
                <ul className="list-disc list-inside mt-1 text-gray-600">
                  <li><code>id</code> – unique identifier</li>
                  <li><code>postal_code</code> – valid Singapore 6-digit postal code</li>
                  <li><code>location_name</code> – descriptive name of the vending machine or stop</li>
                </ul>
              </p>
            </div>

          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto" onClick={handleGenerate}>
              🚚 Generate Optimized Routes
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
