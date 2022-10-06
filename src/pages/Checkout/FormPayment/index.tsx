import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  AddressContainer,
  ContainerPagament,
  FormContainer,
  FormInputs,
  SelectPagament,
} from './styles'

export function FormPayment({ register }: any) {
  return (
    <div>
      <AddressContainer>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <div>
            <MapPinLine size={22} />
            <h1>Endereço de Entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <FormInputs>
            <div>
              <input
                type="text"
                placeholder="CEP"
                {...register('cep', { valueAsNumber: true })}
              />
              <input type="text" placeholder="Rua" {...register('rua')} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Número"
                {...register('numero', { valueAsNumber: true })}
              />
              <section>
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
                <p>Opcional</p>
              </section>
            </div>
            <div>
              <input type="text" placeholder="Bairro" {...register('bairro')} />
              <input type="text" placeholder="Cidade" {...register('cidade')} />
              <input type="text" placeholder="UF" {...register('uf')} />
            </div>
          </FormInputs>
        </FormContainer>
      </AddressContainer>

      <ContainerPagament>
        <div>
          <CurrencyDollar size={22} />
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
        <SelectPagament>
          <label htmlFor="creditCard">
            <input
              id="creditCard"
              value="Cartão de Crédito"
              type="radio"
              {...register('payment')}
            />
            <Bank size={16} />
            CARTÃO DE CRÉDITO
          </label>

          <label htmlFor="debitCard">
            <input
              id="debitCard"
              value="Cartão de débito"
              type="radio"
              {...register('payment')}
            />
            <CreditCard size={16} />
            CARTÃO DE DÉBITO
          </label>

          <label htmlFor="cash">
            <input
              id="cash"
              value="Dinheiro"
              type="radio"
              {...register('payment')}
            />
            <Money size={16} />
            DINHEIRO
          </label>
        </SelectPagament>
      </ContainerPagament>
    </div>
  )
}
