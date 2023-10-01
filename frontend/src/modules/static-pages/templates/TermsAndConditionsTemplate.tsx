import { Heading, Paragraph } from 'src/shared/design-system';
import { MainSection, TopNavigation } from 'src/shared/navigation';

export function TermsAndConditionsTemplate() {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        <Heading>Terms and Conditions</Heading>
        <Paragraph>Live long and prosper</Paragraph>
      </MainSection>
    </>
  );
}
