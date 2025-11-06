function ActiveNavTab({ color }: { color: string }) {
  return (
    <svg
      width="162"
      height="44"
      viewBox="0 0 162 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_39_591)">
        <path
          d="M31.5557 2H20.8611C19.2047 2 17.7197 3.02089 17.1265 4.56739L2.00011 44H31.5557V2Z"
          fill={color}
        />
      </g>
      <rect width="100" height="42" transform="translate(30.5557 2)" fill={color} />
      <g filter="url(#filter1_d_39_591)">
        <path
          d="M129.556 2H140.25C141.907 2 143.392 3.02089 143.985 4.56739L159.111 44H129.556V2Z"
          fill={color}
        />
      </g>
      <path d="M24 1L137 1.00001" stroke="#221208" strokeWidth="2" />
      <path d="M3.5 43H159.5" stroke={color} strokeWidth="2" />
      <defs>
        <filter
          id="filter0_d_39_591"
          x="0"
          y="0"
          width="31.5557"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="-2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.133333 0 0 0 0 0.0705882 0 0 0 0 0.0313726 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_591" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_39_591"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_39_591"
          x="129.556"
          y="0"
          width="31.5557"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="-2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.133333 0 0 0 0 0.0705882 0 0 0 0 0.0313726 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_591" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_39_591"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default ActiveNavTab;
