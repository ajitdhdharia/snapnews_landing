import React from "react";
import BackButton from "./ui/back-button";

const PrivacyContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-16 px-8 lg:py-16 bg-white bg-grid-black/[0.02]">
      <div className="mx-auto max-w-5xl">
        <BackButton />
        <div className="mt-16 markdown-content prose max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
