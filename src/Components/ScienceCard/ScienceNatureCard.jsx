import React, { useState, useEffect } from 'react';
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import './index.css';
import image from '../../elements/sciencenature.svg';


// const ScienceNatureCard = (props) => {
//     // const [Animals, category] = useState();

//     return (
//        <svg className='Science' xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" width="385" zoomAndPan="magnify" viewBox="0 0 288.75 338.999992" height="452" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="98523c08a1"><path d="M 0 0.148438 L 288.5 0.148438 L 288.5 338.851562 L 0 338.851562 Z M 0 0.148438 " clip-rule="nonzero"/></clipPath><clipPath id="8f2a8f9215"><path d="M 3.042969 1.265625 L 282.6875 1.265625 L 282.6875 332 L 3.042969 332 Z M 3.042969 1.265625 " clip-rule="nonzero"/></clipPath><clipPath id="e140e5e744"><path d="M 8.179688 331.996094 L 277.335938 331.996094 C 280.039062 331.996094 282.167969 329.863281 282.167969 327.164062 L 282.167969 6.398438 C 282.167969 3.699219 280.039062 1.566406 277.335938 1.566406 L 8.179688 1.566406 C 5.480469 1.566406 3.347656 3.699219 3.347656 6.398438 L 3.347656 327.164062 C 3.347656 329.863281 5.480469 331.996094 8.179688 331.996094 Z M 8.179688 331.996094 " clip-rule="nonzero"/></clipPath><clipPath id="74e27af793"><path d="M 1.925781 0.148438 L 288.28125 0.148438 L 288.28125 338 L 1.925781 338 Z M 1.925781 0.148438 " clip-rule="nonzero"/></clipPath><clipPath id="f2028f5bd0"><path d="M 283.449219 5.121094 C 282.878906 2.277344 280.320312 0.148438 277.335938 0.148438 L 8.179688 0.148438 C 4.769531 0.148438 1.925781 2.988281 1.925781 6.398438 L 1.925781 327.164062 C 1.925781 330.148438 3.917969 332.566406 6.757812 333.277344 C 7.328125 336.117188 9.886719 338.25 12.871094 338.25 L 282.027344 338.25 C 285.4375 338.25 288.28125 335.40625 288.28125 331.996094 L 288.28125 11.234375 C 288.28125 8.246094 286.292969 5.832031 283.449219 5.121094 Z M 3.347656 327.164062 L 3.347656 6.398438 C 3.347656 3.699219 5.480469 1.566406 8.179688 1.566406 L 277.335938 1.566406 C 280.039062 1.566406 282.167969 3.699219 282.167969 6.398438 L 282.167969 327.164062 C 282.167969 329.863281 280.039062 331.996094 277.335938 331.996094 L 8.179688 331.996094 C 5.480469 331.996094 3.347656 329.863281 3.347656 327.164062 Z M 3.347656 327.164062 " clip-rule="nonzero"/></clipPath><clipPath id="0f0bdebefc"><path d="M 38 30.308594 L 241 30.308594 L 241 233.382812 L 38 233.382812 Z M 38 30.308594 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#98523c08a1)"><path fill="#ffffff" d="M 0 0.148438 L 288.5 0.148438 L 288.5 338.851562 L 0 338.851562 Z M 0 0.148438 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#8f2a8f9215)"><g clip-path="url(#e140e5e744)"><path fill="#07b4aa" d="M 1.925781 0.148438 L 288.28125 0.148438 L 288.28125 337.957031 L 1.925781 337.957031 Z M 1.925781 0.148438 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#74e27af793)"><g clip-path="url(#f2028f5bd0)"><path fill="#231f20" d="M 1.925781 0.148438 L 288.28125 0.148438 L 288.28125 337.957031 L 1.925781 337.957031 Z M 1.925781 0.148438 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#0f0bdebefc)"><path fill="#000000" d="M 193.167969 87.214844 C 193.167969 89.71875 191.121094 91.757812 188.628906 91.757812 C 186.117188 91.757812 184.070312 89.71875 184.070312 87.214844 C 184.070312 84.707031 186.117188 82.667969 188.628906 82.667969 C 191.121094 82.667969 193.167969 84.707031 193.167969 87.214844 Z M 235.070312 227.589844 L 126.773438 227.589844 L 126.773438 213.003906 L 235.070312 213.003906 Z M 137.648438 196.222656 L 161.488281 196.222656 L 161.488281 207.261719 L 137.648438 207.261719 Z M 120.78125 180.421875 L 178.332031 180.421875 L 178.332031 190.480469 L 120.78125 190.480469 Z M 193.824219 104.050781 C 197.398438 102.941406 200.507812 100.71875 202.710938 97.785156 C 226.898438 123.808594 248.398438 163.035156 221.835938 207.261719 L 186.136719 207.261719 C 209.394531 178.132812 211.828125 145.097656 193.824219 104.050781 Z M 168.132812 116.957031 L 177.445312 100.824219 C 173.503906 97.589844 170.992188 92.691406 170.992188 87.214844 C 170.992188 77.5 178.910156 69.597656 188.628906 69.597656 C 190.8125 69.597656 192.898438 69.996094 194.832031 70.726562 L 198.269531 64.789062 L 177.597656 52.871094 L 147.460938 105.042969 Z M 156.675781 125.433594 L 145.859375 119.183594 L 149.507812 112.851562 L 160.328125 119.097656 Z M 193.070312 37.441406 L 203.890625 43.6875 L 196.222656 56.976562 L 185.402344 50.730469 Z M 188.628906 99.085938 C 195.175781 99.085938 200.507812 93.757812 200.507812 87.214844 C 200.507812 80.667969 195.175781 75.339844 188.628906 75.339844 C 182.078125 75.339844 176.746094 80.667969 176.746094 87.214844 C 176.746094 93.757812 182.078125 99.085938 188.628906 99.085938 Z M 237.949219 207.261719 L 228.480469 207.261719 C 239.628906 187.269531 242.621094 166.609375 237.328125 145.765625 C 232.75 127.695312 222.03125 109.726562 205.492188 92.34375 C 205.976562 90.71875 206.246094 88.996094 206.246094 87.210938 C 206.246094 81.738281 203.734375 76.835938 199.8125 73.601562 L 204.683594 65.171875 C 205.070312 64.511719 205.164062 63.730469 204.972656 62.992188 C 204.757812 62.257812 204.277344 61.628906 203.621094 61.25 L 201.203125 59.847656 L 210.324219 44.074219 C 210.691406 43.414062 210.804688 42.628906 210.59375 41.894531 C 210.398438 41.15625 209.917969 40.53125 209.261719 40.148438 L 193.457031 31.03125 C 192.800781 30.648438 192.007812 30.546875 191.277344 30.742188 C 190.542969 30.941406 189.921875 31.421875 189.535156 32.082031 L 180.417969 47.859375 L 177.984375 46.460938 C 177.328125 46.078125 176.554688 45.976562 175.820312 46.171875 C 175.085938 46.371094 174.449219 46.851562 174.0625 47.511719 L 141.046875 104.65625 C 140.257812 106.03125 140.738281 107.785156 142.109375 108.578125 L 144.527344 109.980469 L 139.445312 118.800781 C 138.632812 120.175781 139.117188 121.929688 140.488281 122.722656 L 156.289062 131.84375 C 156.734375 132.097656 157.21875 132.226562 157.71875 132.226562 C 157.972656 132.226562 158.222656 132.195312 158.472656 132.128906 C 159.207031 131.929688 159.84375 131.449219 160.210938 130.789062 L 165.3125 121.96875 L 167.746094 123.367188 C 168.191406 123.625 168.671875 123.753906 169.175781 123.753906 C 169.425781 123.753906 169.679688 123.722656 169.929688 123.65625 C 170.664062 123.460938 171.28125 122.976562 171.667969 122.320312 L 182.429688 103.699219 C 184.128906 104.347656 185.964844 104.730469 187.875 104.8125 C 206.421875 146.097656 203.484375 178.726562 178.660156 207.261719 L 167.222656 207.261719 L 167.222656 196.222656 L 181.210938 196.222656 C 182.796875 196.222656 184.070312 194.941406 184.070312 193.351562 L 184.070312 177.550781 C 184.070312 175.964844 182.792969 174.679688 181.210938 174.679688 L 117.925781 174.679688 C 116.339844 174.679688 115.046875 175.964844 115.046875 177.550781 L 115.046875 193.351562 C 115.046875 194.941406 116.339844 196.222656 117.925781 196.222656 L 131.890625 196.222656 L 131.890625 207.261719 L 123.914062 207.261719 C 122.308594 207.261719 121.035156 208.550781 121.035156 210.132812 L 121.035156 230.464844 C 121.035156 232.050781 122.308594 233.335938 123.914062 233.335938 L 237.949219 233.335938 C 239.53125 233.335938 240.828125 232.050781 240.828125 230.464844 L 240.828125 210.132812 C 240.828125 208.550781 239.53125 207.261719 237.949219 207.261719 Z M 109.90625 225.039062 C 108.980469 226.640625 107.316406 227.589844 105.464844 227.589844 L 57.746094 227.589844 C 55.875 227.589844 54.210938 226.640625 53.304688 225.039062 C 52.378906 223.441406 52.378906 221.527344 53.304688 219.917969 L 63.484375 202.300781 C 69.53125 199.855469 73.511719 201.261719 78.496094 203.023438 C 81.992188 204.265625 85.757812 205.597656 90.414062 205.597656 C 93.371094 205.597656 96.675781 205.066406 100.5 203.636719 L 109.886719 219.917969 C 110.816406 221.527344 110.832031 223.441406 109.90625 225.039062 Z M 73.085938 185.667969 L 67.484375 195.386719 C 72.546875 194.828125 76.660156 196.28125 80.40625 197.609375 C 85.410156 199.382812 90.183594 201.070312 97.5625 198.578125 L 90.105469 185.667969 C 89.121094 183.972656 88.65625 182.195312 88.65625 180.238281 L 88.65625 160.410156 L 74.554688 160.410156 L 74.554688 180.238281 C 74.554688 182.195312 74.070312 183.972656 73.085938 185.667969 Z M 70.691406 150.984375 C 70.691406 150.765625 70.882812 150.585938 71.097656 150.585938 L 92.113281 150.585938 C 92.328125 150.585938 92.5 150.765625 92.5 150.984375 L 92.5 154.269531 C 92.5 154.484375 92.328125 154.664062 92.113281 154.664062 L 71.097656 154.664062 C 70.882812 154.664062 70.691406 154.484375 70.691406 154.269531 Z M 73.800781 58.503906 C 73.414062 51.96875 76.601562 43.644531 81.585938 37.71875 C 86.800781 43.789062 89.875 51.8125 89.371094 58.457031 C 88.90625 64.671875 84.773438 71.667969 81.625 76.492188 C 77.859375 70.703125 74.148438 64.722656 73.800781 58.503906 Z M 55.023438 108.652344 C 48.726562 103.257812 44.417969 93.4375 43.839844 83.550781 C 53.460938 84.183594 63.484375 88.574219 68.992188 94.757812 C 74.226562 100.640625 76.101562 109.25 77.878906 117.628906 C 71.058594 116.242188 60.992188 113.785156 55.023438 108.652344 Z M 94.21875 94.757812 C 99.707031 88.574219 109.734375 84.179688 119.371094 83.550781 C 118.773438 93.4375 114.464844 103.257812 108.1875 108.652344 C 102.21875 113.785156 92.152344 116.242188 85.335938 117.628906 C 87.09375 109.25 88.984375 100.640625 94.21875 94.757812 Z M 95.089844 182.792969 C 94.605469 181.964844 94.394531 181.199219 94.394531 180.238281 L 94.394531 159.960938 C 96.65625 159.050781 98.257812 156.84375 98.257812 154.269531 L 98.257812 150.984375 C 98.257812 147.597656 95.496094 144.84375 92.113281 144.84375 L 84.464844 144.84375 L 84.464844 123.660156 C 92.113281 122.167969 104.207031 119.648438 111.933594 113.007812 C 120.050781 106.035156 125.378906 92.996094 125.1875 80.5625 C 125.167969 79.011719 123.914062 77.757812 122.347656 77.734375 C 110.332031 77.542969 97 82.980469 89.914062 90.9375 C 87.59375 93.550781 85.855469 96.546875 84.464844 99.726562 L 84.464844 82.558594 C 84.523438 82.476562 84.582031 82.390625 84.640625 82.304688 C 88.308594 76.902344 94.433594 67.859375 95.109375 58.890625 C 95.804688 49.683594 91.285156 38.914062 83.578125 31.457031 C 82.476562 30.378906 80.699219 30.378906 79.578125 31.457031 C 72.257812 38.546875 67.523438 49.808594 68.042969 58.84375 C 68.527344 66.9375 73.28125 74.210938 77.453125 80.628906 C 77.878906 81.289062 78.300781 81.9375 78.726562 82.582031 L 78.726562 99.6875 C 77.335938 96.519531 75.597656 93.539062 73.28125 90.9375 C 66.210938 82.980469 52.859375 77.542969 40.84375 77.734375 C 39.300781 77.757812 38.042969 79.011719 38.023438 80.5625 C 37.832031 92.996094 43.164062 106.035156 51.277344 113.007812 C 58.984375 119.644531 71.078125 122.164062 78.726562 123.65625 L 78.726562 144.84375 L 71.097656 144.84375 C 67.714844 144.84375 64.953125 147.597656 64.953125 150.984375 L 64.953125 154.269531 C 64.953125 156.84375 66.539062 159.050781 68.796875 159.960938 L 68.796875 180.238281 C 68.796875 181.199219 68.605469 181.964844 68.121094 182.792969 L 48.320312 217.046875 C 46.367188 220.453125 46.367188 224.515625 48.320312 227.914062 C 50.269531 231.308594 53.804688 233.335938 57.746094 233.335938 L 105.464844 233.335938 C 109.402344 233.335938 112.917969 231.308594 114.890625 227.914062 C 116.84375 224.519531 116.84375 220.453125 114.871094 217.046875 Z M 95.089844 182.792969 " fill-opacity="1" fill-rule="evenodd"/></g><g fill="#000000" fill-opacity="1"><g transform="translate(14.251282, 304.407104)"><g><path d="M 8.242188 0.378906 C 12.65625 0.378906 15.265625 -1.699219 15.265625 -5.199219 C 15.265625 -8.140625 13.363281 -9.863281 9.054688 -10.828125 C 6.769531 -11.335938 5.933594 -11.894531 5.933594 -12.804688 C 5.933594 -13.667969 6.695312 -14.203125 7.886719 -14.203125 C 9.308594 -14.203125 10.117188 -13.464844 10.117188 -12.121094 L 14.9375 -12.121094 C 14.9375 -15.773438 12.148438 -18.132812 7.785156 -18.132812 C 3.601562 -18.132812 1.015625 -16.050781 1.015625 -12.707031 C 1.015625 -9.710938 2.96875 -7.863281 6.972656 -7.101562 C 9.128906 -6.667969 10.167969 -6.011719 10.167969 -4.996094 C 10.167969 -4.109375 9.410156 -3.601562 8.164062 -3.601562 C 6.695312 -3.601562 5.832031 -4.386719 5.832031 -5.757812 L 0.886719 -5.757812 C 0.886719 -1.925781 3.625 0.378906 8.242188 0.378906 Z M 8.242188 0.378906 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(30.453432, 304.407104)"><g><path d="M 10.167969 0.378906 C 15.0625 0.378906 18.765625 -2.585938 19.527344 -7.101562 L 14.328125 -7.101562 C 13.695312 -5.425781 12.199219 -4.363281 10.269531 -4.363281 C 7.785156 -4.363281 6.0625 -6.214844 6.0625 -8.875 C 6.0625 -11.5625 7.8125 -13.390625 10.320312 -13.390625 C 12.171875 -13.390625 13.71875 -12.351562 14.253906 -10.753906 L 19.425781 -10.753906 C 18.511719 -15.242188 14.859375 -18.132812 10.117188 -18.132812 C 4.640625 -18.132812 0.863281 -14.351562 0.863281 -8.875 C 0.863281 -3.398438 4.640625 0.378906 10.167969 0.378906 Z M 10.167969 0.378906 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(50.788519, 304.407104)"><g><path d="M 1.875 0 L 7 0 L 7 -17.75 L 1.875 -17.75 Z M 1.875 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(59.662933, 304.407104)"><g><path d="M 1.875 0 L 14.328125 0 L 14.328125 -4.183594 L 6.949219 -4.183594 L 6.949219 -6.921875 L 13.363281 -6.921875 L 13.363281 -11.03125 L 6.949219 -11.03125 L 6.949219 -13.617188 L 14.050781 -13.617188 L 14.050781 -17.75 L 1.875 -17.75 Z M 1.875 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(75.12977, 304.407104)"><g><path d="M 1.875 0 L 6.949219 0 L 6.949219 -9.054688 L 13.695312 0 L 17.851562 0 L 17.851562 -17.75 L 12.804688 -17.75 L 12.804688 -8.75 L 6.0625 -17.75 L 1.875 -17.75 Z M 1.875 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(94.881686, 304.407104)"><g><path d="M 10.167969 0.378906 C 15.0625 0.378906 18.765625 -2.585938 19.527344 -7.101562 L 14.328125 -7.101562 C 13.695312 -5.425781 12.199219 -4.363281 10.269531 -4.363281 C 7.785156 -4.363281 6.0625 -6.214844 6.0625 -8.875 C 6.0625 -11.5625 7.8125 -13.390625 10.320312 -13.390625 C 12.171875 -13.390625 13.71875 -12.351562 14.253906 -10.753906 L 19.425781 -10.753906 C 18.511719 -15.242188 14.859375 -18.132812 10.117188 -18.132812 C 4.640625 -18.132812 0.863281 -14.351562 0.863281 -8.875 C 0.863281 -3.398438 4.640625 0.378906 10.167969 0.378906 Z M 10.167969 0.378906 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(115.216772, 304.407104)"><g><path d="M 1.875 0 L 14.328125 0 L 14.328125 -4.183594 L 6.949219 -4.183594 L 6.949219 -6.921875 L 13.363281 -6.921875 L 13.363281 -11.03125 L 6.949219 -11.03125 L 6.949219 -13.617188 L 14.050781 -13.617188 L 14.050781 -17.75 L 1.875 -17.75 Z M 1.875 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(130.683609, 304.407104)"><g/></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(136.540728, 304.407104)"><g><path d="M 7.609375 0.378906 C 9.460938 0.378906 11.132812 -0.0742188 12.554688 -0.863281 L 13.390625 0 L 18.386719 0 L 15.292969 -3.269531 C 16.382812 -4.71875 17.015625 -6.515625 17.042969 -8.519531 L 13.085938 -8.519531 C 13.058594 -7.683594 12.855469 -6.921875 12.503906 -6.238281 L 10.652344 -8.214844 C 12.957031 -9.433594 14.203125 -11.15625 14.203125 -13.289062 C 14.203125 -16.230469 11.816406 -18.132812 8.113281 -18.132812 C 4.464844 -18.132812 2.078125 -16.28125 2.078125 -13.515625 C 2.078125 -12.222656 2.585938 -11.082031 3.957031 -9.511719 C 1.875 -8.367188 0.710938 -6.667969 0.710938 -4.640625 C 0.710938 -1.597656 3.421875 0.378906 7.609375 0.378906 Z M 5.453125 -5.019531 C 5.453125 -5.707031 5.832031 -6.238281 6.667969 -6.667969 L 9.535156 -3.703125 C 8.976562 -3.523438 8.394531 -3.421875 7.785156 -3.421875 C 6.289062 -3.421875 5.453125 -4.007812 5.453125 -5.019531 Z M 6.59375 -13.109375 C 6.59375 -13.871094 7.175781 -14.328125 8.113281 -14.328125 C 9.105469 -14.328125 9.6875 -13.847656 9.6875 -13.007812 C 9.6875 -12.199219 9.15625 -11.539062 8.011719 -11.03125 C 6.847656 -12.273438 6.59375 -12.628906 6.59375 -13.109375 Z M 6.59375 -13.109375 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(155.430558, 304.407104)"><g/></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(161.287677, 304.407104)"><g><path d="M 1.875 0 L 6.949219 0 L 6.949219 -9.054688 L 13.695312 0 L 17.851562 0 L 17.851562 -17.75 L 12.804688 -17.75 L 12.804688 -8.75 L 6.0625 -17.75 L 1.875 -17.75 Z M 1.875 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(181.039593, 304.407104)"><g><path d="M 0.125 0 L 5.554688 0 L 6.515625 -2.511719 L 12.578125 -2.511719 L 13.542969 0 L 18.996094 0 L 12.097656 -17.75 L 7.023438 -17.75 Z M 7.582031 -6.265625 L 9.558594 -11.765625 L 11.539062 -6.265625 Z M 7.582031 -6.265625 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(200.157606, 304.407104)"><g><path d="M 6.113281 0 L 11.207031 0 L 11.207031 -13.007812 L 16.609375 -13.007812 L 16.609375 -17.75 L 0.710938 -17.75 L 0.710938 -13.007812 L 6.113281 -13.007812 Z M 6.113281 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(217.475386, 304.407104)"><g><path d="M 9.511719 0.378906 C 14.304688 0.378906 17.269531 -2.535156 17.269531 -7.304688 L 17.269531 -17.75 L 12.171875 -17.75 L 12.171875 -7.632812 C 12.171875 -5.527344 11.285156 -4.414062 9.511719 -4.414062 C 7.734375 -4.414062 6.847656 -5.527344 6.847656 -7.632812 L 6.847656 -17.75 L 1.722656 -17.75 L 1.722656 -7.304688 C 1.722656 -2.535156 4.71875 0.378906 9.511719 0.378906 Z M 9.511719 0.378906 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(236.491977, 304.407104)"><g><path d="M 1.875 0 L 7 0 L 7 -5.046875 L 8.925781 -5.046875 L 11.460938 0 L 17.269531 0 L 14 -5.984375 C 15.875 -7.023438 16.941406 -8.902344 16.941406 -11.386719 C 16.941406 -15.316406 14.277344 -17.75 9.964844 -17.75 L 1.875 -17.75 Z M 6.898438 -9.128906 L 6.898438 -13.566406 L 9.28125 -13.566406 C 10.90625 -13.566406 11.792969 -12.78125 11.792969 -11.359375 C 11.792969 -9.941406 10.90625 -9.128906 9.28125 -9.128906 Z M 6.898438 -9.128906 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(254.747915, 304.407104)"><g><path d="M 1.875 0 L 14.328125 0 L 14.328125 -4.183594 L 6.949219 -4.183594 L 6.949219 -6.921875 L 13.363281 -6.921875 L 13.363281 -11.03125 L 6.949219 -11.03125 L 6.949219 -13.617188 L 14.050781 -13.617188 L 14.050781 -17.75 L 1.875 -17.75 Z M 1.875 0 "/></g></g></g></svg>
//     )
// }
// export default ScienceNatureCard

// import "./App.css";

function ScienceNatureCard() {
    const [Science, category] = useState(40);
  return (

              <button onClick={() => {category(Science);console.log("clicked");} }><img className="Science" src={image} alt=""></img> </button>
 
  );
}
export default ScienceNatureCard;