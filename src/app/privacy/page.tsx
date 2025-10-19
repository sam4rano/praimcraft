import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-neutral-600">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Content */}
      <Section padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <RevealOnScroll direction="up" delay={0.2}>
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Name, email address, and contact information</li>
                    <li>Account credentials and preferences</li>
                    <li>Payment and billing information</li>
                    <li>Communications with our support team</li>
                    <li>Content you provide through our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Personalize and improve your experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Information Sharing
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Data Security
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Your Rights
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Cookies and Tracking
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. We use cookies for:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Essential website functionality</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Personalization and user preferences</li>
                    <li>Marketing and advertising (with consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Data Retention
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. We may retain certain information for longer periods to comply with legal obligations, resolve disputes, and enforce our agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    International Transfers
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    If you have any questions about this privacy policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-neutral-50 p-6 rounded-lg mt-4">
                    <p className="text-neutral-700">
                      <strong>Email:</strong> privacy@praimcraft.com<br />
                      <strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345<br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </section>

                <div className="border-t border-neutral-200 pt-8 mt-12">
                  <p className="text-sm text-neutral-500">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>
    </div>
  );
}
