export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 min-h-screen">
      <h1 className="text-3xl font-bold pt-30 mb-2 bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <p className="text-slate-600 text-sm mb-10">Last updated: June 2026</p>

      <Section title="1. Information I Collect">
        <p>When you submit the contact form on this Site, I collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your message</li>
          <li>Your IP address (for spam prevention purposes only)</li>
        </ul>
        <p>
          I do not collect any other personal information. I do not use cookies,
          tracking pixels, or any analytics tools.
        </p>
      </Section>

      <Section title="2. How I Use Your Information">
        <p>
          The information you submit through the contact form is used solely to:
        </p>
        <ul>
          <li>Respond to your inquiry</li>
          <li>Prevent spam and abuse</li>
        </ul>
        <p>
          Your information is never sold, rented, or shared with any third
          parties for marketing purposes.
        </p>
      </Section>

      <Section title="3. Data Storage">
        <p>
          Contact form submissions are stored securely in a database provided by
          Supabase. You can review Supabase's privacy practices at{" "}
          <A href="https://supabase.com/privacy">supabase.com/privacy</A>.
        </p>
      </Section>

      <Section title="4. Data Retention">
        <p>
          Your submitted information is retained only as long as necessary to
          respond to your inquiry. You may request deletion of your data at any
          time by contacting me at{" "}
          <A href="mailto:rahatdeveloper007@gmail.com">
            rahatdeveloper007@gmail.com
          </A>
          .
        </p>
      </Section>

      <Section title="5. Third-Party Services">
        <p>This Site uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Supabase</strong> — for storing contact form submissions
          </li>
          <li>
            <strong>Resend</strong> — for sending email notifications
          </li>
          <li>
            <strong>Vercel</strong> — for hosting the Site
          </li>
        </ul>
      </Section>

      <Section title="6. Children's Privacy">
        <p>
          This Site is not directed at children under the age of 13. I do not
          knowingly collect personal information from children.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>You have the right to:</p>
        <ul>
          <li>Request access to the personal data I hold about you</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, please contact me at{" "}
          <A href="mailto:rahatdeveloper007@gmail.com">
            rahatdeveloper007@gmail.com
          </A>
          .
        </p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          I may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date. Continued use of the Site
          after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          If you have any questions about this Privacy Policy, please contact me
          at:
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
