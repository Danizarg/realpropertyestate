"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Please write a brief message"),
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  propertyId?: string;
  propertyName?: string;
  defaultInterest?: string;
}

const inputClass = "w-full px-4 py-3 text-[14px] outline-none transition-colors focus:border-[#2D2C2A]";
const inputStyle = {
  border: "1px solid #E6E3DE",
  fontFamily: "Inter, system-ui, sans-serif",
  color: "#2D2C2A",
  background: "white",
  borderRadius: 2,
};
const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter, system-ui, sans-serif",
  fontSize: 11,
  color: "#8A8781",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 6,
};

export default function ContactForm({ propertyId, propertyName, defaultInterest }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: defaultInterest ?? "" },
  });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, propertyId, propertyName }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      console.error(err);
    }
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p
          className="font-display text-2xl mb-3"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#111111" }}
        >
          Thank you
        </p>
        <p className="text-[14px]" style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif" }}>
          We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot: hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      {propertyName && (
        <p
          className="text-[13px] pb-4"
          style={{ color: "#8A8781", fontFamily: "Inter, system-ui, sans-serif", borderBottom: "1px solid #E6E3DE" }}
        >
          Enquiry regarding: <span style={{ color: "#2D2C2A" }}>{propertyName}</span>
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Name</label>
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClass}
            style={inputStyle}
          />
          {errors.name && (
            <p className="mt-1 text-[12px]" style={{ color: "#8A8781" }}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
            style={inputStyle}
          />
          {errors.email && (
            <p className="mt-1 text-[12px]" style={{ color: "#8A8781" }}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Phone (optional)</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+34 ..."
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Interest</label>
          <select
            {...register("interest")}
            className={inputClass}
            style={{ ...inputStyle, appearance: "none" }}
          >
            <option value="">Select...</option>
            <option value="buying">Buying</option>
            <option value="selling">Selling</option>
            <option value="renting">Renting</option>
            <option value="private_viewing">Private Viewing</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your requirements..."
          className={inputClass}
          style={{ ...inputStyle, resize: "vertical" }}
        />
        {errors.message && (
          <p className="mt-1 text-[12px]" style={{ color: "#8A8781" }}>{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-[13px]" style={{ color: "#8A8781" }}>{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-4 text-[13px] tracking-[0.08em] uppercase text-white transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{
          background: "#111111",
          borderRadius: 4,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
