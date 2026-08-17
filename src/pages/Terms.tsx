import { LegalLayout, LegalSection } from '../components/Legal/LegalLayout'
import { CONTACT_EMAIL } from '../config/site'

const termsSections = [
  { id: 'terms-acceptance', label: 'Acceptance' },
  { id: 'terms-services', label: 'Services' },
  { id: 'terms-responsibilities', label: 'User Responsibilities' },
  { id: 'terms-intellectual-property', label: 'Intellectual Property' },
  { id: 'terms-availability', label: 'Availability' },
  { id: 'terms-third-parties', label: 'Third-Party Services' },
  { id: 'terms-disclaimer', label: 'Disclaimer' },
  { id: 'terms-liability', label: 'Limitation of Liability' },
  { id: 'terms-changes', label: 'Changes' },
  { id: 'terms-contact', label: 'Contact' },
]

export function Terms() {
  return (
    <LegalLayout
      titleLines={['TERMS', 'OF USE']}
      intro="These terms provide a general framework for access to the LAF GAMES website and services made available by LAF GAMES."
      navigationItems={termsSections}
    >
      <LegalSection index="01" id="terms-acceptance" title="Acceptance">
        <p>
          By accessing this website or using a service provided by LAF GAMES, you
          agree to follow these Terms of Use and any service-specific rules made
          available with that service. If you do not agree, you should not use the
          relevant service.
        </p>
      </LegalSection>

      <LegalSection index="02" id="terms-services" title="Services">
        <p>
          LAF GAMES may provide studio information, game information, games, and
          related online features. The content and functionality available may
          differ by platform, region, version, or stage of release.
        </p>
      </LegalSection>

      <LegalSection index="03" id="terms-responsibilities" title="User Responsibilities">
        <p>When using a LAF GAMES service, users should:</p>
        <ul>
          <li>Use the service lawfully and respect the rights of others.</li>
          <li>Not interfere with service operation or attempt unauthorized access.</li>
          <li>Not exploit errors or use automated means in a harmful manner.</li>
          <li>Provide accurate information where an account feature requires it.</li>
        </ul>
      </LegalSection>

      <LegalSection index="04" id="terms-intellectual-property" title="Intellectual Property">
        <p>
          The LAF GAMES name, logo, character designs, game content, graphics, and
          website content are owned by or licensed to LAF GAMES, except where
          third-party ownership is identified. Access to a service does not
          transfer ownership of this content to the user.
        </p>
        <p>
          Content may not be copied, distributed, modified, or commercially used
          without permission unless applicable law expressly allows it.
        </p>
      </LegalSection>

      <LegalSection index="05" id="terms-availability" title="Availability">
        <p>
          LAF GAMES may update, change, suspend, or discontinue all or part of a
          service when reasonably necessary for development, maintenance,
          security, legal compliance, or operational reasons. Continuous or
          error-free availability is not guaranteed.
        </p>
      </LegalSection>

      <LegalSection index="06" id="terms-third-parties" title="Third-Party Services">
        <p>
          A service may, where applicable, rely on third-party platforms,
          advertising services, or backend infrastructure. Separate terms or
          policies from those providers may apply when their services are enabled.
        </p>
      </LegalSection>

      <LegalSection index="07" id="terms-disclaimer" title="Disclaimer">
        <p>
          LAF GAMES aims to provide reliable and enjoyable services, but features
          may change during development and availability may be affected by
          maintenance, platform requirements, or circumstances outside reasonable
          control.
        </p>
      </LegalSection>

      <LegalSection index="08" id="terms-liability" title="Limitation of Liability">
        <p>
          To the extent permitted by applicable law, responsibility for loss or
          damage related to a service will be determined according to the nature
          of the service, the circumstances, and applicable legal requirements.
          Nothing in these terms limits rights or responsibilities that cannot
          legally be limited.
        </p>
      </LegalSection>

      <LegalSection index="09" id="terms-changes" title="Changes">
        <p>
          These terms may be updated to reflect service, operational, or legal
          changes. The “Last Updated” date will identify the current published
          version. Continued use after an update may be subject to the revised
          terms where permitted by applicable law.
        </p>
      </LegalSection>

      <LegalSection index="10" id="terms-contact" title="Contact">
        {CONTACT_EMAIL ? (
          <p>
            Questions about these terms may be sent to{' '}
            <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        ) : (
          <p>
            A public contact channel will be added to this website when it is
            available.
          </p>
        )}
      </LegalSection>
    </LegalLayout>
  )
}
