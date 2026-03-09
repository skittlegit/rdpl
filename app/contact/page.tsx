"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin, Clock, MessageCircle, Phone, Mail, Send } from "lucide-react";
import PageShell from "../components/PageShell";

const deptList = [
  {
    label: "Sales & Marketing",
    email: "venkat@reddysdigital.com",
    phones: ["+91 80080 02265", "+91 97037 99777", "+91 80080 25753"],
  },
  {
    label: "Managing Director",
    email: "venkat@reddysdigital.com",
    phones: ["+91 97015 77799"],
  },
  {
    label: "Accounts",
    email: "accts1@reddysdigital.com",
    phones: ["+91 91000 67305"],
  },
  {
    label: "Production",
    email: "production@reddysdigital.com",
    phones: ["+91 80086 77833"],
  },
];

const fade: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const INPUT = "w-full bg-paper-soft dark:bg-ink-soft border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-ink dark:text-paper placeholder:text-ink/30 dark:placeholder:text-paper/25 focus:outline-none focus:border-vermillion focus:ring-2 focus:ring-vermillion/10 transition-all";
const LABEL = "block text-[11px] font-semibold tracking-[0.08em] uppercase text-ink/55 dark:text-paper/45 mb-1.5";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-0.5 h-7 bg-vermillion rounded-full shrink-0" />
      <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion">{text}</p>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    dept: deptList[0].label, message: "",
  });
  const [sent, setSent] = useState(false);

  function change(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const dept = deptList.find((d) => d.label === form.dept) ?? deptList[0];
    const subject = encodeURIComponent(
      `Enquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Department: ${form.dept}\nName: ${form.name}\nCompany: ${form.company || "—"}\nPhone: ${form.phone || "—"}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${dept.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  const activeDept = deptList.find((d) => d.label === form.dept) ?? deptList[0];

  return (
    <PageShell>

      {/*  Hero  */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-paper dark:bg-ink relative overflow-hidden transition-colors">
        <div className="absolute pointer-events-none"
          style={{ top: "-10%", right: "-5%", width: "700px", height: "700px",
            background: "radial-gradient(circle,rgba(200,75,12,0.07) 0%,transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-vermillion mb-6">Contact</p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] text-ink dark:text-paper leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Let&apos;s build something.<br /><span className="italic text-vermillion">Get in touch.</span>
          </h1>
          <p className="text-ink/65 dark:text-paper/60 text-[15px] max-w-xl leading-relaxed">
            Speak directly with our team — quotes within 24 hours,
            on-site visits available across Hyderabad and surrounding regions.
          </p>
        </div>
      </section>

      {/*  Enquiry Form + Quick Contacts  */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper dark:bg-ink border-t border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">

            {/* LEFT — form */}
            <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <SectionLabel text="Send an Enquiry" />
              <h2 className="font-display text-3xl md:text-[2.6rem] text-ink dark:text-paper leading-[1.05] tracking-[-0.02em] mb-8">
                Tell us about<br /><span className="italic text-vermillion">your project.</span>
              </h2>

              <form onSubmit={submit} className="space-y-5">
                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL}>Your Name *</label>
                    <input required name="name" value={form.name} onChange={change}
                      placeholder="Rajesh Kumar" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Company / Brand</label>
                    <input name="company" value={form.company} onChange={change}
                      placeholder="Acme Corp" className={INPUT} />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={change}
                      placeholder="+91 98000 00000" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Email Address *</label>
                    <input required type="email" name="email" value={form.email} onChange={change}
                      placeholder="you@company.com" className={INPUT} />
                  </div>
                </div>

                {/* Department dropdown */}
                <div>
                  <label className={LABEL}>Send to Department *</label>
                  <div className="relative">
                    <select required name="dept" value={form.dept} onChange={change}
                      className={INPUT + " appearance-none pr-10 cursor-pointer"}>
                      {deptList.map((d) => (
                        <option key={d.label} value={d.label}>{d.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
                      <svg className="w-4 h-4 text-vermillion" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[11px] text-vermillion/70 dark:text-vermillion/60 mt-1.5 flex items-center gap-1.5">
                    <Mail size={10} />
                    Will be sent to: <span className="font-semibold">{activeDept.email}</span>
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label className={LABEL}>Message *</label>
                  <textarea required name="message" value={form.message} onChange={change}
                    rows={5}
                    placeholder="Describe your project — type of signage, dimensions, quantity, deadline, any special requirements..."
                    className={INPUT + " resize-none"} />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4 flex-wrap">
                  <button type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[13px] font-bold bg-vermillion text-white hover:bg-vermillion-dark transition-colors shadow-sm">
                    <Send size={14} />
                    {sent ? "Opening your email client" : "Send Enquiry"}
                  </button>
                  {sent && (
                    <p className="text-[12px] text-vermillion font-medium">
                      Pre-filled email opened — just hit Send in your email client.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* RIGHT — direct contact cards */}
            <div className="space-y-3 lg:sticky lg:top-28">
              <SectionLabel text="Direct Contacts" />
              {deptList.map(({ label, email, phones }, i) => (
                <motion.div key={label}
                  variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}
                  className={`relative border rounded-xl p-4 transition-colors ${
                    form.dept === label
                      ? "border-vermillion bg-vermillion/5 dark:bg-vermillion/8"
                      : "border-zinc-200 dark:border-zinc-700 bg-paper-soft dark:bg-ink-soft hover:border-vermillion/50"
                  }`}>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-xl" />
                  <p className="text-[12px] font-bold text-ink dark:text-paper mb-2.5">{label}</p>
                  <div className="space-y-1.5">
                    {phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-[12px] text-ink/75 dark:text-paper/65 hover:text-vermillion transition-colors">
                        <Phone size={10} className="text-vermillion shrink-0" />
                        {p}
                      </a>
                    ))}
                    {email && (
                      <a href={`mailto:${email}`}
                        className="flex items-center gap-2 text-[11px] text-ink/55 dark:text-paper/45 hover:text-vermillion transition-colors mt-0.5">
                        <Mail size={10} className="text-vermillion shrink-0" />
                        {email}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  Address + Hours + WhatsApp  */}
      <section className="py-12 md:py-20 lg:py-28 bg-paper-soft dark:bg-ink-soft border-t border-zinc-200 dark:border-zinc-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionLabel text="Visit & Connect" />
          <div className="grid md:grid-cols-3 gap-4">

            {/* Address */}
            <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              className="relative border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 bg-paper dark:bg-ink hover:border-vermillion/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-2xl" />
              <div className="w-9 h-9 rounded-xl bg-vermillion/10 dark:bg-vermillion/15 flex items-center justify-center mb-4">
                <MapPin size={15} className="text-vermillion" />
              </div>
              <h3 className="text-[13px] font-semibold text-ink dark:text-paper mb-2">Our Address</h3>
              <p className="text-[13px] text-ink/70 dark:text-paper/65 leading-relaxed">
                Plot No.10, Phase -1<br />
                Cherlapalli Industrial Area<br />
                Hyderabad, Secunderabad<br />
                Telangana 500 051
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="relative border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 bg-paper dark:bg-ink hover:border-vermillion/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-2xl" />
              <div className="w-9 h-9 rounded-xl bg-vermillion/10 dark:bg-vermillion/15 flex items-center justify-center mb-4">
                <Clock size={15} className="text-vermillion" />
              </div>
              <h3 className="text-[13px] font-semibold text-ink dark:text-paper mb-2">Working Hours</h3>
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-ink/55 dark:text-paper/45">Mon – Sat</span>
                  <span className="font-medium text-ink dark:text-paper">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/55 dark:text-paper/45">Sunday</span>
                  <span className="font-medium text-ink dark:text-paper">Closed</span>
                </div>
              </div>
              <p className="text-[11px] text-ink/45 dark:text-paper/35 mt-4 leading-snug">
                Urgent jobs accommodated — call Sales to discuss.
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="relative border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 bg-paper dark:bg-ink hover:border-vermillion/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-vermillion/60 via-vermillion/20 to-transparent rounded-t-2xl" />
              <div className="w-9 h-9 rounded-xl bg-vermillion/10 dark:bg-vermillion/15 flex items-center justify-center mb-4">
                <MessageCircle size={15} className="text-vermillion" />
              </div>
              <h3 className="text-[13px] font-semibold text-ink dark:text-paper mb-2">WhatsApp Us</h3>
              <p className="text-[13px] text-ink/70 dark:text-paper/65 leading-relaxed mb-4">
                Send your brief, artwork or a quick query — we respond within the hour during working hours.
              </p>
              <a href="https://wa.me/919703799777" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-semibold bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors">
                <MessageCircle size={13} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
