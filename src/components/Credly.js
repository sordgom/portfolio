import React, { useEffect } from 'react';

const EmbedCredlyBadge = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      data-iframe-width="150" 
      data-iframe-height="270" 
      data-share-badge-id="f7d26e23-cb62-449f-bbb8-6a3405178c72" 
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default EmbedCredlyBadge;
