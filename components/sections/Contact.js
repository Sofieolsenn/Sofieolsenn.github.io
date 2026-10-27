import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={`container section ${styles.contact}`} id="contact" aria-labelledby="contact-label">
      <div>
        <SectionLabel id="contact-label">Contact</SectionLabel>
        <p className={styles.heading}>{contact.heading}</p>
        <p className={styles.intro}>{contact.intro}</p>
        <ContactForm />
      </div>
      <div className={styles.photo}>
        <Image
          src={withBasePath("/images/sofie-contact.jpg")}
          alt="Sofie Olsen smiling"
          fill
          sizes="(max-width: 900px) 100vw, 525px"
        />
      </div>
    </section>
  );
}
