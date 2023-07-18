import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import ThanksIcon from "../ThanksIcon";

import styles from "./SummaryModal.module.css";

function SummaryModal({ title, children, boolean, action }) {
  return (
    <Dialog.Root open={boolean} onOpenChange={action}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={`stack ${styles.DialogContent}`}>
          {/* <ThanksIcon style={{ alignSelf: "center", maxWidth: "4rem" }} /> */}
          <Dialog.Title className={styles.DialogTitle}>{title}</Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            {children}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
