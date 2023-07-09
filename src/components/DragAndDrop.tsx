import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

const fileTypes = ['JPG', 'PNG', 'PDF'];

interface IDragAndDrop {
  file: File | undefined;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

const allowedTyes = ['image/jpeg', 'image/png'];

const DragAndDrop = ({ file, setFile }: IDragAndDrop) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (!uploadedFile || !allowedTyes.includes(uploadedFile.type)) {
      alert('file type not allowed');
      return;
    }
    setFile(uploadedFile);
  };

  const handleFileUpload = () => {
    if (!file) {
      return;
    }
  };

  return (
    <div>
      <h3>File Dropper</h3>
      <input type="file" onChange={handleFileChange} />
      <div>{file && `${file.name} - ${file.type}`}</div>
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};
export default DragAndDrop;
