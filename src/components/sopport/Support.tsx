import FileUpload from "@/components/sopport/FileUpload";

export default function Support() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      {/* First Section */}
      <section className="pt-[50px] text-center max-w-2xl md:max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold">We're here to help</h1>
        <p className="pt-4 md:pt-6">
          Need help with your inheritance plan or account? If our <span className="text-[#C5AAFF]">FAQs</span> didn't answer your question, <br className="hidden md:block" />
          submit a support ticket, and our team will assist you within 48 business hours.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl md:max-w-3xl mx-auto pt-16">
        <h3 className="text-xl md:text-2xl pb-5">Submit a Request</h3>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="bg-[#21202A] border border-[#D9D9DD] rounded-lg outline-none w-full py-3 pl-2 mb-5"
          placeholder="Your Email Address"
        />

        <br /><label htmlFor="subject">Subject</label><br />
        <select
          id="subject"
          className="bg-[#21202A] border border-[#D9D9DD] rounded-lg outline-none w-full py-3 pl-2 mb-5"
        >
          <option value=""></option>
          <option value="Claims">Claims</option>
        </select>

        <br /><label htmlFor="description">Description</label><br />
        <textarea
          id="description"
          className="bg-[#21202A] border border-[#D9D9DD] rounded-lg outline-none w-full py-3 pl-2 pb-24 pr-2 mb-5"
          placeholder="Enter specific details of your inquiry. Please be as detailed as possible."
        />

        <FileUpload />
        <p className="text-xs">
          Please attach a screenshot of any error or issue to help us assist you faster. For files over 3.5MB or additional,
          reply to your support confirmation email.
        </p>

        <button className="bg-[#1B0055] border border-[#C0BFC6] px-8 py-3 rounded-lg mt-5 w-full max-w-xs ml-5">
          Submit
        </button>
      </section>
    </div>
  );
}
