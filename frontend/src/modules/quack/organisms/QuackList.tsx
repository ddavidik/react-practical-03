import { Button, ErrorBanner, Loading } from 'src/shared/design-system';

import { type BaseQuackFragment, Quack } from '../molecules';

export type QuackListProps = {
  quacks: Array<BaseQuackFragment & { id: number }>;
  isLoading?: boolean;
  error?: Error;
  refetch?: () => void;
};

export function QuackList({
  quacks,
  isLoading,
  error,
  refetch,
}: QuackListProps) {
  return (
    <>
      {isLoading && !quacks && <Loading />}
      {error && (
        <ErrorBanner mt="4" title={error.message}>
          {refetch && (
            <Button colorScheme="red" onClick={() => refetch()}>
              Reload
            </Button>
          )}
        </ErrorBanner>
      )}
      {quacks && quacks.map((quack) => <Quack key={quack.id} quack={quack} />)}
    </>
  );
}
