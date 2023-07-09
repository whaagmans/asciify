import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { read } from 'fs';
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
    console.log(uploadedFile);
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const imageUrl = e.target?.result as string;
    //   console.log(imageUrl);
    //   setSelectedImage(imageUrl);
    // };
    // reader.readAsDataURL(uploadedFile);
    setFile(uploadedFile);
  };
  // const [selectedImage, setSelectedImage] = useState<string>();

  return (
    <div>
      <h3>File Dropper</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {/* <div>{file && `${file.name} - ${file.type}`}</div> */}
      {/* {selectedImage && (
        <Image
          className="bg-red-50"
          src={selectedImage}
          draggable
          alt="Uploaded"
          height={200}
          width={200}
        />
      )} */}
    </div>
  );
};
export default DragAndDrop;
