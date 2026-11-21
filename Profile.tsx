import Image from 'next/image';
import Link from 'next/link';
import { Mail, GraduationCap, Github, Linkedin, FileText, MapPin } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';

interface Props {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
  researchInterests?: string[];
}

export default function Profile({ author, social, researchInterests = [] }: Props) {
  return <aside className="profile-card profile-with-roles" aria-label="Researcher profile">
    <style>{`
.profile-social-icons {display:flex;flex-wrap:nowrap;align-items:center;max-width:19rem;margin-top:.8rem;}
.profile-card .profile-social-icons a {display:flex;align-items:center;justify-content:center;flex:1 1 0;min-width:0;max-width:44px;height:44px;color:var(--accent);text-decoration:none;border-radius:.35rem;}
.profile-social-icons svg {width:21px;height:21px;flex-shrink:0;}
.profile-card .profile-social-icons a:hover,.profile-card .profile-social-icons a:focus-visible {background:var(--neutral-100);}
.dark .profile-card .profile-social-icons a:hover,.dark .profile-card .profile-social-icons a:focus-visible {background:var(--neutral-800);}
.profile-with-roles .profile-intro {display:grid;grid-template-columns:auto minmax(0,1fr);gap:.65rem 1rem;}
.profile-with-roles .profile-roles {grid-column:1 / -1;display:grid;gap:.25rem;}
.profile-with-roles .profile-roles p {margin:0;}
@media (min-width:1024px) {
  .grid:has(> div > .profile-with-roles) {grid-template-columns:max-content repeat(2,minmax(0,1fr));}
  .profile-card.profile-with-roles {max-width:none;width:min-content;}
  .profile-with-roles .profile-intro {display:block;}
  .profile-with-roles .profile-roles {width:max-content;}
}
    `}</style>
    <div className="profile-intro">
      <Image src={author.avatar} alt={author.name} width={216} height={216} priority className="profile-portrait" />
      <h1>{author.name}</h1>
      <div className="profile-roles">
        <p>PhD student, School of Computer Science, {author.institution}</p>
        <p>Faculty of Engineering Student Representative</p>
        <p>2027 Chair of HDR Student Representative Committee</p>
      </div>
    </div>
    <p className="profile-interests">{researchInterests.join(' · ')}</p>
    <nav aria-label="Contact and academic profiles" className="profile-social-icons">
      {social.email && <a href={`mailto:${social.email}`} aria-label="Email" title={social.email}>
        <Mail aria-hidden="true" />
      </a>}
      {social.google_scholar && <a href={social.google_scholar} aria-label="Google Scholar" title="Google Scholar">
        <GraduationCap aria-hidden="true" />
      </a>}
      {social.orcid && <a href={social.orcid} aria-label="ORCID" title="ORCID">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
        </svg>
      </a>}
      {social.github && <a href={social.github} aria-label="GitHub" title="GitHub">
        <Github aria-hidden="true" />
      </a>}
      {social.linkedin && <a href={social.linkedin} aria-label="LinkedIn" title="LinkedIn">
        <Linkedin aria-hidden="true" />
      </a>}
      <Link href="/cv/" aria-label="CV" title="CV">
        <FileText aria-hidden="true" />
      </Link>
      {social.location_url && <a href={social.location_url} aria-label="Location: Computer Science Building J12, Sydney" title="Computer Science Building J12, Sydney">
        <MapPin aria-hidden="true" />
      </a>}
    </nav>
  </aside>;
}
