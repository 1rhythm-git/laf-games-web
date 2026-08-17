import { LegalLayout, LegalSection } from '../components/Legal/LegalLayout'
import { CONTACT_EMAIL } from '../config/site'

const privacySections = [
  { id: 'privacy-overview', label: 'Overview' },
  { id: 'privacy-information', label: 'Information We May Collect' },
  { id: 'privacy-use', label: 'How Information Is Used' },
  { id: 'privacy-third-parties', label: 'Third-Party Services' },
  { id: 'privacy-retention', label: 'Data Retention' },
  { id: 'privacy-children', label: "Children's Privacy" },
  { id: 'privacy-security', label: 'Security' },
  { id: 'privacy-changes', label: 'Changes to This Policy' },
  { id: 'privacy-contact', label: 'Contact' },
]

export function Privacy() {
  return (
    <LegalLayout
      titleLines={['PRIVACY', 'POLICY']}
      intro="This policy provides a general framework for how LAF GAMES may handle information across its website and game services."
      navigationItems={privacySections}
    >
      <LegalSection index="01" id="privacy-overview" title="Overview">
        <p>
          This Privacy Policy explains how LAF GAMES may process information in
          connection with this website and games or services it provides,
          including LootUp. The information handled may differ depending on the
          service, version, platform, and features made available.
        </p>
        <p>
          References to information that “may” be collected do not mean that
          every category is currently collected. This policy will be updated as
          specific service features and data practices are confirmed.
        </p>
      </LegalSection>

      <LegalSection index="02" id="privacy-information" title="Information We May Collect">
        <p>Where applicable, a service may process limited information such as:</p>
        <ul>
          <li>Account identifiers, if account or login features are enabled.</li>
          <li>Game progress, item activity, and leaderboard records.</li>
          <li>
            Device or service information needed for compatibility, diagnostics,
            security, or service operation.
          </li>
          <li>
            Advertising-related identifiers, if advertising services are enabled
            and their use is permitted.
          </li>
          <li>Information a user voluntarily includes when contacting LAF GAMES.</li>
        </ul>
      </LegalSection>

      <LegalSection index="03" id="privacy-use" title="How Information Is Used">
        <p>Information may be used, where applicable, to:</p>
        <ul>
          <li>Provide, maintain, and secure the relevant service.</li>
          <li>Save game progress and support account or leaderboard features.</li>
          <li>Understand technical issues and improve gameplay or reliability.</li>
          <li>Display or measure advertising when advertising is enabled.</li>
          <li>Respond to user inquiries and meet applicable legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection index="04" id="privacy-third-parties" title="Third-Party Services">
        <p>
          Depending on the released features, LAF GAMES may use third-party
          services such as Google Play Services, Google AdMob, or backend
          infrastructure used to operate accounts, saved progress, and
          leaderboards.
        </p>
        <p>
          A third-party provider may process information under its own terms and
          privacy practices when its service is enabled. The applicable providers
          and disclosures will be identified when the relevant integration and
          release configuration are confirmed.
        </p>
      </LegalSection>

      <LegalSection index="05" id="privacy-retention" title="Data Retention">
        <p>
          Information, where collected, may be retained only for as long as
          reasonably necessary to provide the service, maintain security, resolve
          disputes, or meet applicable legal requirements. Retention periods may
          vary by data type and service feature.
        </p>
      </LegalSection>

      <LegalSection index="06" id="privacy-children" title="Children's Privacy">
        <p>
          The service is not intentionally designed to collect personal
          information from children beyond what is necessary to provide the
          service. Any child-directed features, if offered, will be configured and
          operated in accordance with applicable requirements.
        </p>
        <p>
          If LAF GAMES becomes aware that information has been processed contrary
          to applicable child privacy requirements, reasonable steps will be taken
          to review and address the matter.
        </p>
      </LegalSection>

      <LegalSection index="07" id="privacy-security" title="Security">
        <p>
          LAF GAMES intends to use reasonable administrative and technical
          safeguards appropriate to the information and service involved. No
          electronic transmission or storage method can be guaranteed to be
          completely secure.
        </p>
      </LegalSection>

      <LegalSection index="08" id="privacy-changes" title="Changes to This Policy">
        <p>
          This policy may be revised when services, legal requirements, or data
          practices change. The “Last Updated” date will be changed when a revised
          version is published.
        </p>
      </LegalSection>

      <LegalSection index="09" id="privacy-contact" title="Contact">
        {CONTACT_EMAIL ? (
          <p>
            Privacy questions may be sent to{' '}
            <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        ) : (
          <p>
            A public contact channel will be provided on this website before a
            service requiring direct privacy requests is released.
          </p>
        )}
      </LegalSection>
    </LegalLayout>
  )
}
