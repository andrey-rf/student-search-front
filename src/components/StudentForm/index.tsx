import { useForm } from 'react-hook-form';

import { PrimaryButton } from '@components/Button';

import { Form, ButtonBox, Input } from './styles';
import type { FormProps, FormData } from './types';

function StudentForm({ onSubmit }: FormProps) {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Adicionar Aluno</h2>
      <Input placeholder="Nome" {...register('name')} />
      <Input placeholder="CPF" {...register('cpf')} />
      <Input placeholder="Email" {...register('email')} />

      <ButtonBox>
        <PrimaryButton type="submit">Salvar</PrimaryButton>
      </ButtonBox>
    </Form>
  );
}

export default StudentForm;
