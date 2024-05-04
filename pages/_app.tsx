// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <div id="root" className={poppins.className}>
//       <Component {...pageProps} />
//     </div>
//   );
// }

// _app.tsx
// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  subsets: ["latin"]  // Ensure the correct subset is specified
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

