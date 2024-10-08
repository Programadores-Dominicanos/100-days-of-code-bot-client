import React, { forwardRef, useMemo } from "react";

interface ITextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"; // Variants for the element
  children: React.ReactNode;
}

const Text = forwardRef<HTMLElement, ITextProps>(
  ({ children, variant = "p", className, ...rest }, ref) => {
    const textSizeClass = useMemo(() => {
      switch (variant) {
        case "h1":
          return `text-4xl font-bold ${className}`; // Large size for h1
        case "h2":
          return `text-3xl font-semibold ${className}`; // Slightly smaller for h2
        case "h3":
          return `text-2xl font-medium ${className}`;
        case "h4":
          return `text-xl font-medium ${className}`;
        case "h5":
          return `text-lg font-medium ${className}`;
        case "span":
          return `text-base ${className}`; // Default size for inline elements
        case "p":
        default:
          return `text-base ${className}`; // Default size for paragraphs
      }
    }, [variant, className]);

    switch (variant) {
      case "h1":
        return (
          <h1
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLHeadingElement>}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLHeadingElement>}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLHeadingElement>}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLHeadingElement>}
          >
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLHeadingElement>}
          >
            {children}
          </h5>
        );
      case "span":
        return (
          <span
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLSpanElement>}
          >
            {children}
          </span>
        );
      case "p":
      default:
        return (
          <p
            className={textSizeClass}
            {...rest}
            ref={ref as React.Ref<HTMLParagraphElement>}
          >
            {children}
          </p>
        );
    }
  }
);

export default Text;
