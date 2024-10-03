import { cn } from '../../libs/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-8 gap-[2rem] 2xl:gap-[3rem] max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
