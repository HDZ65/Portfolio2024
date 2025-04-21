import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div className={cn("w-[40rem] relative mx-auto", className)} {...props}>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/100 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/80 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/70 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/60 to-transparent h-px w-1/4" />
    </div>
  )
} 