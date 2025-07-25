"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { response } from "@/app/lib/dummyAPIResponse";
import { Truck } from "lucide-react";
import dynamicImport from "next/dynamic";


type Point = {
  address: number;
  lat: number;
  lng: number;
  name: string;
};

type ApiData = {
  coords_res: Point[][];
  times: number[];
  total_route_time: number;
  max_route_time: number;
};

type ApiResponse = {
  data: ApiData;
};

export const dynamic = "force-dynamic";

export default function RouteResultsClient() {
    
  const searchParams = useSearchParams();
  const [numDrivers, setNumDrivers] = useState<number | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const RouteMap = dynamicImport(() => import("@/app/components/routeMap"), { ssr: false });

  
  useEffect(() => {
    const parsed = parseInt(searchParams.get("drivers") || "0", 10);
    if (!isNaN(parsed)) setNumDrivers(parsed);
  }, [searchParams]);

//   useEffect(() => {
//     if (numDrivers === null) return; 
//     const pingAPI = async () => {
//         try {
//         setLoading(true);
//         const response = await fetch("http://0.0.0.0:80/solve/" + numDrivers);
//         const data = await response.json(); // we need second await because response.json() is a separate async operation that converts the response body to JSON
//         setApiResponse(data);
//         console.log("API Response:", data);
//         if (!response.ok) {
//             console.error("Failed to fetch API");
//         } else {
//             console.log("API fetched successfully");
//         }
//         } catch (error) {
//         console.error("Error fetching API:", error);
//         } finally {
//         setLoading(false);
//         }
//     };

//     pingAPI();
//     }, [numDrivers]);



  const effectiveResponse = apiResponse || response; // Use the API response if available, otherwise use the dummy response


  

  // if we want to use backend api and NOT the dummy response

  if (numDrivers === null) return <p className="p-8 text-orange-600">Loading...</p>;

  const usedDrivers = effectiveResponse.data.coords_res.length;
  const routes: Point[][] = effectiveResponse.data.coords_res.slice(0, numDrivers);
  const times = effectiveResponse.data.times;
  const totalRouteTime = effectiveResponse.data.total_route_time;
  const colors = ["#f97316", "#22c55e", "#3b82f6", "#eab308", "#8b5cf6"];



  return (

    <div className="min-h-screen bg-white  py-16 px-4 sm:px-10 md:px-20 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-100 opacity-50 rounded-full blur-[120px] z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-00 opacity-40 rounded-full blur-[160px] z-0" />
      <div className="z-10 max-w-7xl mx-auto">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-bebas-neue">
            iJooz Route Results
            </h1>
            <p className="text-center  text-gray-400 mb-8 text-md">
            View and filter optimized routes for your drivers
            </p>

            
            {usedDrivers > 0 && !loading && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm mb-6">
                    🎉 Your optimized plan only used <strong>{usedDrivers}</strong> of the available{" "}
                    {numDrivers} drivers — saving resources and time!
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center h-64 text-orange-600">
                    <svg className="animate-spin h-6 w-6 mr-3 text-orange-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Loading route data...
                </div>
                ) : (
                    <>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Sidebar */}
                <div className="md:col-span-5 border border-orange-400 px-6 py-4 rounded-xl bg-white shadow-sm space-y-0">
                    <div className="flex items-center gap-2 text-orange-600 font-semibold text-lg mb-0">
                        <Truck className="h-5 w-5" />
                        <span>Route Viewer</span>
                    </div>

                    <div>
                    <select
                        id="driverSelect"
                        className="w-full border border-orange-300 rounded-md px-3 py-2 text-orange-700 focus:ring-orange-500 focus:border-orange-500"
                        value={selectedDriver ?? ""}
                        onChange={(e) =>
                            setSelectedDriver(e.target.value === "" ? null : parseInt(e.target.value))
                        }
                    >
                        <option value="">Show all</option>
                        {routes.map((_, i) => (
                        <option key={i} value={i}>
                            Driver {i + 1}
                        </option>
                        ))}
                    </select>
                    </div>

                    <div>
                        <ul className={selectedDriver !== null ? "list-decimal pl-5 mt-3 text-sm text-gray-600 space-y-1 columns-1 sm:columns-2 md:columns-3" : "hidden"}>
                            {(selectedDriver !== null ? routes[selectedDriver] : []).map((point, i) =>
                                i == 0 ? <li key={i}>{point.address} <span className="font-bold"> --- DEPOT</span></li> : <li key={i}>{point.address} ({point.name})</li>
                            )}
                        </ul>
                        {selectedDriver !== null && (
                        <p className="text-sm text-gray-500 mt-2">
                            Estimated Route Time:{" "}
                            <span className="font-semibold text-orange-600">
                            {(times[selectedDriver] / 60).toFixed(1)} min
                            </span>
                        </p>
                        )}
                        {selectedDriver == null && (
                        <p className="text-sm text-gray-500 mt-2">
                            Estimated Total Route Time:{" "}
                            <span className="font-semibold text-orange-600">
                            {(totalRouteTime / 60).toFixed(1)} min
                            </span>
                            <br />
                            Maximum Individual Route Time:{" "}
                            <span className="font-semibold text-orange-600">
                                {(Math.max(...times) / 60).toFixed(1)} min
                            </span>
                        </p>
                        )}
                    </div>
                </div>

            {/* Map */}
                <div className="relative md:col-span-5 h-[500px] rounded-xl overflow-hidden shadow-lg">
                    <div className="relative md:col-span-5 h-[500px] rounded-xl overflow-hidden shadow-lg">
                    <RouteMap routes={routes} selectedDriver={selectedDriver} colors={colors} />
                    </div>
                </div>
            </div>

            </>
            )}
        </div>
    </div>
  );
}
