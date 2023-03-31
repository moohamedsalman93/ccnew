import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import emptythumb from "../../assets/emptythumb.png";
import delet from "../../assets/delete.png";
import '../../css/blog/thumbnail.css';

const ImageUpload = ({onUpload}) => {
    const [file, setFile] = useState(null);

    const handleDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
    });

    const handleClick = () => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    };

    return (
        <>
            <div className='container'>
                <button
                    onClick={() => setFile(null)}
                >
                    <img src={delet} alt="delet" className='del-icon' />
                </button>
                <div  {...getRootProps()} className='image-container'>
                    {file == null ? (
                        <img src={emptythumb} alt="my" className='cloud-image' />
                    ) : (
                        <div >
                            <img src={URL.createObjectURL(file)} alt={file.name} className="image" />
                        </div>
                    )}
                </div>
                <button
                    onClick={() => onUpload(file)}
                    className="upload-button"
                    >Upload image
                </button>
                <label className='or'>OR</label>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="drag-text">Drop the file here ...</p>
                ) : (
                    <p className="drop-text">Drag and drop new file, or click to select to file upload</p>
                )}
                <p className="drop-condition">Supported files: PNG, JPG, Doc</p>
            </div>

        </>
    );
};

export default ImageUpload;