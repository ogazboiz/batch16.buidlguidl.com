import Link from "next/link";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

type SocialLinksProps = {
  twitter?: string;
  github?: string;
  telegram?: string;
  // Add other platforms as needed
};

export const SocialLinks = ({ twitter, github, telegram }: SocialLinksProps) => (
  <div className="flex gap-4">
    {twitter && (
      <Link href={`https://twitter.com/${twitter}`} target="_blank">
        <span className="w-6 h-6 hover:text-blue-400">
          <FaTwitter />
        </span>
      </Link>
    )}
    {github && (
      <Link href={`https://github.com/${github}`} target="_blank">
        <span className="w-6 h-6 hover:text-gray-600">
          <FaGithub />
        </span>
      </Link>
    )}
    {telegram && (
      <Link href={`https://t.me/${telegram}`} target="_blank">
        <span className="w-6 h-6 hover:text-blue-500">
          <FaTelegram />
        </span>
      </Link>
    )}
  </div>
);
