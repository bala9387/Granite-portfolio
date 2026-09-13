import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#0D1112] text-white">
      <div className="max-w-md w-full text-center p-8 md:p-12 rounded-2xl bg-[#171C1E] border border-[#2A3034] shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#0D1112] border border-[#C99A4A]/40 flex items-center justify-center text-[#C99A4A] mx-auto mb-6">
          <Search className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99A4A] block mb-2 font-mono">
          404 ERROR
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-3">
          Stone Not Found
        </h1>

        <p className="text-sm text-gray-400 mb-8 leading-relaxed font-normal">
          Looks like this stone or page has moved, or the link may be mistyped.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="gold"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>

          <Button
            href="/products"
            variant="dark"
            size="md"
            className="w-full sm:w-auto"
          >
            Browse Stones
          </Button>
        </div>
      </div>
    </div>
  );
}
