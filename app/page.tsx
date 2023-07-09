import { Metadata } from 'next';

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
    </div>
  );
}
