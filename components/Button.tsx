import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out transform rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Brand blue, lifts up, stronger colored shadow glow on hover
    primary: "bg-brand-blue text-white shadow-md hover:bg-blue-600 hover:shadow-2xl hover:shadow-brand-blue/50 hover:-translate-y-1 active:translate-y-0 active:shadow-sm active:scale-95",
    
    // Secondary: Dark gray, similar lift but neutral shadow
    secondary: "bg-brand-gray text-white shadow-md hover:bg-gray-700 hover:shadow-xl hover:shadow-gray-900/40 hover:-translate-y-1 active:translate-y-0 active:shadow-sm active:scale-95",
    
    // Outline: Border based, subtle lift
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};