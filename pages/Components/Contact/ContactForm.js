import ContactIcon from "./ContactIcon";

const ContactForm = () => {
    const sendMessages = (e) => {
        e.preventDefault();
        console.log('send message');
    }
    return (
        <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
        <form onClick={sendMessages}>
          <div class="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            />
          </div>
          <div class="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              placeholder="Your Phone"
              class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            />
          </div>
          <div class="mb-6">
            <textarea
              rows="6"
              placeholder="Your Message"
              class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-600 border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
<ContactIcon/>
      </div>
    );
};

export default ContactForm;