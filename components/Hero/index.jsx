import Head from "next/head";
import Image from "next/image";
import Hero from "../../public/assets/images/hero-mobile.png";

export default function HeroCard() {
  return (
    <div>
      <Image src={Hero} alt="hero" height={100} width={100} />
    </div>
  );
}
