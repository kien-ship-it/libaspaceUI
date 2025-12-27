import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[31px] font-inter font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary-muted text-white hover:bg-primary active:scale-95',
    secondary: 'bg-secondary text-black hover:opacity-90 active:scale-95',
    outline: 'bg-white text-black-primary border border-black-light hover:bg-black-light active:scale-95',
    ghost: 'bg-transparent text-black-primary hover:bg-black-light active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-[14px] leading-[20.3px] tracking-[-0.28px] h-[36px]',
    md: 'px-[29px] py-[11px] text-button-16 h-[45px]',
    lg: 'px-8 py-3 text-[18px] leading-[24px] tracking-[-0.36px] h-[50px]',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
