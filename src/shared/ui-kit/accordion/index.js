import {AccordionRoot} from "./components/accordion-root";
import {AccordionTrigger} from "./components/accordion-trigger";
import {AccordionContent} from "./components/accordion-content";
import {AccordionItem} from "./components/accordion-item";

export const Accordion = Object.assign(AccordionRoot, {
    Trigger: AccordionTrigger,
    Content: AccordionContent,
    Item: AccordionItem
})
