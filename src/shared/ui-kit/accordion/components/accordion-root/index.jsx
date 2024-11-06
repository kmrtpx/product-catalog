import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./index.module.scss";

export function AccordionRoot({children, defaultValue}) {
    return <Accordion.Root
        className={styles.accordionRoot}
        type="multiple"
        defaultValue={defaultValue}
    >
        {children}
    </Accordion.Root>
}
