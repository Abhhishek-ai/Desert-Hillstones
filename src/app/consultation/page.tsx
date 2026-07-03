"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, User, Phone, MapPin, AlignLeft, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Client-side Zod Validation Schema
const ConsultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  projectType: z.enum(["Residential", "Villa", "Commercial", "Hospitality", "Renovation"]),
  preferredDate: z.string().min(1, "Preferred date is required"),
  projectLocation: z.string().min(2, "Project location is required"),
  requirements: z.string().min(10, "Please describe your project (minimum 10 characters)"),
  requestSamples: z.boolean().optional(),
});

type ConsultationFormValues = z.infer<typeof ConsultationSchema>;

export default function PrivateConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      projectType: "Residential",
      requestSamples: false,
    }
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Submit to serverless route for database logging backup
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // 2. Trigger WhatsApp deep link with detailed variables
        const formattedDate = new Date(data.preferredDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric"
        });

        const waLink = buildWhatsAppLink("consultation", {
          name: data.name,
          date: formattedDate,
          projectType: data.projectType
        });
        
        window.open(waLink, "_blank");
        
        // 3. Show inline thank you confirmation
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting consultation booking:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex-grow flex flex-col justify-center">
      {!isSubmitted ? (
        /* Form State */
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-clamp-micro text-gold font-semibold uppercase tracking-wider">
              Studio Services
            </span>
            <h1 className="text-clamp-h2 text-ink font-medium tracking-tight">
              Schedule Your Private Studio Consultation
            </h1>
            <p className="text-sm text-ink-muted leading-relaxed">
              Tell us about your project. A member of our studio will reach out personally within 24 hours to arrange your visit.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-6 bg-surface border border-solid border-border p-8 md:p-12 rounded-sm shadow-sm"
          >
            {/* Field 1: Name */}
            <div className="flex flex-col gap-2">
              <label className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold/75" />
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                className={`border border-solid p-3 text-sm font-sans focus-visible:outline-none focus-visible:border-gold transition-colors duration-200 ${
                  errors.name ? "border-red-400" : "border-border"
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-500 font-sans">{errors.name.message}</span>
              )}
            </div>

            {/* Field 2: Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold/75" />
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone")}
                className={`border border-solid p-3 text-sm font-sans focus-visible:outline-none focus-visible:border-gold transition-colors duration-200 ${
                  errors.phone ? "border-red-400" : "border-border"
                }`}
              />
              {errors.phone && (
                <span className="text-xs text-red-500 font-sans">{errors.phone.message}</span>
              )}
            </div>

            {/* Field 3: Project Type (Select) */}
            <div className="flex flex-col gap-2">
              <label className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-gold/75" />
                Project Type
              </label>
              <select
                {...register("projectType")}
                className="border border-solid border-border p-3 text-sm font-sans bg-surface focus-visible:outline-none focus-visible:border-gold transition-colors duration-200"
              >
                <option value="Residential">Residential</option>
                <option value="Villa">Villa</option>
                <option value="Commercial">Commercial</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Renovation">Renovation</option>
              </select>
            </div>

            {/* Field 4: Preferred Date */}
            <div className="flex flex-col gap-2">
              <label className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold/75" />
                Preferred Consultation Date
              </label>
              <input
                type="date"
                {...register("preferredDate")}
                className={`border border-solid p-3 text-sm font-sans focus-visible:outline-none focus-visible:border-gold transition-colors duration-200 ${
                  errors.preferredDate ? "border-red-400" : "border-border"
                }`}
              />
              {errors.preferredDate && (
                <span className="text-xs text-red-500 font-sans">{errors.preferredDate.message}</span>
              )}
            </div>

            {/* Field 5: Location */}
            <div className="flex flex-col gap-2">
              <label className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold/75" />
                Project Location
              </label>
              <input
                type="text"
                {...register("projectLocation")}
                className={`border border-solid p-3 text-sm font-sans focus-visible:outline-none focus-visible:border-gold transition-colors duration-200 ${
                  errors.projectLocation ? "border-red-400" : "border-border"
                }`}
              />
              {errors.projectLocation && (
                <span className="text-xs text-red-500 font-sans">{errors.projectLocation.message}</span>
              )}
            </div>

            {/* Field 6: Requirements */}
            <div className="flex flex-col gap-2">
              <label className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <AlignLeft className="w-3.5 h-3.5 text-gold/75" />
                Requirements
              </label>
              <textarea
                rows={4}
                {...register("requirements")}
                className={`border border-solid p-3 text-sm font-sans focus-visible:outline-none focus-visible:border-gold transition-colors duration-200 resize-none ${
                  errors.requirements ? "border-red-400" : "border-border"
                }`}
                placeholder="Briefly describe your project details, stone types, or edge requirements..."
              />
              {errors.requirements && (
                <span className="text-xs text-red-500 font-sans">{errors.requirements.message}</span>
              )}
            </div>

            {/* Optional Checkbox */}
            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                id="requestSamples"
                {...register("requestSamples")}
                className="w-4.5 h-4.5 accent-gold border-solid border-border cursor-pointer focus-visible:outline-none"
              />
              <label htmlFor="requestSamples" className="text-xs text-ink cursor-pointer select-none font-medium">
                Also request physical material samples
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-center py-4 bg-ink text-surface text-xs tracking-wider uppercase font-semibold hover:bg-gold-deep transition-all duration-300 disabled:opacity-50 mt-4 cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Booking Consultation..." : "Submit Consultation Request"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        /* Confirmation State (replaces form inline) */
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center bg-surface border border-solid border-gold/30 p-10 md:p-16 rounded-sm shadow-md"
        >
          <CheckCircle2 className="w-12 h-12 text-gold mb-6 shrink-0" />
          <h2 className="font-display text-2xl text-ink font-semibold mb-4 tracking-tight">
            Consultation Request Received
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed max-w-md">
            Your consultation request has been received. Our studio will be in touch within 24 hours to arrange a time that works for you.
          </p>
        </motion.div>
      )}
    </div>
  );
}
