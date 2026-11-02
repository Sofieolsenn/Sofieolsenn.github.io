import styles from "./Button.module.css";

// An optional icon can go inside next to the text; `className` adds extra styles
export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
