import { IFileUploadComponent } from '@/interfaces/fileUpload';
import { ChangeEvent, useState } from 'react';

const FIRST_IMAGE = 0;

const FileUploadComponent: React.FC<IFileUploadComponent> = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);

  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[FIRST_IMAGE]) {
      const image = event.target.files[FIRST_IMAGE];
      setImage(image);
      setCreateObjectURL(URL.createObjectURL(image));
    }
  };
};

export default ImageUploadComponent;
