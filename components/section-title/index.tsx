import React from "react";

export default function SectionTitle({
  children,
  className,
  background = true,
  ...rest
}: { children: React.ReactNode, background?: boolean } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (

      <h4 className={`md:text-6xl text-5xl font-black ${background ? 'bg-primary w-fit px-4 py-1.5 text-white shadow-2xl' : ''} ${className}`} {...rest}>
        {children}
      </h4>
  );
}
