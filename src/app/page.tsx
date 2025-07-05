// maps to root `/` URL

import Image from "next/image";
import variables from "./variables.module.scss";

export default function Page() {
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <Image
        src="https://github.com/shadcn.png"
        alt="Picture"
        width={100}
        height={100}
      />
    </div>
  );
}
