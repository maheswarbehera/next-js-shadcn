import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

  import React from 'react'
  
  function page() {

    const faq = [
      {
        "question": "text 1",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        "question": "text 2",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        "question": "text 3",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
    ] 
    return (
      <div>
        {faq.map((item, index) => {
          return ( 
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        }) 
        }        
    </div>
    )
  }
  
  export default page