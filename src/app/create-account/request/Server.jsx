"use client"

import React, { useEffect } from "react";

function Server() {
  useEffect(() => {
    const urls = [
      "https://bitcrunch-predictfuture.onrender.com/",
      "https://bitcrunch-1.onrender.com/",
      "https://bitcrunch-risk.onrender.com/",
    ];

      urls.forEach((url) => {
          fetch(url)
              .then((response) => response.json())
              .then((data) => console.log("Fetched data from ${url}:, data)"))
                  .catch((error) => console.error("Error fetching from ${url}:, error)"))
    });
  }, []); // Runs only once when the component mounts

  return <div></div>;
}

export default Server;