import React from "react";

function Banner({ store }) {
  return (
    <div className="banner-container">
      <div className="banner">Banner</div>
      <style jsx>{`
        .banner {
          border-bottom: 1px solid black;
        }
      `}</style>
    </div>
  );
}

export default Banner;