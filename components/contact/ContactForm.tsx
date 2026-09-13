"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { graniteProducts } from "@/data/products";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to submit inquiry.");
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-[#171C1E] border border-[#C99A4A]/50 rounded-2xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C99A4A]/20 text-[#E2C07A] flex items-center justify-center mx-auto mb-5 border border-[#C99A4A]/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-white mb-2">
          Message Received
        </h3>
        <p className="text-sm text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for contacting Sri Akshaya Granites. Our factory coordination team will review your inquiry and get in touch with you shortly.
        </p>
        <Button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          variant="gold-outline"
          size="sm"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#171C1E] border border-[#2A3034] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl space-y-6"
    >
      <div>
        <h3 className="font-serif text-2xl font-semibold text-white mb-1">
          Send Us a Message
        </h3>
        <p className="text-xs text-gray-400">
          Complete the form below and our stone specialists will contact you.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Full Name <span className="text-[#C99A4A]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            {...register("name")}
            placeholder="e.g. Ramesh Sundaram"
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
          />
          {errors.name && (
            <p className="mt-1 text-[11px] text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Phone Number <span className="text-[#C99A4A]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            {...register("phone")}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
          />
          {errors.phone && (
            <p className="mt-1 text-[11px] text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Email Address <span className="text-[#C99A4A]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            {...register("email")}
            placeholder="ramesh@company.com"
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Company / Architecture Firm */}
        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Company / Architecture Firm (Optional)
          </label>
          <input
            id="contact-company"
            type="text"
            {...register("company")}
            placeholder="Studio / Developer Name"
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Product of Interest */}
        <div>
          <label
            htmlFor="contact-product"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Select Product of Interest
          </label>
          <select
            id="contact-product"
            {...register("productOfInterest")}
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white focus:outline-none focus:border-[#C99A4A]"
          >
            <option value="">-- General Inquiries / All Products --</option>
            {graniteProducts.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.colorCategory.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        {/* Approximate Quantity */}
        <div>
          <label
            htmlFor="contact-qty"
            className="block text-xs font-medium text-gray-300 mb-1.5"
          >
            Estimated Quantity (Optional)
          </label>
          <input
            id="contact-qty"
            type="text"
            {...register("quantity")}
            placeholder="e.g. 500 sq. ft. or 100 sq. m"
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-medium text-gray-300 mb-1.5"
        >
          Message / Requirement Details <span className="text-[#C99A4A]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          {...register("message")}
          placeholder="Please describe your tile dimensions, finish requirements, target project, or delivery timeline..."
          className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A] resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-[11px] text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="gold"
        size="md"
        disabled={isSubmitting}
        className="w-full"
        icon={
          isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )
        }
      >
        {isSubmitting ? "Sending Inquiry..." : "Send Message"}
      </Button>
    </form>
  );
}
