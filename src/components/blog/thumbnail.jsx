import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import emptythumb from "../../assets/emptythumb.png";
import delet from "../../assets/delete.png";
import '../../css/blog/thumbnail.css';
import { toast } from 'react-toastify';

const apiConfig = require('../../Data/Api.json');
const api = apiConfig.api;

const ImageUpload = ({blogid,value ,onUpload }) => {
    const [file, setFile] = useState(null);

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const validTypes = ['image/png', 'image/jpeg'];
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes

        if (file && validTypes.includes(file.type) && file.size <= maxSize) {
            setFile(file);
        } else {

            toast.warn(`Please select a PNG or JPG file under 2MB`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };



    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
    });

    const handleClick = () => {
        onUpload(null);
        setFile(null);
    };

    return (
        <>
            <div className='container'>
                <button
                    onClick={handleClick} className='del-con'
                >
                    <img src={delet} alt="delet" className='del-icon' />
                </button>
                <div  {...getRootProps()} className='image-container'>
                    {
                      blogid == null ? (file == null ? (
                            <img src={emptythumb} alt="my" className='cloud-image' />
                        ) : (
                            <div >
                                <img src={URL.createObjectURL(file)} alt={file.name} className="image" />
                            </div>
                        )):
                        <div >
                                {file  == null ?<>
                                    {value == null ? (<img src={emptythumb} alt="my" className='cloud-image' />):(<img src={api+'storage/test_test/'+value} alt={value} className="image" />)}
                                </>
                                    :
                                    <img src={URL.createObjectURL(file)} alt={"noimg"} className="image" />
                                }
                        </div>
                    }
                </div>
                {
                    value == null ? (
                        <button
                            onClick={() => onUpload(file)}
                            className="upload-button"
                        >Upload image
                        </button>
                    ) : (
                        <button
                            className="uploaded-button"
                        >Uploaded
                        </button>
                    )
                }
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="drag-text">Drop the file here ...</p>
                ) : (
                    <p className="drop-text">Drag and drop new img, or click cloud img to open</p>
                )}
                <p className="drop-condition">Supported files: PNG, JPG</p>
            </div>

        </>
    );
};

export default ImageUpload;