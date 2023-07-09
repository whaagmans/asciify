import DragAndDrop from '@/components/DragAndDrop';
import Image from 'next/image';
import { useState } from 'react';

const renderImage = (file: File) => {
  const imageUrl = URL.createObjectURL(file);
  return (
    <Image src={imageUrl} draggable alt="Uploaded" height={200} width={200} />
  );
};

export default function Home() {
  const [file, setFile] = useState<File>();

  return (
    <main>
      <h1>ASCIIFY</h1>
      <DragAndDrop file={file} setFile={setFile} />
      {file && renderImage(file)}
    </main>
  );
}
