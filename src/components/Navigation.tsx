import { UnderlineLink } from './UnderlineLink';

export const Navigation = () => {
  return (
    <nav className="flex space-x-8 mt-16">
      <UnderlineLink href="#work" className="text-lg font-sans">
        Work
      </UnderlineLink>
      <UnderlineLink href="#about" className="text-lg font-sans">
        About
      </UnderlineLink>
      <UnderlineLink href="#contact" className="text-lg font-sans">
        Say hi
      </UnderlineLink>
    </nav>
  );
};