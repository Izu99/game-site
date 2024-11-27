import React from 'react';

const RoundedCorner = ({ src, width = 300, height = 200, borderRadius = 20, alt = 'Image' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="rounded-corner-clip">
          <rect
            x="0"
            y="0"
            width={width}
            height={height}
            rx={borderRadius}
            ry={borderRadius}
          />
        </clipPath>
      </defs>
      <image
        href={src}
        width={width}
        height={height}
        clipPath="url(#rounded-corner-clip)"
        preserveAspectRatio="xMidYMid slice"
        alt={alt}
      />
    </svg>
  );
};

export default RoundedCorner;
