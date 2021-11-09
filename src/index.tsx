import React from "react";
import { Freeze } from "react-freeze";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export interface VurtializationProps {
  className?: string;
  children: React.ReactChild;
  intersectionOptions?: IntersectionOptions;
}

export const Vurtialization: React.VFC<VurtializationProps> = ({
  className,
  children,
  intersectionOptions,
}) => {
  const { ref, inView } = useInView(intersectionOptions);

  return (
    <div ref={ref} className={className}>
      <Freeze freeze={!inView}>{children}</Freeze>
    </div>
  );
};
