import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Video Upload App</h1>
        
      
      </div>
      <p className="flex justify-center text-lg text-gray-700 mb-6">
          This app allows you to upload and share videos easily.
        </p>
      <div className="flex justify-center">
        <a
          href="/sign-in"
          className="btn btn-primary"
        >
          Sign In
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="/sign-up"
          className="btn btn-secondary"
        >
          Sign Up
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="/home"
          className="btn btn-accent"
        >
          Go to Home
        </a>
      </div>
    </>
  );
}
