import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-hot-toast";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const data = new FormData(form);

    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const subject = data.get("subject")?.trim();
    const message = data.get("message")?.trim();

    if (!name || !email || !subject || !message) {
      toast.error("❌ Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mvgaorpg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success(
          "✅ Email Sent Successfully! Thank you for reaching out — I'll be in touch shortly.",
        );
        form.reset();
      } else {
        toast.error("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("❌ Error connecting to the server.");
    }

    setIsLoading(false);
  };

  return (
    <section
      id="contact"
      className="overflow-hidden xl:h-[80vh] xs:h-[80vh] ms:h-[65vh] sm:h-[60vh] bg-primary flex flex-col items-center justify-center px-8 xs:mt-[0vh] xl:mt-[8vh] ms:mt-[0px] sm:mt-[0px]"
    >
      <h2 className="text-textSecondary xl:text-[25px] sm:text-[20px] xs:text-[18px] tracking-wider mb-12">
        LET'S <span className="text-textPrimary">WORK</span> TOGETHER!
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center xl:gap-20 sm:gap-0 xs:gap-0">
        <div className="flex justify-center items-start  xl:flex-wrap md:flex-nowrap">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="backdrop-blur-md bg-[#1a1a1a]/50 border border-cardColor shadow-[0_0_15px_#b4f53244] rounded-2xl p-8 xl:w-[380px] xs:w-[40vh] ms:w-[35vh] sm:w-[36vh] text-left space-y-3 xs:text-[12px] xl:text-[15px] "
          >
            {["name", "email", "subject"].map((field, i) => (
              <div key={i}>
                <label
                  htmlFor={field}
                  className="block text-[#c2cad0] font-semibold mb-2"
                >
                  {field.toUpperCase()}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Your ${field}`}
                  className="w-full p-2 rounded-lg bg-[#1f1f1f] text-[#c2cad0] border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-cardColor/60 transition-all duration-200 xl:text-[12px] sm:text-[10px] xs:text-[10px]"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-[#c2cad0] font-semibold mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message"
                className="w-full p-2 rounded-lg bg-[#1f1f1f] text-[#c2cad0] border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-cardColor/60 transition-all duration-200 xl:text-[12px] sm:text-[10px] xs:text-[10px]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`xl:w-3/4 xs:w-[10vh] mx-auto block py-2 rounded-lg transition duration-300 tracking-wide
                ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-cardColor hover:bg-[#a5e42f] text-[#101010]"}`}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>

        {/* <div className="flex flex-col items-center justify-start xl:pt-0 xs:pt-6">
          <div className="flex justify-center space-x-6">
            {[
              {
                href: "https://www.linkedin.com/in/miguel-tovar-tabares-6553021b9",
                icon: "fab fa-linkedin",
              },
              {
                href: "https://www.facebook.com/share/18aLTub7t5/?mibextid=wwXIfr",
                icon: "fab fa-facebook",
              },
              {
                href: "https://www.instagram.com/mtovar.98?igsh=emR2cDFiZWZyM2U1&utm_source=qr",
                icon: "fab fa-instagram",
              },
              {
                href: "https://www.tiktok.com/@mtovar098?_t=ZS-8tLvDTyL13H&_r=1",
                icon: "fab fa-tiktok",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b4f532]/80 xl:text-3xl sm:text-2xl xs:text-2xl hover:text-[#b4f532] transition duration-300"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
