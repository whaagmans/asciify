import DragAndDrop from '@/components/DragAndDrop';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File>();

  return (
    <main>
      <h1>ASCIIFY</h1>
      <DragAndDrop file={file} setFile={setFile} />
    </main>
  );
}
