import { useState } from 'react';
import axios from 'axios';
import useAxios from '../../hooks/axios';
import { useErrorBoundary } from 'react-error-boundary';
function TestUpload() {
 const setBoundary = useErrorBoundary();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            console.log(selectedFile)
            formData.append('image', selectedFile);
            const axiosInstance = useAxios();

            await axiosInstance.post('/upload', formData);

            // Optionally, you can display a success message or update the image list.
        } catch (error) {
            console.error('Error uploading image:', error);
              setBoundary(error);
        }
    };

    return (
        <div>
            <h2>Image Upload</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default TestUpload;
