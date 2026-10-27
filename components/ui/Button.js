import styles from "./Button.module.css";

export default function Button({ href, variant = "primary", children, ...props }) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
