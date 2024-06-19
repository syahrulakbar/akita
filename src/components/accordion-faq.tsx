import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I purchase tickets for an event?</AccordionTrigger>
        <AccordionContent>{`To purchases tickets, visit the event section you wish to attend and click the "Get Ticket" button. Follow the instructions to complete the purchase, and you will receive a confirmation email once the payment is successful.`}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
        <AccordionContent>
          We accept various payment methods, including debit cards, and digital payment (e.g.,
          Gopay, OVO, DANA, LinkAja, and ShopeePay).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Will I receive a physical ticket?</AccordionTrigger>
        <AccordionContent>
          Yes, you will receive a physical ticket. Please show the token ticket to the event venue
          for entry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left">{`What should I do if I don't receive a confirmation email?`}</AccordionTrigger>
        <AccordionContent>
          If yout do not receive a confirmation email, please check your spam folder. If you still
          cannot find it, please contact our at Instagram or Whatsapp for further assistance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left">{`Can I get a refund for tickets I have purchased?`}</AccordionTrigger>
        <AccordionContent>
          No, we do not offer refunds for tickets that have been purchased. Please make sure you are
          able to attend the event before purchasing tickets.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
