import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./SummaryModal.module.css";

function SummaryModal({ title, children, boolean, action }) {
  return (
    <Dialog.Root open={boolean} onOpenChange={action}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={`stack ${styles.DialogContent}`}>
          <img
            src="./src/assets/images/icon-thank-you.svg"
            style={{ maxWidth: "4rem", marginInline: "auto" }}
          />
          <Dialog.Title className={styles.DialogTitle}>{title}</Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            {children}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default SummaryModal;
