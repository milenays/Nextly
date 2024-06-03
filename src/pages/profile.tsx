import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar } from 'shadcn';

export default function Profile() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const onSubmit = data => {
    setMessage('Profile updated successfully!');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileImage">
              Profile Image
            </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {profileImage && (
              <Avatar 
                src={profileImage} 
                alt="Profile Image" 
                className="mt-4 rounded-full w-32 h-32 object-cover"
              />
            )}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update Profile
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}
