import  { useState } from 'react';
import axios from 'axios';

function UploadImage () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [customFileName, setCustomFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileNameChange = (event) => {
    setCustomFileName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setUploadStatus('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('customFileName', customFileName);

    try {
      const response = await axios.post('http://localhost:4500/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(response.data.imageUrl);
      setUploadStatus('File uploaded successfully.');
    } catch (error) {
      if (error.response) {
        setUploadStatus(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setUploadStatus('Error: No response from server.');
      } else {
        setUploadStatus('Error: ' + error.message);
      }
      console.error('There was an error uploading the file!', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
        <div>
          <input 
            type="text" 
            value={customFileName} 
            onChange={handleFileNameChange} 
            placeholder="Enter custom file name" 
            className="block w-full text-sm text-gray-500 border rounded py-2 px-4"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
      </form>
      {uploadStatus && <p className="mt-4">{uploadStatus}</p>}
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-4 max-w-full h-auto" />}
    </div>
  );
}

export default UploadImage;
