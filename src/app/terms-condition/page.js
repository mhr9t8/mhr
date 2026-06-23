export const metadata = { title: "Terms & Conditions" };

export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen">
      <h1 className="text-3xl font-bold pt-30 mb-2 bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        Terms and Conditions
      </h1>
      <p className="text-slate-600 text-sm mb-10">Last updated: June 2026</p>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using this Site, you agree to be bound by these Terms
          and Conditions. If you do not agree with any part of these terms,
          please do not use the Site.
        </p>
      </Section>

      <Section title="2. Use of the Site">
        <p>
          This Site is a personal portfolio showcasing my work as a Frontend and
          Full-Stack Developer. You may use this Site for lawful purposes only.
          You agree not to:
        </p>
        <ul>
          <li>
            Use the Site in any way that violates applicable laws or regulations
          </li>
          <li>Attempt to gain unauthorized access to any part of the Site</li>
          <li>
            Submit false, misleading, or spam content through the contact form
          </li>
          <li>
            Copy, reproduce, or redistribute any content from this Site without
            permission
          </li>
        </ul>
      </Section>

      <Section title="3. Intellectual Property">
        <p>
          All content on this Site — including but not limited to text, images,
          project screenshots, code snippets, and design — is the property of
          Mehedi Hasan Rahat unless otherwise stated. You may not use, copy, or
          reproduce any content without prior written permission.
        </p>
      </Section>

      <Section title="4. Contact Form">
        <p>
          The contact form is provided for genuine inquiries only. By submitting
          the form, you agree that:
        </p>
        <ul>
          <li>The information you provide is accurate and truthful</li>
          <li>
            You will not use the form for spam, advertising, or malicious
            purposes
          </li>
          <li>
            I reserve the right to ignore or block submissions that violate
            these terms
          </li>
        </ul>
      </Section>

      <Section title="5. External Links">
        <p>
          This Site may contain links to third-party websites such as GitHub,
          LinkedIn, Fiverr, or Upwork. These links are provided for convenience
          only. I have no control over the content of those sites and accept no
          responsibility for them.
        </p>
      </Section>

      <Section title="6. Disclaimer of Warranties">
        <p>
          This Site is provided "as is" without any warranties of any kind,
          express or implied. I do not guarantee that the Site will be available
          at all times, error-free, or free of viruses or other harmful
          components.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, I shall not be liable for any
          direct, indirect, incidental, or consequential damages arising from
          your use of this Site or inability to access it.
        </p>
      </Section>

      <Section title="8. Changes to Terms">
        <p>
          I reserve the right to update these Terms and Conditions at any time.
          Changes will be posted on this page with an updated date. Continued
          use of the Site after changes constitutes your acceptance of the new
          terms.
        </p>
      </Section>

      <Section title="9. Governing Law">
        <p>
          These Terms and Conditions are governed by the laws of Bangladesh. Any
          disputes arising from these terms shall be subject to the jurisdiction
          of the courts of Bangladesh.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          If you have any questions about these Terms and Conditions, please
          contact me at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <A href="mailto:rahatdeveloper007@gmail.com">
              rahatdeveloper007@gmail.com
            </A>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <A href="https://rahat99.vercel.app/">rahat99.vercel.app</A>
          </li>
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-3">{title}</h2>
      <hr className="border-slate-700 mb-4" />
      <div className="text-foreground text-m leading-7 space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-slate-600">
        {children}
      </div>
    </div>
  );
}

function A({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:text-blue-500 underline transition-colors"
    >
      {children}
    </a>
  );
}
