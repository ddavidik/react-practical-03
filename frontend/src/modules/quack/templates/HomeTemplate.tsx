import { AuthUser } from 'src/modules/auth/auth-core';
import { Heading, ReloadButton } from 'src/shared/design-system';
import { MainSection, TopNavigation } from 'src/shared/navigation';

import { BaseQuackFragment, QuackForm } from '../molecules';
import { QuackList } from '../organisms';

type Props = {
  data:
    | {
        quacks: Array<BaseQuackFragment & { id: number }>;
      }
    | undefined;
  loading: boolean;
  error?: Error;
  refetchQuacks: () => void;
  quackFormState: {
    loading: boolean;
    error?: Error;
    text: string;
    setText: (text: string) => void;
    onSubmit: (data: { text: string }) => void;
  };
  currentUser: AuthUser | null;
};

export function HomeTemplate({
  data,
  loading,
  error,
  refetchQuacks,
  quackFormState,
  currentUser,
}: Props) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        <Heading pb="2">Home</Heading>

        {currentUser && <QuackForm {...quackFormState} />}

        {data && (
          <ReloadButton
            isLoading={loading}
            onClick={() => refetchQuacks()}
            float="right"
          />
        )}

        <QuackList
          quacks={data?.quacks ?? []}
          isLoading={loading}
          error={error}
          refetch={refetchQuacks}
        />
      </MainSection>
    </>
  );
}
