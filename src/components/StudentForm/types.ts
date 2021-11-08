import { Student } from '@graphql/types/generated';

interface FormData {
  name: string;
  cpf: string;
  email: string;
}

interface FormProps {
  onSubmit: (data: FormData) => unknown;
  loading: boolean;
  value?: Student;
}

export type { FormProps, FormData };
