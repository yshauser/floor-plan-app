export interface Point {
    x: number;
    y: number;
  }

export interface Room {
    x: number;
    y: number;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    exitX: number;
    exitY: number;
  }

export interface RoomData {
    [key: string]: Room;
  }

export interface Junction {
  [key: string]: Point;
}

// export const svgContent = `
// <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="792" height="612" viewBox="0 0 792 612">
//   <defs>
//     <clipPath id="clip_0">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_1">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_2">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_3">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_4">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_5">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_6">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_7">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//     <clipPath id="clip_8">
//       <path transform="matrix(1,0,0,-1,0,612)" d="M.000011802 0H792V612H.000011802Z" clip-rule="evenodd"/>
//     </clipPath>
//   </defs>
//   <g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M518.96 263H677.11V474.94H518.96Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M518.96 263H677.11V474.94H518.96Z"/>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M518.96 423.87H552.82907V474.94H518.96Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M518.96 423.87H552.82907V474.94H518.96Z"/>
//     <g clip-path="url(#clip_0)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-446.2" x="525.58 530.8194 536.8212 542.0606">4N01</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M518.96 343.42H552.82907V394.49003H518.96Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M518.96 343.42H552.82907V394.49003H518.96Z"/>
//     <g clip-path="url(#clip_1)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.75" font-family="Calibri">
//         <tspan y="-365.65" x="525.58 530.81576 536.812 542.0477">4N04</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M581.1 343.41H614.969V394.48H581.1Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M581.1 343.41H614.969V394.48H581.1Z"/>
//     <g clip-path="url(#clip_2)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-365.65" x="587.78 593.0194 599.02127 604.2606">4N05</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M643.23 423.87H677.099V474.94H643.23Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M643.23 423.87H677.099V474.94H643.23Z"/>
//     <g clip-path="url(#clip_3)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-446.2" x="649.95 655.1894 661.21078 666.45016">4N03</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M643.22 343.41H677.089V394.48H643.22Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M643.22 343.41H677.089V394.48H643.22Z"/>
//     <g clip-path="url(#clip_4)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-365.65" x="649.95 655.1894 661.1912 666.4306">4N06</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M518.96 262.96H552.82907V314.03H518.96Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M518.96 262.96H552.82907V314.03H518.96Z"/>
//     <g clip-path="url(#clip_5)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-285.1" x="525.58 530.8194 536.8212 542.0606">4N11</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M581.1 262.95H614.969V314.02003H581.1Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M581.1 262.95H614.969V314.02003H581.1Z"/>
//     <g clip-path="url(#clip_6)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.75" font-family="Calibri">
//         <tspan y="-285.07" x="587.78 593.01577 599.012 604.24777">4N12</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M643.23 262.96H677.099V314.03H643.23Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M643.23 262.96H677.099V314.03H643.23Z"/>
//     <g clip-path="url(#clip_7)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-285.1" x="649.97 655.20938 661.2112 666.45059">4N13</tspan>
//       </text>
//     </g>
//     <path transform="matrix(1,0,0,-1,0,612)" d="M581.1 423.87H614.969V474.94H581.1Z" fill="#ffffff" fill-rule="evenodd"/>
//     <path transform="matrix(1,0,0,-1,0,612)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M581.1 423.87H614.969V474.94H581.1Z"/>
//     <g clip-path="url(#clip_8)">
//       <text xml:space="preserve" transform="matrix(1 0 -0 1 0 612)" font-size="9.775" font-family="Calibri">
//         <tspan y="-446.2" x="587.78 593.0194 599.02127 604.2606">4N02</tspan>
//       </text>
//     </g>
//   </g>
// </svg>
// `;

