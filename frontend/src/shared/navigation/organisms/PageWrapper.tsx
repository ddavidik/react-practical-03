import { type ReactNode } from 'react';

import { type BoxProps } from 'src/shared/design-system';

import { MainSection } from '../atoms';

import { TopNavigation } from './TopNavigation';

export type PageWrapperProps = {
  maxW?: BoxProps['maxW'];
  children: ReactNode;
};

export function PageWrapper({
  children,
  maxW,
  ...restProps
}: PageWrapperProps) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW={maxW} {...restProps}>
        {children}
      </MainSection>
    </>
  );
}
