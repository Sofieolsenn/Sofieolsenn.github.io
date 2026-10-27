import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import styles from "./Tile.module.css";

// Small square card for the "Other projects" grid. Pass `image` to fill it.
export default function Tile({ image, alt = "" }) {
  return (
    <div className={styles.tile}>
      {image && <Image className={styles.image} src={withBasePath(image)} alt={alt} fill sizes="335px" />}
    </div>
  );
}
