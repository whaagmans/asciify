import { Metadata } from 'next';
import ImageUploader from './imageUploader';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of this app',
};

const handleImageUpload = (file: File) => {
  return file;
};

export default function Page() {
  console.log();
  return (
    <div>
      <h1>Asciify</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
    </div>
  );
}
