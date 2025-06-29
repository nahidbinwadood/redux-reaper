import cn from '@/lib/utils';

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      className={cn(
        'px-5 cursor-pointer py-2.5 rounded-md bg-green-500 text-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
