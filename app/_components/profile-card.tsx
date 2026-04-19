import Image from "next/image";
import My from "@/public/IMG_0003.jpeg";
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Briefcase, 
  ExternalLink, 
  CheckCircle2 
} from "lucide-react";

export interface ProfileInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  cv: string;
  linkedIn: string;
  github: string;
}

interface ProfileCardProps {
  profile: ProfileInfo;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <section className="max-w-3xl mx-auto overflow-hidden rounded-md border border-border bg-card p-8 shadow-sm">
      {/* Header / Avatar Section */}
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="relative">
          <Image
            src={My}
            alt="Profile photo"
            width={160}
            height={160}
            priority
            className="h-40 w-40 rounded-full border-4 border-background object-cover shadow-md"
          />
        </div>
        
        <div>
          <h1 className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground md:justify-start">
            {profile.name}
            <CheckCircle2 className="h-6 w-6 fill-blue-500 text-white" />
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{profile.role}</p>
        </div>
      </div>

      <hr className="my-8 border-border" />

      {/* Details List */}
      <div className="space-y-4">
        <DetailItem icon={<Briefcase size={18} />} label={profile.role} />
        <DetailItem icon={<MapPin size={18} />} label={profile.location} />
        <DetailItem icon={<Phone size={18} />} label={profile.phone} isLink href={`tel:${profile.phone}`} />
        <DetailItem icon={<Mail size={18} />} label={profile.email} isLink href={`mailto:${profile.email}`} />
        <DetailItem icon={<FileText size={18} />} label="Consulter mon CV" isLink href={profile.cv} />
      </div>

      {/* Social Links Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SocialButton 
          href={profile.linkedIn} 
          label="LinkedIn" 
          username="Achraf Ait Haddouch" 
          icon="/ddd.webp" 
        />
        <SocialButton 
          href={profile.github} 
          label="GitHub" 
          username="Achraf Ait Haddouch" 
          icon="/github-icon.svg" 
        />
      </div>
    </section>
  );
}

/* Helper Components for cleaner code */

function DetailItem({ icon, label, isLink, href }: { icon: React.ReactNode, label: string, isLink?: boolean, href?: string }) {
  const content = (
    <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
      <span className="text-muted-foreground/70">{icon}</span>
      <span>{label}</span>
    </div>
  );

  return isLink ? <a href={href} target="_blank" rel="noreferrer" className="block w-fit">{content}</a> : content;
}

function SocialButton({ href, label, username, icon }: { href: string, label: string, username: string, icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex  items-center justify-between rounded-md border border-border bg-secondary/30 p-4 transition-all hover:bg-secondary/50"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden">
           <Image 
             src={icon} 
             alt={`${label} icon`} 
             width={24} 
             height={24} 
             className="h-6 w-6 object-contain"
           />
        </div>
        <div>
          <div className="text-sm   font-semibold text-foreground">{label}</div>
          <div className="text-xs  text-muted-foreground">{username}</div>
        </div>
      </div>
      <ExternalLink size={14} className="text-muted-foreground/50" />
    </a>
  );
}