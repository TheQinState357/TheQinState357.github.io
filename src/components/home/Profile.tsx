import Image from 'next/image';
import Link from 'next/link';
import type { SiteConfig } from '@/lib/config';

interface Props {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
  researchInterests?: string[];
}

export default function Profile({ author, social, researchInterests = [] }: Props) {
  const secondary = [['ORCID', social.orcid], ['GitHub', social.github], ['LinkedIn', social.linkedin]];
  return <aside className="profile-card" aria-label="Researcher profile">
    <div className="profile-intro">
      <Image src={author.avatar} alt={author.name} width={216} height={216} priority className="profile-portrait" />
      <div>
        <h1>{author.name}</h1>
        <p>{author.title} · School of Computer Science</p>
        <p>{author.institution}</p>
      </div>
    </div>
    <p className="profile-interests">{researchInterests.join(' · ')}</p>
    <nav aria-label="Contact and academic profiles" className="profile-links">
      {social.email && <a href={`mailto:${social.email}`}>Email</a>}
      {social.google_scholar && <a href={social.google_scholar}>Google Scholar</a>}
      <Link href="/cv/">CV</Link>
    </nav>
    <details className="profile-details"><summary>More links &amp; location</summary>
      <div className="profile-links">{secondary.map(([label, url]) => url && <a key={label} href={url}>{label}</a>)}</div>
      <p>{social.location_url && <a href={social.location_url}>Computer Science Building J12, Sydney</a>}</p>
    </details>
  </aside>;
}
