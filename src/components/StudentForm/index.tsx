import { memo, useState } from 'react';

import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';

import { FlexBox } from '@components/Box';
import { formatCpf } from '@helpers/inputMask';

import { Form, SaveButton, Input, Label } from './styles';
import type { FormProps, FormData } from './types';

function StudentForm({ onSubmit, value, loading }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [cpf, setCpf] = useState<string>(value?.cpf ?? '');

  const { onChange, ...rest } = register('cpf', { required: true });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!loading ? (
        <>
          <h2>{value ? 'Editar Aluno' : 'Adicionar Aluno'}</h2>
          <FlexBox direction="column">
            <Input
              defaultValue={value?.name}
              placeholder="Nome *"
              aria-label="Nome"
              className={errors.name ? 'error' : ''}
              {...register('name', { required: true })}
            />
            <Label className={errors.name ? 'error' : ''}>
              O nome é obrigatório
            </Label>
          </FlexBox>
          <FlexBox direction="column">
            <Input
              defaultValue={value?.cpf}
              inputMode="numeric"
              placeholder="CPF *"
              aria-label="CPF"
              value={formatCpf(cpf)}
              onChange={e => {
                setCpf(e.target.value);
                onChange(e);
              }}
              className={errors.cpf ? 'error' : ''}
            />
            <Label className={errors.cpf ? 'error' : ''}>
              O CPF é obrigatório
            </Label>
          </FlexBox>
          <FlexBox direction="column">
            <Input
              defaultValue={value?.email}
              placeholder="Email *"
              aria-label="Email"
              className={errors.email ? 'error' : ''}
              {...register('email', { required: true })}
            />
            <Label className={errors.email ? 'error' : ''}>
              O email é obrigatório
            </Label>
          </FlexBox>

          <SaveButton aria-label="Salvar alterações" type="submit">
            Salvar
          </SaveButton>
        </>
      ) : (
        <Loader type="TailSpin" color="#CCC" height={40} width={40} />
      )}
    </Form>
  );
}

export default memo(StudentForm);