export const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="5328" height="4644" viewBox="0 0 5328 4644">
<defs>
<clipPath id="clip_0">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_1">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_2">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_3">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_4">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_5">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_6">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_7">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_8">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_9">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_10">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_11">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_12">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_13">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_14">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_15">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_16">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_17">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_18">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_19">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_20">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_21">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_22">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_23">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_24">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_25">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_26">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_27">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_28">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_29">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_30">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_31">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_32">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_33">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_34">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_35">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_36">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_37">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_38">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_39">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_40">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_41">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_42">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_43">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_44">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_45">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_46">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_47">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_48">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_49">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_50">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_51">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_52">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_53">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_54">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_55">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_56">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_57">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_58">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_59">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_60">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_61">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_62">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_63">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_64">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_65">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_66">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_67">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_68">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_69">
<path transform="matrix(1,0,0,-1,0,4644)" d="M-.00018311 4644H5328V-.00097656L-.00012207-.00048828" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_70">
<path transform="matrix(1,0,0,-1,0,4644)" d="M-.00018311 4644H5328V-.00097656L-.00012207-.00048828" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_71">
<path transform="matrix(1,0,0,-1,0,4644)" d="M0 4644H5328V.00097656H0" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_72">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_73">
<path transform="matrix(1,0,0,-1,0,4644)" d="M.000079393 0H5328V4644H.000079393Z" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_74">
<path transform="matrix(1,0,0,-1,0,4644)" d="M-.000091553 4644H5328V.0014648L-.00039673 .00097656" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_75">
<path transform="matrix(1,0,0,-1,0,4644)" d="M-.000091553 4644H5328V.0014648L-.00039673 .00097656" clip-rule="evenodd"/>
</clipPath>
<clipPath id="clip_76">
<path transform="matrix(1,0,0,-1,0,4644)" d="M-.00018311 4644H5328V.0019531L0 .00097656" clip-rule="evenodd"/>
</clipPath>
</defs>
<g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M53.071 55.336H4865.95L53.22 4450.67 53.071 55.336Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M53.071 55.336H4865.95L53.22 4450.67 53.071 55.336Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M160.49 3558.19H376.48V3774.18H160.49Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M160.49 3558.19H376.48V3774.18H160.49Z"/>
<g clip-path="url(#clip_0)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3660.62" x="249.03 258.03 270.01799 279.01799">4N15</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M54.23 3905.02H162.23V3977.02H54.23Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M54.23 3905.02H162.23V3977.02H54.23Z"/>
<g clip-path="url(#clip_1)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3935.5" x="83.55 92.55 104.538 113.538 122.538">4N16A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M160.47 3905.03H268.47V3977.03H160.47Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M160.47 3905.03H268.47V3977.03H160.47Z"/>
<g clip-path="url(#clip_2)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3935.5" x="190.1 199.11801 211.12403 220.14203 229.16004">4N16B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M268.47 3905.03H376.47V3977.03H268.47Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M268.47 3905.03H376.47V3977.03H268.47Z"/>
<g clip-path="url(#clip_3)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3935.5" x="298.23 307.23 319.218 328.218 337.218">4N16C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M54.23 3832.93H162.23V3904.93H54.23Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M54.23 3832.93H162.23V3904.93H54.23Z"/>
<g clip-path="url(#clip_4)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3863.4" x="72.25 81.25 93.238 102.238 111.238">4N16D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M160.48 3832.93H268.47999V3904.93H160.48Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M160.48 3832.93H268.47999V3904.93H160.48Z"/>
<g clip-path="url(#clip_5)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3863.4" x="190.63 199.63 211.61801 220.61801 229.61801">4N16E</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M268.47 3832.92H376.47V3904.92H268.47Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M268.47 3832.92H376.47V3904.92H268.47Z"/>
<g clip-path="url(#clip_6)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3863.4" x="298.88 307.898 319.904 328.922 337.94">4N16F</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M54.23 3558.2H162.22V3774.19H54.23Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M54.23 3558.2H162.22V3774.19H54.23Z"/>
<g clip-path="url(#clip_7)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3660.62" x="88.75 97.75 109.738 118.738">4N14</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 3558.2H685.73L478.43 3754.62V3558.2Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 3558.2H685.73L478.43 3754.62V3558.2Z"/>
<g clip-path="url(#clip_8)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3601.72" x="510.83 519.83 531.818 540.818">4N37</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M53.352 3427.44H161.352V3499.44H53.352Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M53.352 3427.44H161.352V3499.44H53.352Z"/>
<g clip-path="url(#clip_9)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3457.85" x="82.675 91.675 103.663 112.663 121.663">4N13A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M159.6 3427.45H267.6V3499.45H159.6Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M159.6 3427.45H267.6V3499.45H159.6Z"/>
<g clip-path="url(#clip_10)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3457.85" x="189.22 198.22 210.20801 219.20801 228.20801">4N13B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M267.6 3427.45H375.6V3499.45H267.6Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M267.6 3427.45H375.6V3499.45H267.6Z"/>
<g clip-path="url(#clip_11)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3457.85" x="297.35 306.35 318.33799 327.33799 336.33799">4N13C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M53.352 3355.35H161.352V3427.35H53.352Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M53.352 3355.35H161.352V3427.35H53.352Z"/>
<g clip-path="url(#clip_12)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3385.75" x="71.375 80.375 92.363 101.363 110.363">4N13D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M159.6 3355.35H267.6V3427.35H159.6Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M159.6 3355.35H267.6V3427.35H159.6Z"/>
<g clip-path="url(#clip_13)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3385.75" x="189.75 198.75 210.738 219.738 228.738">4N13E</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M267.6 3355.34H375.6V3427.34H267.6Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M267.6 3355.34H375.6V3427.34H267.6Z"/>
<g clip-path="url(#clip_14)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3385.72" x="298 307 318.98799 327.98799 336.98799">4N13F</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M54.238 3224.6H162.238V3296.6H54.238Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M54.238 3224.6H162.238V3296.6H54.238Z"/>
<g clip-path="url(#clip_15)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3254.97" x="83.075 92.075 104.062999 113.062999 122.062999">4N13G</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M160.48 3224.61H268.47999V3296.61H160.48Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M160.48 3224.61H268.47999V3296.61H160.48Z"/>
<g clip-path="url(#clip_16)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3254.97" x="189.4 198.4 210.388 219.388 228.388">4N13H</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M54.238 3152.51H162.238V3224.51H54.238Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M54.238 3152.51H162.238V3224.51H54.238Z"/>
<g clip-path="url(#clip_17)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3182.87" x="86.5 95.5 107.488 116.488 125.488">4N13I</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M160.49 3152.51H268.49V3224.51H160.49Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M160.49 3152.51H268.49V3224.51H160.49Z"/>
<g clip-path="url(#clip_18)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3182.87" x="192.15 201.15 213.138 222.138 231.138">4N13J</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M53.356 2862.63H161.346V3078.6199H53.356Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M53.356 2862.63H161.346V3078.6199H53.356Z"/>
<g clip-path="url(#clip_19)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2964.95" x="87.875 96.875 108.863 117.863">4N11</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M160.5 2862.63H268.49V3078.6199H160.5Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M160.5 2862.63H268.49V3078.6199H160.5Z"/>
<g clip-path="url(#clip_20)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2964.95" x="195.03 204.03 216.018 225.018">4N12</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M107.34 2842.26 119.97 2852.39 107.34 2862.53 94.723 2852.39 107.34 2842.26Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M107.34 2842.26 119.97 2852.39 107.34 2862.53 94.723 2852.39 107.34 2842.26Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M214.5 3081.57 227.12 3091.71 214.5 3101.85 201.87 3091.71 214.5 3081.57Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M214.5 3081.57 227.12 3091.71 214.5 3101.85 201.87 3091.71 214.5 3081.57Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M107.35 3774.28 119.97 3784.41 107.35 3794.55 94.73 3784.41 107.35 3774.28Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M107.35 3774.28 119.97 3784.41 107.35 3794.55 94.73 3784.41 107.35 3774.28Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M387.37 3578.99 399.99 3589.13 387.37 3599.27 374.75 3589.13 387.37 3578.99Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M387.37 3578.99 399.99 3589.13 387.37 3599.27 374.75 3589.13 387.37 3578.99Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M52.499 2574.31H268.489V2790.3H52.499Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M52.499 2574.31H268.489V2790.3H52.499Z"/>
<g clip-path="url(#clip_21)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2676.57" x="141.02 150.02 162.00801 171.00801">4N10</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M52.502 2193.51H160.502V2265.51H52.502Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M52.502 2193.51H160.502V2265.51H52.502Z"/>
<g clip-path="url(#clip_22)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2223.7" x="81.475 90.475 102.463 111.463 120.463">4N09D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M158.75 2193.52H266.75V2265.52H158.75Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M158.75 2193.52H266.75V2265.52H158.75Z"/>
<g clip-path="url(#clip_23)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2223.72" x="188.88 197.88 209.86801 218.86801 227.86801">4N09E</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M266.75 2193.52H374.75V2265.52H266.75Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M266.75 2193.52H374.75V2265.52H266.75Z"/>
<g clip-path="url(#clip_24)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2223.72" x="297.15 306.15 318.13798 327.13798 336.13798">4N09F</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M52.502 2121.42H160.502V2193.42H52.502Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M52.502 2121.42H160.502V2193.42H52.502Z"/>
<g clip-path="url(#clip_25)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2151.6" x="81.825 90.825 102.812999 111.812999 120.812999">4N09A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M158.75 2121.42H266.75V2193.42H158.75Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M158.75 2121.42H266.75V2193.42H158.75Z"/>
<g clip-path="url(#clip_26)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2151.6" x="188.4 197.4 209.388 218.388 227.388">4N09B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M266.75 2121.41H374.75V2193.41H266.75Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M266.75 2121.41H374.75V2193.41H266.75Z"/>
<g clip-path="url(#clip_27)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2151.6" x="296.5 305.5 317.48799 326.48799 335.48799">4N09C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M52.502 2419.96H160.502V2491.96H52.502Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M52.502 2419.96H160.502V2491.96H52.502Z"/>
<g clip-path="url(#clip_28)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2450.2" x="84.75 93.75 105.738 114.738 123.738">4N09I</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M158.75 2419.97H266.75V2491.97H158.75Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M158.75 2419.97H266.75V2491.97H158.75Z"/>
<g clip-path="url(#clip_29)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2450.2" x="190.4 199.4 211.388 220.388 229.388">4N09J</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M52.502 2347.87H160.502V2419.87H52.502Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M52.502 2347.87H160.502V2419.87H52.502Z"/>
<g clip-path="url(#clip_30)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2378.1" x="81.35 90.35 102.338 111.338 120.338">4N09G</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M158.75 2347.87H266.75V2419.87H158.75Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M158.75 2347.87H266.75V2419.87H158.75Z"/>
<g clip-path="url(#clip_31)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2378.1" x="187.68 196.68 208.668 217.668 226.668">4N09H</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M51.613 1817.26H267.603V2033.25H51.613Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M51.613 1817.26H267.603V2033.25H51.613Z"/>
<g clip-path="url(#clip_32)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1919.4" x="140.13 149.13 161.11801 170.11801">4N30</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M51.62 1513.12H377.36V1729.11H51.62Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M51.62 1513.12H377.36V1729.11H51.62Z"/>
<g clip-path="url(#clip_33)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-1615.23" x="195.03 204.02448 216.0111 225.00557">4N32</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.116 1126.49H163.116V1198.49H55.116Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.116 1126.49H163.116V1198.49H55.116Z"/>
<g clip-path="url(#clip_34)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1156.52" x="84.1 93.1 105.088 114.088 123.088">4N05D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.36 1126.5H269.36V1198.5H161.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.36 1126.5H269.36V1198.5H161.36Z"/>
<g clip-path="url(#clip_35)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1156.52" x="191.5 200.5 212.488 221.488 230.488">4N05E</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M269.36 1126.5H377.36V1198.5H269.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M269.36 1126.5H377.36V1198.5H269.36Z"/>
<g clip-path="url(#clip_36)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1156.52" x="299.78 308.78 320.76799 329.76799 338.76799">4N05F</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.116 1054.4H163.116V1126.4H55.116Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.116 1054.4H163.116V1126.4H55.116Z"/>
<g clip-path="url(#clip_37)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1084.43" x="84.425 93.425 105.413 114.413 123.413">4N05A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.37 1054.4H269.37V1126.4H161.37Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.37 1054.4H269.37V1126.4H161.37Z"/>
<g clip-path="url(#clip_38)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1084.43" x="191 200 211.988 220.988 229.988">4N05B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M269.36 1054.39H377.36V1126.39H269.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M269.36 1054.39H377.36V1126.39H269.36Z"/>
<g clip-path="url(#clip_39)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1084.4" x="299.1 308.1 320.08799 329.08799 338.08799">4N05C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.116 1352.95H163.116V1424.95H55.116Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.116 1352.95H163.116V1424.95H55.116Z"/>
<g clip-path="url(#clip_40)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-1383.02" x="86.775 95.76948 107.7561 116.75057 125.74505">4N05J</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.36 1352.96H269.36V1424.96H161.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.36 1352.96H269.36V1424.96H161.36Z"/>
<g clip-path="url(#clip_41)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1383.02" x="191.23 200.23 212.218 221.218 230.218">4N05K</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.116 1280.85H163.116V1352.85H55.116Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.116 1280.85H163.116V1352.85H55.116Z"/>
<g clip-path="url(#clip_42)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1310.9" x="83.95 92.95 104.937999 113.937999 122.937999">4N05G</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.37 1280.85H269.37V1352.85H161.37Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.37 1280.85H269.37V1352.85H161.37Z"/>
<g clip-path="url(#clip_43)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1310.9" x="190.3 199.3 211.28801 220.28801 229.28801">4N05H</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M269.36 1352.95H377.36V1424.95H269.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M269.36 1352.95H377.36V1424.95H269.36Z"/>
<g clip-path="url(#clip_44)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-1383.02" x="300.13 309.12449 321.11109 330.10557 339.10005">4N05L</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M269.37 1280.85H377.37V1352.85H269.37Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M269.37 1280.85H377.37V1352.85H269.37Z"/>
<g clip-path="url(#clip_45)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1310.9" x="301.65 310.65 322.63798 331.63798 340.63798">4N05I</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.38 756.06H377.37V972.05H161.38Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.38 756.06H377.37V972.05H161.38Z"/>
<g clip-path="url(#clip_46)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-858.03" x="249.92 258.91999 270.90797 279.90797">4N04</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.123 756.06H163.113V972.05H55.123Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.123 756.06H163.113V972.05H55.123Z"/>
<g clip-path="url(#clip_47)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-858.05" x="89.65 98.64448 110.6311 119.62557">4N03</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M109.12 735.7 121.74 745.83 109.12 755.97 96.494 745.83 109.12 735.7Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M109.12 735.7 121.74 745.83 109.12 755.97 96.494 745.83 109.12 735.7Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M182.59 636.39 195.21 646.53 182.59 656.67 169.97 646.53 182.59 636.39Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M182.59 636.39 195.21 646.53 182.59 656.67 169.97 646.53 182.59 636.39Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.13 596.14H163.13V668.14H55.13Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.13 596.14H163.13V668.14H55.13Z"/>
<g clip-path="url(#clip_48)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-626.08" x="84.45 93.45 105.437999 114.437999 123.437999">4N02A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.37 596.15H269.37V668.15H161.37Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.37 596.15H269.37V668.15H161.37Z"/>
<g clip-path="url(#clip_49)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-626.1" x="191 200.018 212.02402 221.04203 230.06003">4N02B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M269.37 596.15H377.37V668.15H269.37Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M269.37 596.15H377.37V668.15H269.37Z"/>
<g clip-path="url(#clip_50)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-626.1" x="299.13 308.13 320.11799 329.11799 338.11799">4N02C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M55.13 524.05H163.13V596.05H55.13Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M55.13 524.05H163.13V596.05H55.13Z"/>
<g clip-path="url(#clip_51)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-553.97" x="84.1 93.118 105.12399 114.14199 123.15999">4N02D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.38 524.05H269.38V596.05H161.38Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.38 524.05H269.38V596.05H161.38Z"/>
<g clip-path="url(#clip_52)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-553.97" x="191.52 200.52 212.50801 221.50801 230.50801">4N02E</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M269.37 524.04H377.37V596.04H269.37Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M269.37 524.04H377.37V596.04H269.37Z"/>
<g clip-path="url(#clip_53)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-553.97" x="299.78 308.798 320.804 329.822 338.84">4N02F</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M391.14 771.85 403.76 781.99 391.14 792.13 378.52 781.99 391.14 771.85Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M391.14 771.85 403.76 781.99 391.14 792.13 378.52 781.99 391.14 771.85Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M391.14 415.85 403.76 425.99 391.14 436.13 378.52 425.99 391.14 415.85Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M391.14 415.85 403.76 425.99 391.14 436.13 378.52 425.99 391.14 415.85Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 3283.36H586.42V3492.62H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 3283.36H586.42V3492.62H478.43Z"/>
<g clip-path="url(#clip_54)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3382.37" x="513 522 533.988 542.988">4N38</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 3081.57H586.42V3283.37H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 3081.57H586.42V3283.37H478.43Z"/>
<g clip-path="url(#clip_55)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-3176.83" x="513 522 533.988 542.988">4N39</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M359.24 2865.59H591.6V3081.58H359.24Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M359.24 2865.59H591.6V3081.58H359.24Z"/>
<g clip-path="url(#clip_56)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2967.9" x="455.97 464.988 476.994 486.012">4N41</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M359.24 2574.31H591.6V2865.48H359.24Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M359.24 2574.31H591.6V2865.48H359.24Z"/>
<g clip-path="url(#clip_57)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2714.17" x="455.97 464.988 476.994 486.012">4N42</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M344.67 2815.28 357.29 2825.42 344.67 2835.55 332.05 2825.42 344.67 2815.28Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M344.67 2815.28 357.29 2825.42 344.67 2835.55 332.05 2825.42 344.67 2815.28Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 2456.02H586.43V2528.02H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 2456.02H586.43V2528.02H478.43Z"/>
<g clip-path="url(#clip_58)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2486.27" x="508.13 517.13 529.118 538.118 547.118">4N43B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.44 2383.92H586.44V2455.92H478.44Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.44 2383.92H586.44V2455.92H478.44Z"/>
<g clip-path="url(#clip_59)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2414.15" x="507.8 516.8 528.78799 537.78799 546.78799">4N43A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 2193.51H586.43V2265.51H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 2193.51H586.43V2265.51H478.43Z"/>
<g clip-path="url(#clip_60)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2223.7" x="507.48 516.48007 528.468 537.468 546.468">4N43D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 2121.41H586.43V2193.41H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 2121.41H586.43V2193.41H478.43Z"/>
<g clip-path="url(#clip_61)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-2151.6" x="508.2 517.218 529.224 538.242 547.26">4N43C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.44 1620.85H586.43V1729.1H478.44Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.44 1620.85H586.43V1729.1H478.44Z"/>
<g clip-path="url(#clip_62)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-1669.1" x="513 522.0305 534.03518 543.0657">4N46</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M499.85 1600.52 512.47 1610.66 499.85 1620.8 487.23 1610.66 499.85 1600.52Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M499.85 1600.52 512.47 1610.66 499.85 1620.8 487.23 1610.66 499.85 1600.52Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.44 1391.08H586.43V1499.33H478.44Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.44 1391.08H586.43V1499.33H478.44Z"/>
<g clip-path="url(#clip_63)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1439.27" x="513.03 522.03 534.018 543.018">4N47</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M560.34 1370.76 572.96 1380.9 560.34 1391.03 547.72 1380.9 560.34 1370.76Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M560.34 1370.76 572.96 1380.9 560.34 1391.03 547.72 1380.9 560.34 1370.76Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M585.32 1391.09H815.6V1729.11H585.32Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M585.32 1391.09H815.6V1729.11H585.32Z"/>
<g clip-path="url(#clip_64)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-1554.2" x="681.08 690.07449 702.0611 711.05557">4N54</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M573.81 1559.62 586.43 1569.76 573.81 1579.9 561.19 1569.76 573.81 1559.62Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M573.81 1559.62 586.43 1569.76 573.81 1579.9 561.19 1569.76 573.81 1559.62Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 1126.49H586.43V1198.49H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 1126.49H586.43V1198.49H478.43Z"/>
<g clip-path="url(#clip_65)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1156.52" x="508.1 517.10006 529.088 538.088 547.088">4N48B</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 1054.39H586.43V1126.39H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 1054.39H586.43V1126.39H478.43Z"/>
<g clip-path="url(#clip_66)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-1084.4" x="507.8 516.8 528.78799 537.78799 546.78799">4N48A</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.42 863.98H586.42007V935.98H478.42Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.42 863.98H586.42007V935.98H478.42Z"/>
<g clip-path="url(#clip_67)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18.025" font-family="Calibri"><tspan y="-893.98" x="507.45 516.44448 528.4311 537.42556 546.42">4N48D</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.43 791.88H586.43V863.88H478.43Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.43 791.88H586.43V863.88H478.43Z"/>
<g clip-path="url(#clip_68)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-821.85" x="508.2 517.2 529.188 538.188 547.188">4N48C</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M478.42 490.84H586.42007V573.194H478.42Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M478.42 490.84H586.42007V573.194H478.42Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M465.81 503.76 478.43 513.9 465.81 524.04 453.19 513.9 465.81 503.76Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M465.81 503.76 478.43 513.9 465.81 524.04 453.19 513.9 465.81 503.76Z"/>
<g clip-path="url(#clip_69)">
<path transform="matrix(1,0,0,-1,0,4644)" d="M585.94 490.84 478.05 490.14 586.61 387.83 585.94 490.84Z" fill="#ffffff" fill-rule="evenodd"/>
</g>
<g clip-path="url(#clip_70)">
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M585.94 490.84 478.05 490.14 586.61 387.83 585.94 490.84Z"/>
</g>
<g clip-path="url(#clip_71)">
<path transform="matrix(1,0,0,-1,0,4644)" d="M548.26 462.68C548.26 462.48 548.23 462.33 548.17 462.22 548.11 462.11 548.03 462.05 547.93 462.05L546.64 462.04 546.66 459.65C546.66 459.61 546.65 459.57 546.62 459.53 546.6 459.5 546.56 459.47 546.5 459.45 546.44 459.43 546.36 459.41 546.26 459.4 546.17 459.38 546.04 459.38 545.89 459.38 545.75 459.37 545.63 459.38 545.53 459.39 545.43 459.4 545.36 459.42 545.3 459.44 545.24 459.47 545.2 459.49 545.18 459.52 545.16 459.56 545.15 459.6 545.15 459.64L545.13 462.03 540.48 462C540.41 462 540.35 462.01 540.31 462.03 540.26 462.05 540.22 462.08 540.18 462.12 540.14 462.17 540.11 462.24 540.1 462.33 540.08 462.41 540.08 462.53 540.08 462.67 540.07 462.78 540.08 462.88 540.08 462.97 540.09 463.06 540.1 463.14 540.12 463.21 540.13 463.28 540.15 463.35 540.18 463.42 540.21 463.49 540.25 463.56 540.29 463.64L544.29 470.57C544.32 470.62 544.37 470.66 544.42 470.7 544.48 470.73 544.55 470.76 544.64 470.78 544.73 470.81 544.84 470.83 544.97 470.83 545.11 470.84 545.26 470.85 545.44 470.85 545.64 470.85 545.81 470.85 545.96 470.83 546.1 470.82 546.22 470.8 546.31 470.78 546.4 470.76 546.47 470.72 546.52 470.69 546.56 470.65 546.59 470.6 546.59 470.55L546.64 463.29 547.92 463.3C548.02 463.3 548.1 463.25 548.16 463.15 548.22 463.05 548.26 462.89 548.26 462.68ZM545.08 469.52H545.07L541.45 463.26 545.12 463.28ZM558.78 460.14C558.78 460.02 558.76 459.92 558.72 459.84 558.68 459.76 558.63 459.69 558.57 459.63 558.5 459.58 558.43 459.54 558.35 459.52 558.28 459.49 558.2 459.48 558.12 459.48H557.62C557.46 459.48 557.32 459.49 557.2 459.52 557.09 459.56 556.97 459.61 556.87 459.7 556.76 459.78 556.65 459.9 556.55 460.04 556.44 460.19 556.33 460.38 556.21 460.6L552.69 467.05C552.51 467.38 552.32 467.73 552.14 468.1 551.95 468.46 551.78 468.82 551.62 469.16H551.6C551.61 468.74 551.63 468.31 551.63 467.87 551.64 467.43 551.65 466.99 551.65 466.56L551.7 459.69C551.7 459.65 551.68 459.61 551.66 459.58 551.64 459.54 551.59 459.51 551.54 459.49 551.48 459.47 551.4 459.45 551.3 459.43 551.21 459.42 551.09 459.41 550.94 459.41 550.79 459.41 550.67 459.41 550.57 459.43 550.48 459.44 550.4 459.46 550.34 459.48 550.29 459.5 550.25 459.53 550.22 459.57 550.2 459.6 550.18 459.64 550.18 459.69L550.12 470.18C550.11 470.41 550.18 470.58 550.31 470.68 550.44 470.78 550.59 470.83 550.75 470.83L551.49 470.84C551.67 470.84 551.81 470.83 551.93 470.8 552.05 470.77 552.16 470.72 552.25 470.65 552.34 470.59 552.43 470.49 552.52 470.38 552.61 470.26 552.7 470.1 552.8 469.92L555.5 464.95C555.67 464.65 555.83 464.35 555.98 464.06 556.14 463.77 556.29 463.49 556.43 463.21 556.57 462.93 556.72 462.65 556.86 462.38 557 462.11 557.14 461.83 557.27 461.56H557.28C557.27 462.02 557.26 462.5 557.25 463.01 557.25 463.51 557.24 463.99 557.24 464.45L557.2 470.62C557.2 470.66 557.21 470.7 557.23 470.74 557.26 470.77 557.3 470.8 557.36 470.83 557.42 470.85 557.49 470.87 557.59 470.89 557.69 470.9 557.81 470.91 557.97 470.91 558.1 470.91 558.22 470.9 558.32 470.89 558.42 470.88 558.49 470.86 558.55 470.84 558.61 470.81 558.65 470.78 558.67 470.74 558.7 470.71 558.71 470.67 558.71 470.63ZM568.72 463.23C568.72 462.62 568.62 462.08 568.42 461.61 568.22 461.13 567.93 460.73 567.56 460.4 567.19 460.07 566.74 459.82 566.22 459.65 565.71 459.48 565.13 459.39 564.5 459.38 564.15 459.38 563.81 459.4 563.5 459.45 563.18 459.5 562.9 459.56 562.65 459.63 562.4 459.7 562.2 459.77 562.04 459.84 561.88 459.91 561.78 459.97 561.74 460.01 561.69 460.05 561.66 460.08 561.65 460.12 561.63 460.16 561.61 460.2 561.6 460.25 561.58 460.3 561.57 460.36 561.56 460.44 561.56 460.51 561.55 460.6 561.55 460.71 561.55 460.81 561.56 460.9 561.57 460.98 561.57 461.06 561.59 461.12 561.61 461.17 561.64 461.22 561.66 461.26 561.7 461.28 561.73 461.3 561.76 461.32 561.81 461.32 561.86 461.32 561.95 461.28 562.08 461.21 562.2 461.14 562.37 461.06 562.58 460.97 562.78 460.89 563.04 460.81 563.35 460.74 563.66 460.66 564.02 460.63 564.45 460.63 564.84 460.63 565.2 460.68 565.53 460.78 565.85 460.87 566.14 461.02 566.37 461.22 566.61 461.42 566.79 461.68 566.92 461.98 567.06 462.28 567.12 462.65 567.12 463.08 567.12 463.45 567.06 463.77 566.94 464.04 566.83 464.32 566.65 464.55 566.41 464.73 566.17 464.92 565.87 465.05 565.51 465.14 565.14 465.23 564.71 465.27 564.21 465.27 563.85 465.27 563.54 465.25 563.28 465.21 563.02 465.17 562.78 465.16 562.56 465.15 562.4 465.15 562.28 465.19 562.21 465.27 562.14 465.34 562.1 465.49 562.1 465.7L562.07 470.34C562.07 470.53 562.11 470.67 562.2 470.77 562.29 470.86 562.42 470.91 562.59 470.91L567.63 470.94C567.68 470.94 567.72 470.93 567.77 470.91 567.81 470.88 567.85 470.84 567.88 470.79 567.91 470.73 567.93 470.67 567.95 470.59 567.96 470.5 567.97 470.41 567.97 470.3 567.97 470.08 567.94 469.92 567.89 469.8 567.83 469.69 567.75 469.63 567.65 469.63L563.59 469.6 563.61 466.41C563.81 466.44 564.01 466.46 564.21 466.47 564.42 466.47 564.66 466.48 564.93 466.48 565.56 466.48 566.1 466.41 566.57 466.26 567.04 466.1 567.44 465.89 567.75 465.6 568.07 465.32 568.3 464.98 568.47 464.58 568.63 464.17 568.72 463.73 568.72 463.23ZM577.69 462.89C577.69 462.37 577.6 461.9 577.42 461.48 577.24 461.06 576.99 460.7 576.65 460.39 576.31 460.09 575.89 459.86 575.4 459.7 574.9 459.53 574.34 459.45 573.71 459.44 573.33 459.44 572.97 459.47 572.64 459.53 572.31 459.59 572.01 459.66 571.76 459.74 571.5 459.83 571.28 459.91 571.11 460 570.94 460.09 570.83 460.16 570.79 460.2 570.75 460.24 570.71 460.28 570.69 460.32 570.67 460.36 570.64 460.41 570.63 460.47 570.61 460.53 570.59 460.6 570.59 460.68 570.58 460.77 570.57 460.87 570.57 461 570.57 461.21 570.59 461.35 570.63 461.44 570.67 461.52 570.73 461.56 570.81 461.56 570.86 461.56 570.97 461.51 571.13 461.42 571.29 461.33 571.5 461.23 571.75 461.12 572 461.02 572.29 460.92 572.62 460.82 572.96 460.73 573.33 460.69 573.74 460.69 574.13 460.69 574.48 460.75 574.78 460.85 575.08 460.95 575.33 461.09 575.54 461.27 575.74 461.46 575.89 461.67 575.99 461.92 576.09 462.17 576.14 462.44 576.14 462.74 576.14 463.06 576.07 463.35 575.94 463.61 575.81 463.86 575.62 464.08 575.36 464.27 575.11 464.46 574.8 464.6 574.43 464.7 574.07 464.79 573.65 464.84 573.19 464.84L572.07 464.83C572.02 464.83 571.97 464.84 571.93 464.86 571.88 464.88 571.84 464.91 571.81 464.96 571.78 465.01 571.75 465.07 571.73 465.14 571.7 465.22 571.69 465.32 571.69 465.44 571.69 465.55 571.7 465.65 571.72 465.72 571.73 465.79 571.76 465.85 571.79 465.9 571.82 465.94 571.86 465.97 571.9 465.99 571.94 466.01 571.99 466.02 572.04 466.02L573.03 466.03C573.42 466.03 573.77 466.09 574.07 466.19 574.38 466.29 574.64 466.43 574.85 466.62 575.07 466.81 575.23 467.04 575.34 467.3 575.45 467.56 575.51 467.85 575.51 468.17 575.51 468.41 575.47 468.63 575.39 468.85 575.31 469.06 575.19 469.24 575.04 469.4 574.89 469.56 574.69 469.68 574.45 469.77 574.22 469.86 573.94 469.9 573.63 469.9 573.29 469.9 572.98 469.85 572.7 469.74 572.41 469.64 572.16 469.53 571.94 469.41 571.72 469.29 571.53 469.18 571.39 469.07 571.24 468.97 571.14 468.92 571.08 468.92 571.04 468.92 571 468.93 570.97 468.94 570.94 468.95 570.91 468.98 570.89 469.03 570.87 469.07 570.86 469.13 570.85 469.21 570.84 469.29 570.83 469.39 570.83 469.52 570.83 469.61 570.83 469.69 570.84 469.76 570.84 469.82 570.85 469.88 570.87 469.93 570.89 469.98 570.91 470.03 570.93 470.07 570.96 470.11 571 470.16 571.05 470.21 571.11 470.27 571.22 470.35 571.39 470.46 571.56 470.56 571.77 470.67 572.01 470.77 572.26 470.88 572.55 470.97 572.87 471.04 573.2 471.11 573.55 471.15 573.92 471.15 574.45 471.16 574.91 471.09 575.31 470.96 575.71 470.83 576.05 470.64 576.31 470.39 576.58 470.15 576.78 469.86 576.92 469.51 577.05 469.17 577.12 468.79 577.12 468.38 577.12 468.02 577.08 467.69 576.99 467.38 576.9 467.07 576.76 466.8 576.58 466.56 576.4 466.32 576.18 466.12 575.92 465.95 575.65 465.78 575.35 465.66 575 465.6L575.01 465.58C575.4 465.54 575.76 465.44 576.08 465.29 576.41 465.14 576.69 464.94 576.93 464.71 577.16 464.48 577.35 464.21 577.48 463.89 577.62 463.58 577.68 463.25 577.69 462.89Z"/>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M161.36 322.7H377.35V453.54H161.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M161.36 322.7H377.35V453.54H161.36Z"/>
<g clip-path="url(#clip_72)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-382.02" x="249.9 258.9 270.88798 279.88798">4N01</tspan></text>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" d="M391.99 1688.82 404.61 1698.96 391.99 1709.09 379.37 1698.96 391.99 1688.82Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M391.99 1688.82 404.61 1698.96 391.99 1709.09 379.37 1698.96 391.99 1688.82Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M54.234 4059.36H482.74L54.234 4450.67V4059.36Z" fill="#ffffff" fill-rule="evenodd"/>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M54.234 4059.36H482.74L54.234 4450.67V4059.36Z"/>
<g clip-path="url(#clip_73)">
<text xml:space="preserve" transform="matrix(1 0 -0 1 0 4644)" font-size="18" font-family="Calibri"><tspan y="-4151.7" x="141.9 150.9 162.888 171.888">4N37</tspan></text>
</g>
<g clip-path="url(#clip_74)">
<path transform="matrix(1,0,0,-1,0,4644)" d="M446.6 3895.25 553.21 3794.55 653.9 3901.16 547.3 4001.85 446.6 3895.25Z" fill="#ffffff" fill-rule="evenodd"/>
</g>
<g clip-path="url(#clip_75)">
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M446.6 3895.25 553.21 3794.55 653.9 3901.16 547.3 4001.85 446.6 3895.25Z"/>
</g>
<g clip-path="url(#clip_76)">
<path transform="matrix(1,0,0,-1,0,4644)" d="M540.85 3904.11C540.72 3903.96 540.59 3903.87 540.47 3903.83 540.35 3903.79 540.25 3903.81 540.18 3903.88L539.25 3904.76 537.6 3903.02C537.57 3902.99 537.54 3902.97 537.5 3902.96 537.46 3902.96 537.41 3902.96 537.35 3902.99 537.29 3903.01 537.22 3903.05 537.14 3903.11 537.06 3903.17 536.97 3903.25 536.86 3903.35 536.75 3903.45 536.67 3903.54 536.61 3903.62 536.54 3903.69 536.5 3903.76 536.47 3903.81 536.45 3903.87 536.44 3903.92 536.45 3903.95 536.45 3903.99 536.47 3904.03 536.5 3904.06L538.15 3905.8 534.76 3909C534.71 3909.04 534.68 3909.09 534.66 3909.13 534.63 3909.18 534.63 3909.23 534.63 3909.29 534.63 3909.35 534.66 3909.42 534.71 3909.49 534.76 3909.57 534.83 3909.65 534.93 3909.76 535.01 3909.84 535.08 3909.91 535.14 3909.97 535.21 3910.03 535.27 3910.08 535.33 3910.12 535.4 3910.16 535.46 3910.2 535.53 3910.22 535.6 3910.25 535.67 3910.28 535.75 3910.31L543.44 3912.55C543.5 3912.56 543.56 3912.56 543.62 3912.55 543.69 3912.53 543.76 3912.51 543.84 3912.46 543.92 3912.42 544.02 3912.35 544.12 3912.27 544.22 3912.18 544.33 3912.08 544.46 3911.96 544.61 3911.82 544.73 3911.7 544.82 3911.59 544.92 3911.48 544.99 3911.38 545.04 3911.3 545.09 3911.23 545.12 3911.16 545.13 3911.1 545.14 3911.04 545.12 3910.99 545.09 3910.95L540.1 3905.67 541.04 3904.79C541.11 3904.72 541.13 3904.63 541.11 3904.51 541.08 3904.39 540.99 3904.26 540.85 3904.11ZM543.29 3911.24 543.28 3911.26 536.33 3909.23 539 3906.71ZM546.69 3895C546.61 3894.91 546.53 3894.85 546.44 3894.82 546.36 3894.79 546.28 3894.77 546.19 3894.78 546.11 3894.78 546.03 3894.8 545.96 3894.84 545.89 3894.88 545.82 3894.92 545.76 3894.98L545.4 3895.32C545.29 3895.43 545.2 3895.54 545.13 3895.64 545.07 3895.75 545.03 3895.87 545.01 3896 544.99 3896.13 544.99 3896.29 545.02 3896.47 545.04 3896.65 545.09 3896.86 545.16 3897.11L547.08 3904.2C547.17 3904.56 547.28 3904.94 547.4 3905.34 547.52 3905.73 547.64 3906.11 547.76 3906.47L547.75 3906.48C547.46 3906.16 547.17 3905.84 546.88 3905.52 546.58 3905.2 546.28 3904.88 545.98 3904.56L541.27 3899.57C541.24 3899.54 541.21 3899.52 541.16 3899.51 541.12 3899.5 541.07 3899.51 541.01 3899.53 540.95 3899.56 540.89 3899.6 540.81 3899.65 540.73 3899.71 540.63 3899.79 540.52 3899.89 540.42 3899.99 540.33 3900.08 540.27 3900.16 540.21 3900.23 540.17 3900.3 540.14 3900.35 540.12 3900.41 540.11 3900.45 540.12 3900.5 540.13 3900.54 540.14 3900.58 540.17 3900.61L547.38 3908.24C547.54 3908.41 547.7 3908.49 547.87 3908.47 548.03 3908.45 548.17 3908.38 548.29 3908.28L548.83 3907.77C548.95 3907.65 549.05 3907.53 549.12 3907.43 549.18 3907.33 549.23 3907.22 549.25 3907.11 549.27 3906.99 549.27 3906.86 549.25 3906.72 549.23 3906.57 549.2 3906.4 549.14 3906.2L547.65 3900.74C547.56 3900.4 547.47 3900.08 547.39 3899.76 547.3 3899.45 547.21 3899.14 547.12 3898.84 547.03 3898.53 546.94 3898.24 546.85 3897.94 546.77 3897.65 546.68 3897.36 546.59 3897.06H546.6C546.91 3897.4 547.23 3897.76 547.57 3898.12 547.91 3898.49 548.24 3898.84 548.56 3899.18L552.8 3903.66C552.83 3903.69 552.86 3903.71 552.9 3903.72 552.95 3903.73 553 3903.72 553.06 3903.7 553.12 3903.68 553.19 3903.64 553.27 3903.58 553.34 3903.53 553.44 3903.44 553.55 3903.34 553.65 3903.25 553.73 3903.16 553.8 3903.08 553.86 3903.01 553.9 3902.94 553.93 3902.88 553.95 3902.83 553.96 3902.78 553.95 3902.73 553.94 3902.69 553.93 3902.65 553.9 3902.62ZM553.97 3888.08C553.9 3888 553.83 3887.94 553.76 3887.9 553.7 3887.85 553.64 3887.82 553.58 3887.81 553.53 3887.8 553.48 3887.79 553.44 3887.81 553.4 3887.82 553.36 3887.84 553.33 3887.87L549.01 3891.95C548.98 3891.97 548.96 3892.01 548.95 3892.05 548.94 3892.08 548.94 3892.13 548.95 3892.19 548.96 3892.25 548.98 3892.31 549.02 3892.37 549.06 3892.44 549.12 3892.52 549.19 3892.6 549.27 3892.67 549.33 3892.73 549.4 3892.78 549.47 3892.82 549.52 3892.85 549.58 3892.87 549.63 3892.89 549.68 3892.89 549.73 3892.89 549.77 3892.88 549.81 3892.86 549.85 3892.83L551.57 3891.2 557.51 3897.48 555.01 3898.04C554.89 3898.08 554.8 3898.11 554.75 3898.15 554.69 3898.19 554.66 3898.23 554.66 3898.29 554.65 3898.34 554.67 3898.41 554.72 3898.48 554.77 3898.56 554.84 3898.64 554.94 3898.74 555.01 3898.81 555.07 3898.87 555.12 3898.92 555.18 3898.96 555.23 3899 555.27 3899.02 555.32 3899.04 555.36 3899.05 555.41 3899.06 555.46 3899.06 555.51 3899.06 555.58 3899.05L558.63 3898.47C558.66 3898.46 558.69 3898.45 558.73 3898.44 558.76 3898.42 558.8 3898.4 558.85 3898.37 558.89 3898.35 558.94 3898.31 559 3898.26 559.05 3898.22 559.11 3898.16 559.19 3898.09 559.29 3897.99 559.37 3897.9 559.43 3897.83 559.49 3897.76 559.54 3897.7 559.56 3897.65 559.58 3897.59 559.59 3897.55 559.58 3897.52 559.57 3897.48 559.56 3897.45 559.53 3897.42L552.67 3890.16 554.17 3888.75C554.2 3888.71 554.22 3888.68 554.23 3888.63 554.25 3888.58 554.24 3888.53 554.23 3888.48 554.21 3888.42 554.19 3888.36 554.14 3888.3 554.1 3888.23 554.05 3888.16 553.97 3888.08ZM562.28 3883.43C561.94 3883.07 561.58 3882.81 561.19 3882.65 560.8 3882.49 560.39 3882.43 559.97 3882.47 559.55 3882.5 559.11 3882.64 558.67 3882.88 558.22 3883.11 557.77 3883.44 557.31 3883.88 556.89 3884.28 556.55 3884.68 556.3 3885.09 556.04 3885.5 555.88 3885.9 555.81 3886.29 555.75 3886.69 555.77 3887.07 555.89 3887.45 556.01 3887.82 556.22 3888.17 556.53 3888.5 556.77 3888.76 557.04 3888.96 557.33 3889.09 557.62 3889.23 557.93 3889.31 558.27 3889.35 558.6 3889.38 558.96 3889.36 559.34 3889.3 559.73 3889.24 560.14 3889.14 560.57 3889.01 560.44 3889.38 560.34 3889.74 560.29 3890.07 560.23 3890.4 560.21 3890.72 560.24 3891.02 560.27 3891.32 560.34 3891.6 560.45 3891.86 560.57 3892.13 560.73 3892.37 560.95 3892.6 561.22 3892.89 561.53 3893.11 561.88 3893.27 562.22 3893.42 562.59 3893.5 562.97 3893.48 563.36 3893.47 563.77 3893.37 564.2 3893.17 564.63 3892.97 565.06 3892.66 565.49 3892.25 565.91 3891.86 566.22 3891.47 566.43 3891.08 566.64 3890.69 566.77 3890.32 566.8 3889.96 566.84 3889.6 566.79 3889.26 566.66 3888.94 566.54 3888.61 566.35 3888.32 566.09 3888.05 565.89 3887.83 565.65 3887.66 565.39 3887.52 565.14 3887.39 564.85 3887.3 564.55 3887.25 564.24 3887.2 563.92 3887.19 563.57 3887.22 563.23 3887.25 562.86 3887.32 562.48 3887.42 562.64 3886.99 562.76 3886.58 562.85 3886.2 562.94 3885.82 562.98 3885.46 562.97 3885.13 562.96 3884.8 562.9 3884.49 562.79 3884.21 562.68 3883.93 562.51 3883.67 562.28 3883.43ZM564.91 3888.97C565.08 3889.15 565.2 3889.34 565.27 3889.55 565.35 3889.75 565.38 3889.96 565.35 3890.17 565.33 3890.39 565.26 3890.61 565.13 3890.83 565 3891.05 564.83 3891.26 564.6 3891.48 564.14 3891.91 563.69 3892.13 563.26 3892.15 562.83 3892.16 562.44 3891.99 562.1 3891.63 561.94 3891.46 561.82 3891.28 561.75 3891.08 561.67 3890.89 561.63 3890.67 561.63 3890.42 561.63 3890.18 561.67 3889.91 561.74 3889.62 561.81 3889.32 561.91 3888.98 562.04 3888.61 562.68 3888.43 563.24 3888.36 563.72 3888.41 564.21 3888.46 564.6 3888.65 564.91 3888.97ZM561.06 3884.36C561.25 3884.56 561.38 3884.77 561.46 3885 561.53 3885.23 561.57 3885.48 561.55 3885.76 561.53 3886.03 561.48 3886.34 561.38 3886.68 561.28 3887.01 561.16 3887.39 561 3887.8 560.61 3887.93 560.25 3888.02 559.92 3888.07 559.59 3888.13 559.3 3888.15 559.04 3888.14 558.77 3888.12 558.54 3888.06 558.32 3887.97 558.11 3887.88 557.91 3887.74 557.74 3887.55 557.35 3887.14 557.19 3886.68 557.26 3886.19 557.33 3885.7 557.64 3885.18 558.21 3884.65 558.75 3884.14 559.27 3883.86 559.76 3883.83 560.26 3883.79 560.69 3883.97 561.06 3884.36Z"/>
</g>
<path transform="matrix(1,0,0,-1,0,4644)" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M2459.51 2253H2468.51 2459.51Z"/>
<path transform="matrix(1,0,0,-1,0,4644)" d="M2465.03 2250.24 2459.51 2253 2465.03 2255.76V2250.24Z" fill-rule="evenodd"/>
</g>
</svg>
`;

// Room definitions with their boundaries and center points
export const roomData: RoomData  = {
    '4N01': { x: 518.96, y: 137.06, width: 33.87, height: 51.07, centerX: 535.9, centerY: 162.6, exitX: 552.83  , exitY: 162.6 },
    '4N02': { x: 581.1, y: 137.06, width: 33.87, height: 51.07, centerX: 598.0, centerY: 162.6, exitX: 598  , exitY: 188.14},
    '4N03': { x: 643.23, y: 137.06, width: 33.87, height: 51.07, centerX: 660.16, centerY: 162.6, exitX: 643.23  , exitY: 162.6 },
    '4N04': { x: 518.96, y: 217.51, width: 33.87, height: 51.07, centerX: 535.9, centerY: 243.0, exitX: 552.83  , exitY: 243 },
    '4N05': { x: 581.1, y: 217.51, width: 33.87, height: 51.07, centerX: 598.0, centerY: 243.0, exitX: 581.1  , exitY: 217.51 },
    '4N06': { x: 643.22, y: 217.51, width: 33.87, height: 51.07, centerX: 660.16, centerY: 243.0, exitX: 643.23  , exitY: 243 },
    '4N11': { x: 518.96, y: 297.96, width: 33.87, height: 51.07, centerX: 535.9, centerY: 323.5, exitX: 552.83 , exitY: 323.5 },
    '4N12': { x: 581.1, y: 297.96, width: 33.87, height: 51.07, centerX: 598.0, centerY: 323.5, exitX: 598 , exitY:  297.96 },
    '4N13': { x: 643.23, y: 297.96, width: 33.87, height: 51.07, centerX: 660.16, centerY: 323.5, exitX: 643.23 , exitY: 323.5  }
  };

  export const junctions: Junction = {
    'J1': {x: 566.96, y: 202.82},
    'J2': {x: 629.1, y: 202.82},
    'J3': {x: 566.96, y: 283.27},
    'J4': {x: 629.1, y: 283.27}
  }