import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react';

type Props = Omit<ChakraHeadingProps, 'as'> & {
  as?: keyof typeof HEADING_SIZES;
};

const HEADING_SIZES = {
  h1: { fontSize: '4xl', mb: '3', letterSpacing: 'tighter' },
  h2: { fontSize: '3xl', mb: '3', letterSpacing: 'tight' },
  h3: { fontSize: '2xl' },
  h4: { fontSize: 'xl' },
  h5: { fontSize: 'lg' },
  h6: { fontSize: 'md' },
};

export function Heading({ as = 'h1', ...rest }: Props) {
  const defaultStyles = HEADING_SIZES[as] ?? {};

  return <ChakraHeading as={as} {...defaultStyles} {...rest} />;
}
