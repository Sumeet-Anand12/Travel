/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth : {
        "1232": "77rem",
        "1380" : "86.25rem",
        "1180" : "73.75rem",
        "1440" : "90rem",
      },
      width :{
        "108" : "6.75rem",
        "324" : "20.25rem",
        "140" : "8.75rem",
        "260" : "16.25rem",
        "297" : "18.563rem",
        "76" : "4.76rem",
        "140" : "8.75rem",
        "389" : "24.313rem",
        "604" : "37.75rem",
        "144" : "9rem",
        "389" : "24.313rem",
        "544" : "34rem" ,
        "152" : "9.5rem",
        "80" : "5rem",
        "208" : "17.5rem",
        "56" : "3.5rem",
        "343" : "21.438rem",
        "40" : "2.5rem",
        "48" : "3rem",
        "18" : "1.125rem",
        "160" : "10rem",
        "150" :  "9.375rem",
        "262" : "16.375rem",
        "170" : "10.625rem",
        "210" : "13.125rem",
        "148" : "9.25rem",
        "020" : "1.25rem",
        "295" : "18.438rem",
        "259" : "16.188rem",
        "50" : "3.125rem",
        "615" : "38.438rem",
        "190" : "11.875rem",
        "174" : "10.875rem",
        "562" : "35.125rem",

      },
      height:{
        "48" : "3rem",
        "56" : "3.5rem",
        "559" : "34.938",
        "448" : "28rem",
        "64" : "4rem",
        "80" : "5rem",
        "32" : "2rem",
        "18" : "1.125rem",
        "87" : "5.438rem",
        "200" : "12.5rem",
        "020" : "1.25rem",
        "119" : "7.438rem",
        "293" : "18.313rem",
        "170" : "10.625rem",
        "46" : "2.875rem",

      },
      lineHeight:{
        "12": "3rem",
        "48" : "3rem"
      },
      colors :{
        "F2F2F2" : "#F2F2F2",
        "BFBFBF" : "#BFBFBF",
        "888" : "#888",
        "112211" : "#112211",
        "039b9b" : "#039b9b",
        "039d9d" : "#039d9d",
        "3D3E48" : "#3D3E48",
        "295943" : "#295943",
        "3D3E48" : "#3D3E48",
        "979797" : "#979797",
        "161414" : "#161414",
        "F3F3F3" : "#F3F3F3",
        "191919" : "#191919",
        "f6f7fb" : "#f6f7fb",
        "ff8682" : "#ff8682",
        "D7E2EE" : "#D7E2EE",
        "FF8682" : "#FF8682",
        "515151" : "#515151",
        "FFFFFF" : "#FFFFFF",
        "112211" : "#112211",
        "039D9D" : "#039D9D",
        "2F80ED" : "#2F80ED",
        "E0E0E0" : "#E0E0E0",
        "333333" : "#333333",
        "181818" : "#181818",
        "4F4F4F" : "#4F4F4F",
        "BDBDBD" : "#BDBDBD",
        "4F4F4F" : "#4F4F4F",
        "EB5757" : "#EB5757",
        "1A1A1A" : "#1A1A1A",
        "219653" : "#219653",
        "2F80ED" : "#2F80ED",
        "EAF2FD" : "#EAF2FD",
        "F2994A" : "#F2994A",
        "FF8682" : "#FF8682",
        "112211" : "#112211",
        "D7E2EE" : "#D7E2EE",
        "000000" : "#000000",
        "8DD3BB" : "#8DD3BB",
        "EBF6F2" : "#EBF6F2",
      },
      background :{
        "112211" : "#112211",
        "039b9b" : "#039b9b"
      },
      fontSize : {
        "014" : "0.875rem",
        "45" : "2.813rem",
        "80" : "5rem",
        "32" : "2rem",
        "27.65 " : "1.728rem",
        "17.79" : "1.112rem",
        "15.57" : "0.973rem",
        "40" : "2.5rem",
        "18" : "1.125rem",
        "15" : "0.938rem",
        "13" : "0.813rem"
        
        
      },
      margin :{
        "66": "4.125rem", 
        "79" : "4.938rem",
        "57" : "3.563rem",
        "94" : "5.875rem",
        "18" : "6rem",
        "25" : "14rem",
        "104" : "6.5rem",
        "205" : "12.813rem",
        "100" : "6.25rem",
        "18" : "1.125rem",
        "70" : "4.375rem",
        "014" : "0.875rem",
        "13" : "0.813rem",
        "23" : "1.438rem",
        "010" : "0.625rem",
        "110" : "6.875rem",
        "17" : "1.063rem",
        "90" : "5.625rem",
        "17.5" : "1.094rem",
        "17.76" : "1.11rem",
        "8.25" : "0.516rem",
        "7.75" : "0.484rem",
        "7.25" : "0.453rem",
      },
      padding : {
        "66": "4.125rem",
        "22": "5.5rem",
        "15" : "3.75rem",
        "104" : "6.5rem",
        "11.5" : "0.719rem",
        "50.5" : "3.156rem",
        "205" : "12.813rem",
        "010" : "0.625rem",
        "100" : "6.25rem",
        "18" : "1.125rem",
        "014" : "0.875rem",
        "13" : "0.813rem",
        "23" : "1.438rem",
        "110" : "6.875rem",
        "17" : "1.063rem",
        "15.5" : "0.969rem",
        "30" : "1.875rem",
        "90" : "5.625rem",
        "17.5" : "1.094rem",
        "17.76" : "1.11rem",
        "8.25" : "0.516rem",
        "7.75" : "0.484rem",
        "7.25" : "0.453rem",
        "33" : "2.063rem",
      },
      borderColor : {
        "666"  : "#666"
      }, 
      borderRadius : {
        "2lg" : "1rem",
        "5" : "0.313rem",
      },
      spacing : {
        "15" : "0.938rem", 
        "90" : "5.625rem",
        "104" : "6.5rem",
        "20" : "5rem"
      }, 
      gap : {
        "15" : "0.938rem", 
        "90" : "5.625rem",
        "104" : "6.5rem",
        "20" : "5rem",
        "110" : "6.875rem",
        "30" : "1.875rem"
      }, 
    },
  },
  plugins: [],
};


