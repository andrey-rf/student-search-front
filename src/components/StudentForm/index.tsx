import { memo } from 'react';

import { useForm } from 'react-hook-form';

import { Form, SaveButton, Input } from './styles';
import type { FormProps, FormData } from './types';

function StudentForm({ onSubmit, value }: FormProps) {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>{value ? 'Editar Aluno' : 'Adicionar Aluno'}</h2>
      <Input
        defaultValue={value?.name}
        placeholder="Nome"
        {...register('name')}
      />
      <Input defaultValue={value?.cpf} placeholder="CPF" {...register('cpf')} />
      <Input
        defaultValue={value?.email}
        placeholder="Email"
        {...register('email')}
      />

      <SaveButton type="submit">Salvar</SaveButton>
    </Form>
  );
}

export default memo(StudentForm);
