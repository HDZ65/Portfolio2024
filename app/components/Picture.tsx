import Image from "next/image";
import photoDeMoi from './../../public/photoDeMoi.jpg';
export default function Picture() {
  return (
    <Image
      src={photoDeMoi}
      alt="Photo de Alexandre"
      width={500}
      height={500}
      className="rounded-full object-cover w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36  "
    />
  )
}