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
        "grid grid-cols-1 md:grid-cols-10 gap-[3rem] 2xl:gap-[4rem] max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
