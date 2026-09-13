"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-[14px] transition-all duration-300 data-[state=open]:border-2 data-[state=open]:border-[#FFC107] data-[state=open]:bg-[#FFFDF5] data-[state=closed]:border data-[state=closed]:border-gray-200/70 data-[state=closed]:bg-white hover:data-[state=closed]:border-amber-300",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold tracking-tight text-gray-900 transition-all sm:text-[19px]",
        className
      )}
      {...props}
    >
      {children}
      <span className="flex size-7 shrink-0 items-center justify-center text-2xl font-normal text-gray-800">
        <Plus className="size-5 transition-transform duration-200 group-data-[state=open]:hidden" />
        <Minus className="hidden size-5 transition-transform duration-200 group-data-[state=open]:block" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm font-normal leading-relaxed text-[#737373] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-base"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
