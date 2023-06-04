import { useState } from "react";
import imageCompression from "browser-image-compression";
export default function App() {
  const [originalFile, setOriginalFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);

  const handleFileChange = (event) => {
    setOriginalFile(event.target.files[0]);
  };

  const handleCompress = async () => {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
      };

      const compressedImage = await new imageCompression(originalFile, options);

      setCompressedFile(compressedImage);
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center border-4 border-black  p-4 ">
        <div>
          <div className="text-3xl my-5 mx-4 ">Image Compressor</div>
          <img
            className="h-min w-min"
            src={process.env.PUBLIC_URL + "/images/Upload.png"}
          />
          <div className="border-4 border-black my-4 md:px-3 py-10 grid ">
            <label className="px-3 text-2xl"> Upload</label>
            <input
              className="my-3 px-3 py-2"
              type="file"
              onChange={handleFileChange}
            />
            <button
              className=" border-4 border-black h-10 mx-3 px-3 w-max"
              onClick={handleCompress}
            >
              Compress Image
            </button>
          </div>
        </div>
        <div>
          {compressedFile && (
            <img
              className="my-10 h-min w-min  md:px-3 "
              src={URL.createObjectURL(compressedFile)}
              alt="Compressed Image"
            />
          )}
        </div>
      </div>
      </div>
    </>
  );
}
