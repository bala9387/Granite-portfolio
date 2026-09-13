"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Layers, MapPin } from "lucide-react";
import { quoteFormSchema, QuoteFormData } from "@/lib/validations";
import { graniteProducts } from "@/data/products";
import { Button } from "@/components/ui/Button";

interface QuoteFormProps {
  initialStone?: string;
}

export function QuoteForm({ initialStone }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const matchedProduct = initialStone
    ? graniteProducts.find(
        (p) => p.slug.toLowerCase() === initialStone.toLowerCase() || p.name.toLowerCase() === initialStone.toLowerCase()
      )
    : null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      graniteRequired: matchedProduct ? matchedProduct.name : "",
      preferredFinish: matchedProduct ? matchedProduct.finishes[0] : "Polished",
      preferredSize: "600 × 600 mm",
      projectType: "residential",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to submit quotation request.");
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
      <div className="bg-[#171C1E] border border-[#C99A4A]/50 rounded-2xl p-8 md:p-14 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#C99A4A]/20 text-[#E2C07A] flex items-center justify-center mx-auto mb-6 border border-[#C99A4A]/40 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-2">
          Quotation Submitted
        </span>
        <h3 className="font-serif text-3xl font-normal text-white mb-4">
          Thank you for your enquiry.
        </h3>
        <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mb-8 leading-relaxed font-normal">
          Your requirement has been received. Our factory estimating team will review your specifications and get back to you shortly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            variant="gold"
            size="md"
          >
            Submit Another Requirement
          </Button>
          <Button href="/products" variant="gold-outline" size="md">
            Browse More Stones
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#171C1E] border border-[#2A3034] rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl space-y-8 max-w-3xl mx-auto"
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-5 h-[1.5px] bg-[#C99A4A]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
            Direct Factory Pricing
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
          Request a Factory Quotation
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-normal">
          Provide your project requirements below. For custom cut-to-size slabs, specific edge profiles, or bulk quantities, our technical specialists will prepare a detailed proposal.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* SECTION 1: Contact Details */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A] border-b border-[#2A3034] pb-2">
          1. Your Contact Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-name" className="block text-xs font-medium text-gray-300 mb-1.5">
              Full Name <span className="text-[#C99A4A]">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              {...register("name")}
              placeholder="e.g. Anandha Krishnan"
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
            />
            {errors.name && (
              <p className="mt-1 text-[11px] text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-xs font-medium text-gray-300 mb-1.5">
              Phone / WhatsApp Number <span className="text-[#C99A4A]">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              {...register("phone")}
              placeholder="+91 94432 00000"
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
            />
            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-email" className="block text-xs font-medium text-gray-300 mb-1.5">
              Email Address <span className="text-[#C99A4A]">*</span>
            </label>
            <input
              id="quote-email"
              type="email"
              {...register("email")}
              placeholder="anand@domain.com"
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
            />
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quote-company" className="block text-xs font-medium text-gray-300 mb-1.5">
              Company / Firm / Architect Name (Optional)
            </label>
            <input
              id="quote-company"
              type="text"
              {...register("company")}
              placeholder="Architecture Studio / Builder"
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Granite Specifications */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A] border-b border-[#2A3034] pb-2 flex items-center justify-between">
          <span>2. Stone & Project Specifications</span>
          <Layers className="w-3.5 h-3.5 text-[#C99A4A]" />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-project-type" className="block text-xs font-medium text-gray-300 mb-1.5">
              Project Type <span className="text-[#C99A4A]">*</span>
            </label>
            <select
              id="quote-project-type"
              {...register("projectType")}
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white focus:outline-none focus:border-[#C99A4A]"
            >
              <option value="residential">Residential (Villa / Apartment / Home)</option>
              <option value="commercial">Commercial (Corporate / Retail / Office)</option>
              <option value="hospitality">Hospitality (Hotel / Resort / Dining)</option>
              <option value="outdoor">Outdoor / Landscape / Paving</option>
              <option value="architectural">Architectural / Cladding / Monumental</option>
              <option value="other">Other Stone Application</option>
            </select>
          </div>

          <div>
            <label htmlFor="quote-granite" className="block text-xs font-medium text-gray-300 mb-1.5">
              Granite Variety Required <span className="text-[#C99A4A]">*</span>
            </label>
            <select
              id="quote-granite"
              {...register("graniteRequired")}
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white focus:outline-none focus:border-[#C99A4A]"
            >
              <option value="">-- Choose Granite Stone --</option>
              {graniteProducts.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name} ({p.colorCategory.toUpperCase()})
                </option>
              ))}
              <option value="Custom Mixed / Other Varieties">Custom / Other Stone Requirement</option>
            </select>
            {errors.graniteRequired && (
              <p className="mt-1 text-[11px] text-red-400">{errors.graniteRequired.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="quote-qty" className="block text-xs font-medium text-gray-300 mb-1.5">
              Quantity Required <span className="text-[#C99A4A]">*</span>
            </label>
            <input
              id="quote-qty"
              type="text"
              {...register("quantity")}
              placeholder="e.g. 1,200 sq. ft."
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
            />
            {errors.quantity && (
              <p className="mt-1 text-[11px] text-red-400">{errors.quantity.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quote-size" className="block text-xs font-medium text-gray-300 mb-1.5">
              Preferred Tile Size <span className="text-[#C99A4A]">*</span>
            </label>
            <select
              id="quote-size"
              {...register("preferredSize")}
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white focus:outline-none focus:border-[#C99A4A]"
            >
              <option value="600 × 600 mm">600 × 600 mm</option>
              <option value="600 × 300 mm">600 × 300 mm</option>
              <option value="800 × 800 mm">800 × 800 mm</option>
              <option value="1200 × 600 mm">1200 × 600 mm</option>
              <option value="Cut-to-Size Custom Slabs">Cut-to-Size Slabs</option>
            </select>
          </div>

          <div>
            <label htmlFor="quote-finish" className="block text-xs font-medium text-gray-300 mb-1.5">
              Surface Finish <span className="text-[#C99A4A]">*</span>
            </label>
            <select
              id="quote-finish"
              {...register("preferredFinish")}
              className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white focus:outline-none focus:border-[#C99A4A]"
            >
              <option value="Polished">High Gloss Polished</option>
              <option value="Honed">Honed (Matte / Satin)</option>
              <option value="Flamed">Thermal Flamed (Outdoor Grip)</option>
              <option value="Leathered">Leathered / Brushed Texture</option>
              <option value="Bush Hammered">Bush Hammered</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="quote-location" className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span>Delivery Destination / City / State <span className="text-[#C99A4A]">*</span></span>
          </label>
          <input
            id="quote-location"
            type="text"
            {...register("deliveryLocation")}
            placeholder="e.g. Bengaluru / Chennai / Hyderabad / Port of Chennai"
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A]"
          />
          {errors.deliveryLocation && (
            <p className="mt-1 text-[11px] text-red-400">{errors.deliveryLocation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="quote-notes" className="block text-xs font-medium text-gray-300 mb-1.5">
            Additional Specifications / Edge Profiles / Packaging Notes (Optional)
          </label>
          <textarea
            id="quote-notes"
            rows={3}
            {...register("additionalRequirements")}
            placeholder="Specify slab thickness (e.g. 20mm), chamfer/bullnose edge profiles, sample kit requests, or delivery date constraints..."
            className="w-full px-4 py-2.5 bg-[#0D1112] border border-[#2A3034] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A] resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
        icon={
          isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )
        }
      >
        {isSubmitting ? "Generating Quotation Request..." : "Request a Quote"}
      </Button>
    </form>
  );
}
