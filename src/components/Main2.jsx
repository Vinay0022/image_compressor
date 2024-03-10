import { ReactCrop, centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import { useState } from 'react';
import { useRef } from 'react';
import setCanvasPreview from './setCanvasPreview';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;
function Main2() {
    const [crop, setCrop] = useState();
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [downloadFileName,setDownloadFileName] = useState("");
    const [imgSrc, setImgSrc] = useState('');
    const handleFileCrop = (e) => {
        const file = e.target.files?.[0];
        if (!file) return

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const ImageUrl = reader.result?.toString() || '';
            setDownloadFileName(file.name);
            setImgSrc(ImageUrl);
        })
        reader.readAsDataURL(file);
    }
    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget;
        const cropWidthPercent = (MIN_DIMENSION / width) * 100;
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    }
const downloadPreviewImage = () => {
    const canvas = previewCanvasRef.current;
    canvas.toBlob(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = downloadFileName; // Use original file name for download
        link.click();
        window.URL.revokeObjectURL(url); // Release the object URL
    }, 'image/jpeg');
};


    return (
        <>
        <div className='flex  justify-center items-center mt-12 mb-4'>
            <input className='bg-[#D9D9D9] text-black text-sm rounded-lg  p-2 file:bg-[#438181] file:rounded-lg file:p-2 mt-4 ' type='file' onChange={handleFileCrop} />
        </div>
            {imgSrc &&
                <div className='flex flex-col items-center'>
                    <ReactCrop
                        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                        crop={crop}
                        keepSelection
                        aspect={ASPECT_RATIO}
                        minWidth={MIN_DIMENSION}>
                        <img src={imgSrc} ref={imgRef} alt="upload" style={{ maxHeight: "40vh" }} onLoad={onImageLoad} />
                    </ReactCrop>
                    <button className='p-2 mt-2 bg-[#D9D9D9] rounded-xl active:translate-y-1' onClick={() => {
                        setCanvasPreview(
                            imgRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(
                                crop,
                                imgRef.current.width,
                                imgRef.current.height,
                            )
                        )
                    }}>Crop Image</button>
                </div>
            }
            {crop &&
                    <div className='flex justify-center items-center'>
                <canvas ref={previewCanvasRef} className='mt-4' style={{
                    border: "1px solid black",
                    objectFit: "contain",
                    width: 250,
                    height: 250,
                }} />
                    </div>
            }
        {downloadFileName? <div className='flex justify-center items-center'><button className='p-2 mt-2 bg-[#D9D9D9] rounded-xl active:translate-y-1' onClick={downloadPreviewImage}>Download</button></div>
        :null}
        </>
    );
}
export default Main2;

