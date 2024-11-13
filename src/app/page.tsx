"use client";
import { useEffect, useState } from "react";
import Collection from "../../components/Collection";

type CollectionData = {
  categoru: number;
  name: string;
  photos: string[];
};

type Category = {
  name: string;
};

export default function Home() {
  const [colection, setColection] = useState<CollectionData[]>([]);
  const [searchValues, setSearchValues] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);

  const myCategory: Category[] = [
    { name: "All" },
    { name: "Sea" },
    { name: "Mountains" },
    { name: "Architectory" },
    { name: "Cities" },
  ];

  useEffect(() => {
    const fatchCollection = async () => {
      try {
        const url = `https://6734d25c5995834c8a90ff8e.mockapi.io/photos${
          categoryId ? `?category=${categoryId}` : ""
        }`;
        const response = await fetch(url);

        const data: CollectionData[] = await response.json();
        setColection(data);
        console.log(data);
      } catch (error) {
        console.error("error with fetching", error);
      }
    };
    fatchCollection();
  }, [categoryId]);

  const filterCollections = colection.filter((collection) =>
    collection.name.toLowerCase().includes(searchValues.toLowerCase())
  );

  return (
    <div className='p-[50px] max-w-[1200px] w-full m-auto'>
      <h1 className='font-serif'>My Photo Collection</h1>
      <div className='flex items-center flex-wrap mt-[40px]'>
        <ul className='flex list-none p-0'>
          {myCategory.map((category, index) => (
            <li
              key={index}
              onClick={() => setCategoryId(index)}
              className={`inline-block py-[12px] px-[18px] rounded-[10px] mr-[10px] cursor-pointer font-semibold text-[18px] border-[1px] border-transparent hover:border-black active:bg-black active:text-white transition-all duration-150 ease-in-out ${
                categoryId === index ? "bg-black text-white" : "bg-white"
              }`}>
              {category.name}
            </li>
          ))}
        </ul>
        <input
          className='mt-[20px] w-[250px] h-[50px] p-[0_15px] text-[16px] rounded-[10px] border-[1px] border-[#00000033] focus:border-[#00000066] outline-none transition-all duration-150 ease-in-out'
          placeholder='Search With Name'
          value={searchValues}
          onChange={(e) => setSearchValues(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-1 gap-[30px] mt-[40px] sm:grid-cols-3 xs:grid-cols-2'>
        {/* <Collection
          name="travel around world"
          photos={[
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNlYSUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlYSUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          ]}
        />{" "} */}

        {filterCollections.map((colection) => (
          <Collection
            key={colection.name}
            name={colection.name}
            photos={colection.photos}
          />
        ))}
      </div>
    </div>
  );
}
