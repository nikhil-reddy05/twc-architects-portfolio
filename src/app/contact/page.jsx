import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import DotPageBackground from "@/components/DotPageBackground";
import Quote from "@/components/Quote";
import { architecturePageTheme } from "@/config/projectPageThemes";

export const metadata = {
  title: "Contact | TWC Architects",
  description:
    "Contact TWC Architects (The White Walls Company) for architecture and interior design inquiries. Reach out by phone, email, WhatsApp, or Instagram.",
  alternates: {
    canonical: "https://www.twcarchitects.com/contact",
  },
  openGraph: {
    title: "Contact | TWC Architects",
    description:
      "Get in touch with TWC Architects for architecture and interior design inquiries.",
    url: "https://www.twcarchitects.com/contact",
    siteName: "TWC Architects",
    type: "website",
  },
};

const mapSrc =
  "https://www.google.com/maps?q=17.068867157906645,79.26405253188993&z=16&output=embed";
const BUSINESS_MAP_URL = "https://maps.app.goo.gl/5rYTdjcwHDV5YzuR8";

const contactItems = [
  {
    label: "PHONE",
    value: "+91 7036113378",
    href: "tel:+917036113378",
    icon: FiPhone,
  },
  {
    label: "EMAIL",
    value: "thewhitewallscompany@gmail.com",
    href: "mailto:thewhitewallscompany@gmail.com",
    icon: FiMail,
  },
  {
    label: "LOCATION",
    value: "TWC Architects Pvt Ltd, Nalgonda",
    href: BUSINESS_MAP_URL,
    icon: FiMapPin,
  },
];

export default function ContactPage() {
  const { background } = architecturePageTheme;

  return (
    <section className="relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden bg-[#f7f5ef] text-[#101828] md:-mt-20">
      <div className="relative min-h-[300px] overflow-hidden bg-[#111827] sm:min-h-[460px] lg:min-h-[540px]">
        <iframe
          title="TWC Architects Location"
          className="absolute inset-0 h-full w-full scale-105 border-0 grayscale"
          src={mapSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 bg-[#111827]/55" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f7f5ef]" />
        <a
          href={BUSINESS_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open TWC Architects location in Google Maps"
          className="absolute inset-0 z-[1]"
        />

        <div className="pointer-events-none relative z-10 mx-auto flex min-h-[300px] max-w-7xl flex-col items-center justify-center px-4 pt-6 text-center sm:min-h-[460px] sm:px-6 lg:min-h-[540px]">
          <h1 className="text-[1.45rem] font-semibold leading-[1.12] tracking-normal text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-2.5 max-w-[15.5rem] text-[12px] leading-[1.45] tracking-normal text-white/85 sm:mt-5 sm:max-w-3xl sm:text-xl">
            Let us help bring your architectural vision to life
          </p>
          <a
            href={BUSINESS_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/20 px-3 py-2 text-[11px] font-medium leading-4 tracking-normal text-white shadow-sm backdrop-blur-md transition hover:bg-white/25 sm:mt-8 sm:gap-3 sm:px-5 sm:py-3 sm:text-base"
          >
            <FiMapPin className="h-3.5 w-3.5 flex-shrink-0 sm:h-5 sm:w-5" />
            <span>TWC Architects Pvt Ltd, Nalgonda</span>
          </a>
        </div>
      </div>

      <DotPageBackground
        backgroundColor={background.color}
        dotColor={background.dotColor}
        dotOpacity={background.dotOpacity}
        dotSize={background.dotSize}
        dotSpacing={background.dotSpacing}
        className="mt-0 md:mt-0 text-[#101828]"
      >
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-16 lg:max-w-[96rem] lg:px-8 lg:py-22">
          <div className="mx-auto max-w-[36rem] text-center sm:max-w-3xl">
            <h2 className="text-[1.45rem] font-semibold leading-[1.12] tracking-normal text-[#111827] sm:text-4xl lg:text-5xl">
              Send Us an Enquiry
            </h2>
            <p className="mx-auto mt-2 max-w-[15.5rem] text-[12px] leading-[1.45] tracking-normal text-[#667085] sm:mt-4 sm:max-w-2xl sm:text-base sm:leading-7 lg:text-lg">
              Fill out the form below and we'll get back to you soon
            </p>
          </div>

          <div className="mt-5 grid min-w-0 gap-4 pb-[30px] sm:mt-12 md:gap-6 lg:grid-cols-[minmax(516px,0.9fr)_minmax(0,1.1fr)] lg:gap-7 xl:grid-cols-[minmax(516px,0.8fr)_minmax(0,1.2fr)] xl:gap-8">
            <div className="min-w-0 space-y-4 sm:space-y-6">
              <div className="min-w-0 rounded-[20px] border border-[#e3e7ed] bg-white/85 p-3.5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:rounded-[28px] sm:p-5 lg:p-6">
                <div className="space-y-3 sm:space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const isEmail = item.label === "EMAIL";
                    const value = (
                      <span
                        className={`block text-[11px] font-medium leading-[1.3] tracking-normal text-[#1f2937] sm:text-sm md:text-[13px] md:leading-5 lg:text-sm ${
                          isEmail
                            ? "whitespace-normal [overflow-wrap:anywhere] md:whitespace-nowrap md:[overflow-wrap:normal]"
                            : "break-words"
                        }`}
                      >
                        {item.value}
                      </span>
                    );

                    return (
                      <div
                        key={item.label}
                        className="flex min-w-0 gap-3 border-b border-[#edf0f3] pb-3 last:border-b-0 last:pb-0 sm:gap-4 sm:pb-5"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#eef1f5] text-[#344054] sm:h-10 sm:w-10">
                          <Icon className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" />
                        </div>
                        <div className="min-w-0">
                          <p className="mb-1 text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#98a2b3] sm:text-[11px] sm:tracking-[0.1em]">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="transition hover:text-[#0f2742]"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="min-w-0 rounded-[20px] border border-[#e3e7ed] bg-white/85 p-3.5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:rounded-[28px] sm:p-5 lg:p-6">
                <h3 className="text-[1.1rem] font-semibold leading-tight tracking-normal text-[#111827] sm:text-xl">
                  Connect With Us
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href="https://wa.me/917036113378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#22c55e] px-3 py-2 text-[12px] font-semibold tracking-normal text-white shadow-sm transition hover:bg-[#16a34a] sm:min-h-12 sm:px-5 sm:text-sm"
                  >
                    <FaWhatsapp className="h-3.5 w-3.5 sm:h-5 sm:w-5" />{" "}
                    WhatsApp
                  </a>

                  <a
                    href="https://instagram.com/thewhitewallsco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-[#d8dee8] bg-white px-3 py-2 text-[12px] font-semibold tracking-normal text-[#1f2937] shadow-sm transition hover:border-[#c7ceda] hover:bg-[#f8fafc] sm:min-h-12 sm:px-5 sm:text-sm"
                  >
                    <BsInstagram className="h-3.5 w-3.5 sm:h-5 sm:w-5" />{" "}
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <Quote />
          </div>
        </div>
      </DotPageBackground>
    </section>
  );
}
