import { memo, useState } from 'react';

import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';

import { formatCpf } from '@helpers/inputMask';

import { Form, SaveButton, Input } from './styles';
import type { FormProps, FormData } from './types';

function StudentForm({ onSubmit, value, loading }: FormProps) {
  const { register, handleSubmit } = useForm<FormData>();
  const [cpf, setCpf] = useState<string>(value?.cpf ?? '');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!loading ? (
        <>
          <h2>{value ? 'Editar Aluno' : 'Adicionar Aluno'}</h2>
          <Input
            defaultValue={value?.name}
            placeholder="Nome"
            {...register('name')}
          />
          <Input
            defaultValue={value?.cpf}
            inputMode="numeric"
            placeholder="CPF"
            value={formatCpf(cpf)}
            {...register('cpf')}
            onChange={e => setCpf(e.target.value)}
          />
          <Input
            defaultValue={value?.email}
            placeholder="Email"
            {...register('email')}
          />

          <SaveButton type="submit">Salvar</SaveButton>
        </>
      ) : (
        <Loader type="TailSpin" color="#CCC" height={40} width={40} />
      )}
    </Form>
  );
}

export default memo(StudentForm);
