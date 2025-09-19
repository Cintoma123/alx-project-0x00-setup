import React from "react";
import Button from "@/components/Button";

const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Landing Page</h1>

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm px-5 py-2" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md px-5 py-2" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full px-5 py-2" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large Rounded-sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large Rounded-md" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </main>
  );
};

export default LandingPage;
