interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="bg-slate-900 border-0 rounded-8">
      {children}
    </button>
  );
}
