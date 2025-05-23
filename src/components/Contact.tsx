import "../styles/Contact.css";

const Contact = () => {
  return (
    <main>
      <section className="image"></section>
      <section className="contact-form">
        <h1>Contact form</h1>
        <p>Please Complete this to help us get back to you.</p>
        <div>
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            maxLength={250}
            required
            aria-describedby="FirstNameError"
            placeholder="e.g. John"
          />
          <div className="error" id="nameFirstError">
        <span role="alert">Please provide a name</span>
        </div>
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="LastName"
            maxLength={250}
            required
            aria-describedby="lastNameError"
            placeholder="e.g. Smith"
          />
        </div>
        <div className="error" id="nameLastError">
        <span role="alert">Please provide a name</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={250}
            required
            aria-describedby="emailError"
            placeholder="e.g. smith@gmail.com"
          />
  <div className="error" id="emailError">
        <span role="alert">Please provide a email</span>
        </div>

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={250}
            required
            aria-describedby="phoneError"
            placeholder="e.g. xxx-xxx-xxxx"
          />
            <div className="error" id="phoneError">
        <span role="alert">Please provide a name</span>
        </div>
        </div>
        <div>
          <label htmlFor="askAbout">What would you like to ask?</label>
          <select id="hearAbout" required aria-describedby="hearAboutErron">
            <option value="Sales">Sales inquiry</option>
            <option value="career">Career opportunity</option>
            <option value="payment">Payment inquiry</option>
            <option value="media">media</option>
            <option value="other">Other</option>
          </select>
  <div className="error" id="reasonError">
        <span role="alert">Please provide a ...</span>
        </div>
        </div>
        <div>
          <label htmlFor="hearAbout">How did you hear about us?</label>
          <select id="hearAbout" required aria-describedby="hearAboutErron">
            <option value="online">Online Search (e.g.,Google, Bing)</option>
            <option value="online">Social Media(e.e.,Linkedin)</option>
            <option value="online">Blog/Article</option>
            <option value="online">Online Search (e.g.,Google, Bing)</option>
          </select>
            <div className="error" id="hearError">
        <span role="alert">Please provide a ...</span>
        </div>
        </div>
        <label htmlFor="message">
        <p>Message</p>
        <p>Please let us know about your enquiry.</p>
        </label>
        <textarea
        id="message"
        name="message"
        rows={5}
        required
        maxLength={500}
        aria-describedby="messageError"
        placeholder="How can we help?"
        ></textarea>
      </section>
    </main>
  );
};

export default Contact;
