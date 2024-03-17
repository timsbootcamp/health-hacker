import React, { useState, useEffect } from 'react';
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import './index.css';
import image from '../../elements/entertainmentMusic.svg';

// const MusicCard = (props) => {
//     // const [radius, setRadius] = useState(40);

//     return (
//         <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={399}
//     height={455}
//     viewBox="0 0 288 336.75"
//     {...props}
//   >
//     <defs>
//       <filter id="a" width="100%" height="100%" x="0%" y="0%">
//         <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
//       </filter>
//       <mask id="b">
//         <g filter="url(#a)">
//           <path d="M-28.8-33.675h345.6v404.1H-28.8z" />
//         </g>
//       </mask>
//     </defs>
//     <g mask="url(#b)">
//       <path fill="#cb6ce6" d="M2.402 1.934h282.051v259.73H2.403Zm0 0" />
//     </g>
//     <path fill="#ff9003" d="M2.402 0h284.754v335.922H2.402Zm0 0" />
//     <path fill="#231f20" d="M2.402 0h284.754v335.922H2.402Zm0 0" />
//     <path d="M236.117 35.336a2.698 2.698 0 0 0-2.347-.395l-48.801 15.192a2.628 2.628 0 0 0-1.867 2.535v40.66c-2.41-1.93-5.391-3.137-8.707-3.137-7.711 0-13.977 6.27-13.977 13.989 0 7.715 6.266 13.984 13.977 13.984 7.71 0 13.98-6.27 13.98-13.984V72.742l43.555-13.566v18.93c-2.407-1.93-5.39-3.133-8.703-3.133-7.711 0-13.977 6.27-13.977 13.984 0 7.719 6.266 13.988 13.977 13.988 7.71 0 13.976-6.27 13.976-13.988V37.445c0-.843-.39-1.629-1.086-2.11Zm-61.722 77.555c-4.79 0-8.704-3.918-8.704-8.711s3.914-8.711 8.704-8.711c4.789 0 8.707 3.918 8.707 8.71 0 4.794-3.887 8.712-8.707 8.712Zm13.98-45.664v-12.63l43.555-13.566v12.63Zm34.852 30.441c-4.79 0-8.707-3.918-8.707-8.711s3.917-8.71 8.707-8.71c4.789 0 8.703 3.917 8.703 8.71 0 4.793-3.914 8.711-8.703 8.711ZM95.773 172.813l-30.785 9.585a2.618 2.618 0 0 0-1.867 2.532v23.843a9.55 9.55 0 0 0-4.52-1.148c-5.39 0-9.788 4.402-9.788 9.797 0 5.394 4.398 9.797 9.789 9.797 5.39 0 9.789-4.403 9.789-9.797v-19.078l25.515-7.957v8.8a9.58 9.58 0 0 0-4.52-1.144c-5.39 0-9.788 4.398-9.788 9.793 0 5.398 4.398 9.797 9.789 9.797 5.394 0 9.789-4.399 9.789-9.797v-32.524c0-.843-.39-1.625-1.082-2.136a2.738 2.738 0 0 0-2.32-.363Zm-37.171 49.101c-2.5 0-4.52-2.02-4.52-4.523 0-2.5 2.02-4.52 4.52-4.52 2.5 0 4.52 2.02 4.52 4.52a4.515 4.515 0 0 1-4.52 4.523Zm9.789-29.148v-5.938l25.515-7.957v5.906Zm20.996 19.562c-2.5 0-4.52-2.02-4.52-4.52a4.515 4.515 0 0 1 4.52-4.523c2.5 0 4.52 2.02 4.52 4.524 0 2.5-2.02 4.52-4.52 4.52ZM213.828 165.156c.242.059.45.09.692.09 1.175 0 2.23-.781 2.53-1.957 3.345-12.512-4.097-25.441-16.597-28.785-1.418-.363-2.863.45-3.223 1.867a2.602 2.602 0 0 0 1.868 3.227c9.699 2.59 15.484 12.629 12.89 22.332-.39 1.386.453 2.836 1.84 3.226ZM113.246 141.102c1.899 0 3.133-.059 3.402-.09a2.485 2.485 0 0 0 1.778-.844c1.355-1.508 33.226-36.922 17.504-70.05-5.938-12.509-20.938-17.845-33.438-11.907-8.316 3.95-13.558 12-14.187 20.828-7.262-5.094-16.813-6.059-25.184-2.11-6.027 2.864-10.605 7.93-12.863 14.258-2.262 6.333-1.93 13.141.965 19.2 13.523 28.457 50.484 30.715 62.023 30.715ZM55.258 92.996c1.777-5.004 5.39-8.98 10.152-11.242 8.281-3.95 18.102-1.719 23.918 5.426.754.933 2.078 1.234 3.192.722 1.085-.511 1.687-1.718 1.445-2.922-1.867-9.015 2.562-18.058 10.816-21.976 4.79-2.29 10.18-2.563 15.153-.781 4.968 1.777 8.976 5.394 11.265 10.187 12.985 27.309-11.355 58.024-15.906 63.387-7.02.21-46.27-.332-59.254-27.64-2.316-4.762-2.559-10.157-.781-15.16Zm0 0" />
//     <path d="M203.586 122.836c-13.406-3.586-27.324.906-36.09 11.094-2.137-11.274-9.578-20.95-20.273-25.743-1.325-.601-2.891 0-3.493 1.329-.601 1.324 0 2.89 1.325 3.496 11.086 4.972 18.074 16.093 17.773 28.363-.031 1.203.785 2.29 1.957 2.621a2.6 2.6 0 0 0 2.985-1.266c6.746-12.328 20.906-18.417 34.43-14.77 7.773 2.08 14.308 7.114 18.347 14.106 4.066 7.024 5.148 15.192 3.039 23-11.867 44.309-70.879 55.13-79.586 56.485-5.992-4.82-41.508-35.086-42.504-72.098-.027-1.45-1.203-2.652-2.71-2.562-1.446.03-2.59 1.265-2.56 2.71 1.145 42.774 43.618 75.477 45.426 76.833.45.363 1.024.543 1.598.543.117 0 .21 0 .328-.028 2.922-.363 71.426-9.437 85.129-60.558 2.473-9.16 1.207-18.778-3.555-27.004-4.789-8.2-12.441-14.11-21.566-16.551ZM21.578 274.03h13.059v-4.386h-7.739v-2.875h6.727v-4.309h-6.727v-2.71h7.446v-4.337H21.578ZM37.8 274.03h5.32v-9.496l7.074 9.497h4.364v-18.618h-5.293v9.442l-7.078-9.442H37.8ZM62.958 274.03h5.347v-13.644h5.664v-4.973H57.294v4.973h5.664ZM76.68 274.03h13.058v-4.386H82v-2.875h6.727v-4.309H82v-2.71h7.445v-4.337H76.68ZM92.902 274.03h5.37v-5.292h2.024l2.66 5.293h6.09l-3.43-6.278c1.965-1.09 3.083-3.058 3.083-5.664 0-4.125-2.793-6.676-7.313-6.676h-8.484Zm5.265-9.574V259.8h2.5c1.703 0 2.633.824 2.633 2.316 0 1.489-.93 2.34-2.633 2.34ZM116.49 274.03h5.348v-13.644h5.664v-4.973h-16.676v4.973h5.664ZM128.376 274.03h5.692l1.012-2.632h6.355l1.012 2.633h5.718l-7.234-18.618h-5.32Zm7.82-6.57 2.075-5.77 2.074 5.77ZM150.264 274.03h5.37v-18.617h-5.37ZM159.572 274.03h5.32v-9.496l7.074 9.497h4.363v-18.618h-5.293v9.442l-7.078-9.442h-4.386ZM180.288 274.03h5.32v-9.44l3.59 5.026h3.484l3.563-5v9.415h5.32v-18.618h-4.363l-6.277 8.856-6.25-8.856h-4.387ZM205.499 274.03h13.058v-4.386h-7.738v-2.875h6.726v-4.309h-6.726v-2.71h7.445v-4.337H205.5ZM221.72 274.03h5.32v-9.496l7.075 9.497h4.363v-18.618h-5.293v9.442l-7.078-9.442h-4.386ZM246.878 274.03h5.348v-13.644h5.664v-4.973h-16.676v4.973h5.664ZM262.249 274.378c1.648 0 2.82-1.172 2.82-2.77 0-1.593-1.172-2.765-2.82-2.765-1.676 0-2.848 1.172-2.848 2.766 0 1.597 1.172 2.77 2.848 2.77ZM259.4 262.3c0 1.598 1.172 2.766 2.848 2.766 1.648 0 2.82-1.168 2.82-2.766 0-1.594-1.172-2.766-2.82-2.766-1.676 0-2.848 1.172-2.848 2.766ZM98.302 310.753h5.32v-9.441l3.59 5.027h3.485l3.562-5v9.414h5.32v-18.617h-4.363l-6.277 8.856-6.25-8.856h-4.387ZM131.517 311.152c5.027 0 8.14-3.059 8.14-8.059v-10.957h-5.347v10.61c0 2.21-.93 3.378-2.793 3.378-1.86 0-2.793-1.168-2.793-3.379v-10.609h-5.371v10.957c0 5 3.136 8.059 8.164 8.059ZM150.134 311.152c4.629 0 7.367-2.18 7.367-5.852 0-3.086-1.996-4.894-6.516-5.902-2.394-.535-3.273-1.117-3.273-2.078 0-.903.8-1.461 2.05-1.461 1.489 0 2.34.77 2.34 2.18h5.055c0-3.829-2.926-6.301-7.504-6.301-4.386 0-7.101 2.18-7.101 5.691 0 3.137 2.05 5.078 6.25 5.875 2.261.453 3.351 1.145 3.351 2.211 0 .93-.797 1.46-2.097 1.46-1.543 0-2.45-.823-2.45-2.26h-5.187c0 4.019 2.875 6.437 7.715 6.437ZM160.451 310.753h5.371v-18.617h-5.37ZM178.454 311.152c5.137 0 9.02-3.114 9.817-7.848h-5.453c-.665 1.758-2.235 2.875-4.254 2.875-2.61 0-4.418-1.941-4.418-4.734 0-2.82 1.836-4.735 4.468-4.735 1.942 0 3.567 1.09 4.125 2.766h5.426c-.957-4.707-4.789-7.738-9.762-7.738-5.746 0-9.707 3.96-9.707 9.707 0 5.746 3.961 9.707 9.758 9.707Zm0 0" />
//   </svg>
//     )
// }

// export default MusicCard

function MusicCard() {
  const [Sports, category] = useState(40);
return (

            <button onClick={() => {category(Sports);console.log("clicked");} }><img className="Sports" src={image} alt=""></img> </button>

);
}
export default MusicCard;