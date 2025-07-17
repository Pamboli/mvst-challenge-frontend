import Image from "next/image";
import FooterImage from "../../../../public/footer.png";
import FooterImageMobile from "../../../../public/footer-mobile.png";

export function Footer() {
  return (
    <footer className="relative mt-20 lg:mt-60">
      <div className="absolute inset-0 -top-4 bg-footer-gradient" />
      <Image src={FooterImage} alt="Footer image" className="hidden lg:block" />
      <Image
        src={FooterImageMobile}
        alt="Footer image"
        className="block lg:hidden"
      />
    </footer>
  );
}
