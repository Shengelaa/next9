// export default function Home() {
//   return (
//     <main className='flex flex-col items-center justify-center h-screen p-24'>
//       <div className='text-center '>
//         <h1 className='uppercase text-white tracking-[1.5rem] font-medium py-8 text-2xl'>
//           Our Cinematic
//         </h1>
//         <div className='flex items-center justify-center space-x-4 inset-0'>
//           <button className='px-8 py-6 mx-4 bg-transparent border-white text-xs text-white uppercase transition duration-200 hover:bg-white hover:text-black'>
//             Our Work
//           </button>
//           <button className='px-8 py-6 mx-4 bg-transparent border-white text-xs text-white uppercase transition duration-200 hover:bg-white hover:text-black'>
//             Our Story
//           </button>
//         </div>
//       </div>
//       <video
//         src='/video.mp4'
//         autoPlay
//         muted
//         loop
//         className='absolute h-full w-full object-cover -z-10'
//       />
//     </main>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Collection from "../../components/Collection";

type CollectionData = {
  category: number;
  name: string;
  photos: string[];
};

export default function Home() {
  const [colections, setColections] = useState<CollectionData[]>([]);
  useEffect(() => {
    const fatchCollection = async () => {
      try {
        const response = await fetch(
          "https://6734d27e5995834c8a9100ae.mockapi.io/photos"
        );

        const data: CollectionData[] = await response.json();
        setColections(data);
        console.log(data);
      } catch (error) {
        console.error("error with fetching", error);
      }
    };
    fatchCollection();
  }, []);
  return (
    <div>
      <div>
        <h1>my collection</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Test</li>
          <li>Test2</li>
        </ul>
        <input type='text' placeholder='space' />

        <div className='grid grid-cols-3 gap-[30px] mt-[40px] sm:grid-cols-2 xs:grid-cols-1 '>
          {/* <Collection
            name='Travel Around World'
            photos={[
              "https://images.unsplash.com/photo-1613746546375-fc892a3d44a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1613401688321-f9464c7f16e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1607366631022-285d7b3f9e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1607623814075-7d87d62cfd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            ]}
          /> */}
          {colections.map((colection) => (
            <Collection
              key={colection.name}
              name={colection.name}
              photos={colection.photos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
