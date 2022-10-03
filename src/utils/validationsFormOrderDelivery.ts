import * as zod from 'zod'

export const newCoffeeFormValidateSchema = zod.object({
  cep: zod
    .number({ invalid_type_error: 'Informe um CEP valido' })
    .min(8, 'Informe um CEP valido'),
  rua: zod.string().min(5, 'Informe a rua'),
  numero: zod.number().min(1, 'Informe o número'),
  bairro: zod.string().min(3, 'Informe o bairro'),
  cidade: zod.string().min(3, 'Informe o cidade'),
  uf: zod.string().max(2).min(2, 'Informe o bairro'),
  complemento: zod.string().optional(),
  payment: zod.string({
    invalid_type_error: 'Debe informar método de pagamento',
  }),
})

export type OrderDelivery = zod.infer<typeof newCoffeeFormValidateSchema>
