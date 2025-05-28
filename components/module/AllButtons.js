import Link from "next/link"
import styles from "./AllButtons.module.css"

export default function AllButtons() {
  return (
    <div className={styles.container}>
      <Link href='/cars'>See All Cars</Link>
    </div>
  )
}
