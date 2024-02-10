export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
export default function Button({ children }: ButtonProps) {
  return (
    <button className="inline-flex items-center justify-center h-[2em] w-auto bg-red-900 rounded-sm">
      {children}
    </button>
  );
}
