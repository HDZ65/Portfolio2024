import Image from "next/image";
import photoDeMoi from './../../public/photoDeMoi.jpg';
export default function Picture() {
  return (
    <Image
      src={photoDeMoi}
      alt="Photo de Alexandre"
      width={500}
      height={500}
      className="rounded-full object-cover w-16 h-16 sm:w-24 sm:h-24  "
    />
  )
}