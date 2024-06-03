import { Button, Alert } from 'shadcn';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <Alert className="alert">
          This is a success alert
        </Alert>
        <Button className="button">
          Click me
        </Button>
      </div>
    </div>
  );
}
