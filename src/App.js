import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./components/details";
import { Dna } from "react-loader-spinner";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm !== "") {
        setLoading(true);
        const result = await axios.get(
          `https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${searchTerm}&image_type=photo&pretty=true`
        );

        setData(result.data.hits);
        // setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="App relative">
      <div className="container mx-auto px-4 pt-10">
        <div className="flex items-center">
          <input
            className="w-full px-4 py-2 rounded"
            type="text"
            placeholder="Rechercher une image..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          {loading && (
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          )}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {data.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="bg-white rounded overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <img
                src={image.webformatURL}
                alt={image.tags}
                className="w-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{image.user}</div>
                <p className="text-gray-700 text-base">{image.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Details image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default App;
