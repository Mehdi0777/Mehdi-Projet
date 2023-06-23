export default function Details({ image, onClose }) {
    
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-start justify-center bg-gray-900 bg-opacity-50 p-10 overflow-auto">
        <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden">
          <img src={image.webformatURL} alt={image.tags} />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{image.tags}</h2>
            <p>User: {image.user}</p>
            <p>Views: {image.views}</p>
            <p>Downloads: {image.downloads}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    );
  }