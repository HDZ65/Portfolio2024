import { cn } from "@/lib/utils"
import Image from "next/image"

interface TypeScriptIconProps {
  className?: string
}

export function TypeScriptIcon({ className }: TypeScriptIconProps) {
  return (
    <div className={cn("relative h-6 w-6", className)}>
      <Image
        src="/typescript.svg"
        alt="TypeScript"
        fill
        className="object-contain"
      />
    </div>
  )
} 