import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-neutral-600">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
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
                    Acceptance of Terms
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    By accessing and using Praimcraft's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Description of Service
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Praimcraft provides digital agency services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Software development and web applications</li>
                    <li>Social media management and marketing</li>
                    <li>Data analytics and reporting</li>
                    <li>Workflow automation solutions</li>
                    <li>AI integration and consulting</li>
                    <li>Content creation and strategy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    User Responsibilities
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our services in compliance with applicable laws</li>
                    <li>Not engage in any illegal or unauthorized activities</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Payment Terms
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Payment terms are as follows:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Fees are due according to the agreed payment schedule</li>
                    <li>Late payments may incur additional charges</li>
                    <li>All prices are exclusive of applicable taxes</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>We reserve the right to suspend services for non-payment</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Intellectual Property
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Intellectual property rights are protected as follows:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>You retain ownership of your content and data</li>
                    <li>We retain ownership of our proprietary tools and methods</li>
                    <li>Work created specifically for you becomes your property upon full payment</li>
                    <li>We may use anonymized data for improving our services</li>
                    <li>Both parties respect each other's intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Confidentiality
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Both parties agree to maintain the confidentiality of sensitive information shared during the course of our business relationship. This includes but is not limited to business strategies, technical specifications, and proprietary data.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>Our services are provided "as is" without warranties</li>
                    <li>We are not liable for indirect or consequential damages</li>
                    <li>Our total liability is limited to the amount paid for services</li>
                    <li>We are not responsible for third-party actions or content</li>
                    <li>Force majeure events may excuse performance delays</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Termination
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Either party may terminate this agreement:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
                    <li>With written notice as specified in the contract</li>
                    <li>Immediately for material breach of terms</li>
                    <li>Upon completion of the agreed scope of work</li>
                    <li>With appropriate notice for convenience</li>
                    <li>Termination does not affect accrued rights and obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Dispute Resolution
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Any disputes arising from this agreement will be resolved through good faith negotiations. If negotiations fail, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Governing Law
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    This agreement is governed by the laws of the State of [Your State], without regard to conflict of law principles. Any legal action must be brought in the courts of [Your County], [Your State].
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of material changes via email or through our service. Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Severability
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    If any provision of this agreement is found to be unenforceable, the remaining provisions will remain in full force and effect. We will replace unenforceable provisions with valid provisions that achieve the same objective.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    For questions about these terms, please contact us:
                  </p>
                  <div className="bg-neutral-50 p-6 rounded-lg mt-4">
                    <p className="text-neutral-700">
                      <strong>Email:</strong> legal@praimcraft.com<br />
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
