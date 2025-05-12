import { SocialLinks } from "~~/components/builders/SocialLinks";
import { Address } from "~~/components/scaffold-eth";

export default function BuilderPage() {
  const builderAddress = "0x2E15bB8aDF3438F66A6F786679B0bBBBF02A75d5";
  const avatarUrl = "https://avatars.githubusercontent.com/u/104951733?v=4";

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto py-6 px-4">
      {/* Avatar & Address */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
          <img src={avatarUrl || "/placeholder.svg"} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <Address address={builderAddress} />
      </div>

      {/* Bio */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold mb-2">Akpolo OgagaOghene Prince</h1>
        <p className="text-base">
          Web3 developer passionate about building decentralized applications with real-world impact.
        </p>
      </div>

      {/* Status Banner */}
      <div className="bg-accent text-accent-content px-4 py-2 rounded-full text-sm font-medium mb-6">
        Available for freelance projects and collaborations
      </div>

      {/* Social Links */}
      <SocialLinks twitter="AkpoloOgaga" github="ogazboiz" telegram="ogazboiz" />

      {/* Skills Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-medium mb-3 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {["Solidity", "React", "Ethers.js", "Hardhat", "Next.js", "TailwindCSS", "TypeScript", "IPFS"].map(skill => (
            <span key={skill} className="bg-base-200 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-medium mb-3 text-center">Projects</h2>
        <div className="space-y-3">
          <a
            href="https://github.com/ogazboiz/artchain"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="font-bold text-lg">ArtChain</h3>
            <p className="mt-2">
              A decentralized art provenance and royalty management system that tracks artwork ownership and automates
              royalty payments using smart contracts.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-base-300 px-2 py-0.5 rounded-full text-xs">Solidity</span>
              <span className="bg-base-300 px-2 py-0.5 rounded-full text-xs">React</span>
              <span className="bg-base-300 px-2 py-0.5 rounded-full text-xs">Nextjs</span>
            </div>
          </a>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-medium mb-3 text-center">Experience</h2>
        <div className="space-y-3">
          <div className="bg-base-200 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">Smart Contract Developer</h3>
              <span className="text-xs">2024-Present</span>
            </div>
            <p className="text-sm mt-1">Developing smart contracts</p>
          </div>
          <div className="bg-base-200 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">Frontend Developer</h3>
              <span className="text-xs">2020-present</span>
            </div>
            <p className="text-sm mt-1">Building responsive web applications with React and Next.js</p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-medium mb-3 text-center">Education</h2>
        <div className="bg-base-200 p-3 rounded-lg">
          <div className="flex justify-between items-start">
            <h3 className="font-bold">BSc Computer Science</h3>
            <span className="text-xs">2019-2024</span>
          </div>
          <p className="text-sm mt-1">Edo state university</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full mt-6 mb-4">
        <h2 className="text-lg font-medium mb-3 text-center">Get In Touch</h2>
        <div className="bg-base-200 p-4 rounded-lg text-center">
          <p className="mb-2">Interested in working together? Reach out via:</p>
          <a href="mailto:ogazboizakpolo@gmail.com" className="text-primary hover:underline">
            ogazboizakpolo@gmail.com
          </a>
          <p className="mt-2 text-sm">
            Or schedule a call through my{" "}
            <a href="#" className="text-primary hover:underline">
              Calendly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
