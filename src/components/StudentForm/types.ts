interface FormData {
  name: string;
  cpf: string;
  email: string;
}

interface FormProps {
  onSubmit: (data: FormData) => unknown;
  loading: boolean;
}

export type { FormProps, FormData };
