import { Button } from 'shadcn';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
