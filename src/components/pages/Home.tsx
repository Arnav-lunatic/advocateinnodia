import { HomeCarousel } from "../HomeCarousel";
import { FaBalanceScale, FaGavel, FaHandshake } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaShieldHalved } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import { WhatsAppButton } from "../buttons/WhatsappButton";
import { EmailButton } from "../buttons/EmailButton";

const stats = [
    { label: "Years of Experience", value: "18+" },
    { label: "Successful Cases", value: "950+" },
    { label: "Dedicated Experts", value: "12" },
    { label: "Client Satisfaction", value: "98%" },
];

const services = [
    {
        icon: <FaGavel className="w-6 h-6 text-white" />,
        title: "Criminal Lawyers",
        copy: " Providing Special kind of services like fastest & efficient ideas and advice with minimum costs.",
    },
    {
        icon: <AiOutlineFileProtect className="w-6 h-6 text-white" />,
        title: "Corporate, Trade & Industrial Disputes Lawyers",
        copy: "The Law firm can fix strategic goal may be the verdict, damages or sentence awarded in the case.",
    },
    {
        icon: <FaHandshake className="w-6 h-6 text-white" />,
        title: "Consumer Protection & Dispute Lawyers",
        copy: "The parties to a lawsuit & lawfirm meet with a neutral third-party in an effort to settle the case.",
    },
    {
        icon: <FaBalanceScale className="w-6 h-6 text-white" />,
        title: "Civil Lawyers",
        copy: "Rules that delineate private rights, govern disputes between individuals contracts and Family Law.",
    }, {
        icon: <MdAccountBalance className="w-6 h-6 text-white" />,
        title: "Court Marriage Lawyers",
        copy: "Registration of court marriage at sub registrar of hindi marriage and special marriage office."
    }
    , {
        icon: <FaShieldHalved className="w-6 h-6 text-white" />,
        title: "Cyber Lawyers",
        copy: "Sit down with you, hear about your problem, and give some initial thoughts about it,with no charges. "
    },
];

// const testimonials = [
//     {
//         quote:
//             "They handled our acquisition with precision. Every risk was flagged early and negotiated away.",
//         name: "Aditi Kapoor",
//         role: "Founder, Meridian Infra",
//     },
//     {
//         quote:
//             "From the first consultation I knew my case was in confident, ethical hands. We won decisively.",
//         name: "Rahul Batra",
//         role: "Entrepreneur",
//     },
// ];

export function Home() {
    return (
        <main className="bg-zinc-50 text-zinc-900">
            <section className="relative overflow-hidden bg-zinc-900 text-white">
                <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 opacity-80" />
                <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
                    <div className="flex-1 space-y-6">
                        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-emerald-300">
                            Trusted Legal Counsel in Noida
                        </p>
                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Strategic advocacy that protects what you have built.
                        </h1>
                        <p className="text-lg text-zinc-200">
                            From high-stakes litigation to everyday compliance, we pair deep legal expertise with proactive
                            communication so you always know the next move.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="tel:+919627829808"
                                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-50"
                            >
                                Call for a Consultation
                            </a>
                            <a
                                href="/services"
                                className="rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                            >
                                Explore Services
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 rounded-2xl bg-white/5 p-6 shadow-2xl backdrop-blur">
                        <HomeCarousel />
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                        <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
                        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-500">{stat.label}</p>
                    </div>
                ))}
            </section>

            <section id="services" className="border-y border-zinc-200 bg-white py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="max-w-2xl space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Practice Areas</p>
                        <h2 className="text-3xl font-bold sm:text-4xl">Legal solutions engineered for modern business.</h2>
                        <p className="text-lg text-zinc-600">
                            We combine courtroom experience with commercial empathy, helping founders, families, and enterprises
                            navigate the law with confidence.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 text-white"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                                <div className="relative flex h-full flex-col gap-4 p-6">
                                    <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                                    <p className="text-sm text-zinc-200">{service.copy}</p>
                                    <span className="mt-auto text-sm font-semibold text-emerald-300">Schedule a briefing →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="rounded-3xl bg-zinc-900 px-8 py-12 text-white shadow-2xl">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Client Voices</p>
                            <h2 className="mt-3 text-3xl font-bold">Partnerships built on clarity and courage.</h2>
                            <p className="mt-4 text-zinc-300">
                                Every mandate is run like a mission-critical project: responsive reporting, transparent billing, and legal
                                intelligence that empowers decisive action.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {testimonials.map((testimonial) => (
                                <blockquote
                                    key={testimonial.name}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                                >
                                    <p className="text-lg italic text-white">“{testimonial.quote}”</p>
                                    <footer className="mt-4 text-sm font-semibold text-emerald-200">
                                        {testimonial.name} · <span className="text-white/80">{testimonial.role}</span>
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="mx-auto max-w-5xl px-6 pb-20">
                <div className="rounded-3xl border border-zinc-200 bg-white px-8 py-10 text-center shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Ready to act?</p>
                    <h2 className="mt-3 text-3xl font-bold">Book a strategy session within the next 24 hours.</h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        Share your brief, receive a confidential roadmap, and meet the team that will champion your interests.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <WhatsAppButton />
                        <EmailButton />
                    </div>
                </div>
            </section>
        </main>
    );
}