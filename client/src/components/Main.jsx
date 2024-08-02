import { useState } from 'react';
import Navbar from './Navbar.jsx';
import imageCompression from 'browser-image-compression';

function Main() {

    //for storing the originalImage
    const [originalFile, setOriginFile] = useState(null);

    //for storing the compressedImage
    const [compressedFile, setCompressedFile] = useState(null);


    //for storing the image URL for Preview and Download
    const [previewImage, setPreviewImage] = useState(null);

    //for the name of Download Image
    const [imageName, setImageName] = useState("");

    console.log(compressedFile);


    const handleFileChange = (e) => {
        setOriginFile(e.target.files[0]);
    }


    async function handleCompressionLow() {
        const options = {
            maxSizeMB: 0.2,
            useWebWorker: true,
            maxWidthOrHeight: 1920,
        }
        try {
            const compressedImage = await imageCompression(originalFile, options);

            //need to create URL for the download attribute in anchor tag bcuz otherwise it will set the object Image.
            setCompressedFile(URL.createObjectURL(compressedImage));
            setImageName(compressedImage.name);
            setPreviewImage(URL.createObjectURL(compressedImage));
        }
        catch (err) {
            console.log(err);

        }
    }
    async function handleCompressionGood() {
        const options = {
            maxSizeMB: 0.5,
            useWebWorker: true,
            maxWidthOrHeight: 1920,
        }
        try {
            const compressedImage = await imageCompression(originalFile, options);

            //need to create URL for the download attribute in anchor tag bcuz otherwise it will set the object Image.
            setCompressedFile(URL.createObjectURL(compressedImage));
            setImageName(compressedImage.name);
            setPreviewImage(URL.createObjectURL(compressedImage));
        }
        catch (err) {
            console.log(err);

        }
    }
    async function handleCompressionHigh() {
        const options = {
            maxSizeMB: 1,
            useWebWorker: true,
            maxWidthOrHeight: 1920,
        }
        try {
            const compressedImage = await imageCompression(originalFile, options);

            //need to create URL for the download attribute in anchor tag bcuz otherwise it will set the object Image.
            setCompressedFile(URL.createObjectURL(compressedImage));
            setImageName(compressedImage.name);
            setPreviewImage(URL.createObjectURL(compressedImage));
        }
        catch (err) {
            console.log(err);

        }
    }
    return (
        <>
            <main className="max-w-4xl mx-auto flex flex-col justify-center items-center">
                <div className="text-4xl md:text-4xl mt-10 pb-2 font-bold">Image Compressor</div>
                <section className="flex flex-col justify-center items-center border-dotted w-3/4 h-60 border-4 mt-5 border-[#3A2850] bg-[#389A88]">
                    <label for="inputFile" className="mb-2 font-semibold">Upload Image</label>

                    <input type="file" id="inputFile" onChange={handleFileChange} className="bg-[#D9D9D9] text-black text-sm rounded-lg  p-2 file:bg-[#438181] file:rounded-lg file:p-2" />
                    <div className='space-x-3'>
                        <button className=" active:translate-y-1 bg-[#D9D9D9] text-black text-sm rounded-lg p-2 mt-3" onClick={handleCompressionLow}>Low</button>

                        <button className="active:translate-y-1 bg-[#D9D9D9] text-black text-sm rounded-lg p-2 mt-3" onClick={handleCompressionGood}>Good</button>

                        <button className="active:translate-y-1 bg-[#D9D9D9] text-black text-sm rounded-lg p-2 mt-3" onClick={handleCompressionHigh}>High</button>
                    </div>

                    <button className='active:translate-y-1 mt-4'>   <a href={compressedFile} className="bg-[#D9D9D9] text-black text-sm rounded-lg  p-2 mt-4 file:bg-[#438181] file:rounded-lg file:p-2" download={imageName}>Download</a>
                    </button>

                </section>

                <img src={previewImage} className='w-2/5 h-2/5 m-7 '></img>
            </main>
        </>
    )
}
export default Main;

