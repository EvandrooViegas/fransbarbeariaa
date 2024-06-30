import React from "react";

export default function SectionContainer({
  children,
  className,
  id,
  ...rest
}: { children: React.ReactNode, id: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...rest} className={`p-6 md:p-12  ${className}`}  id={id}>
      {children}
    </section>
  );
}
