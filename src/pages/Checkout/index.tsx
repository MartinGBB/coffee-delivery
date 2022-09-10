import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CoffeeSelected } from './CoffeSelected'
import {
  AddressContainer,
  CheckoutContainer,
  ConfirmOrden,
  ContainerPagament,
  FormContainer,
  OrdemContainer,
  SelectPagament,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <div>
            <MapPinLine size={22} />
            <h1>Endereço de Entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <form action="">
            <div>
              <input required type="text" placeholder="CEP" />
              <input required type="text" placeholder="Rua" />
            </div>
            <div>
              <input required type="text" placeholder="Número" />
              <label>
                <input type="text" placeholder="Complemento" />
                Opcional
              </label>
            </div>
            <div>
              <input required type="text" placeholder="Bairro" />
              <input required type="text" placeholder="Cidade" />
              <input required type="text" placeholder="UF" />
            </div>
          </form>
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
          <button>
            <CreditCard size={16} />
            Cartão de crédito
          </button>
          <button>
            <Bank size={16} />
            Cartão de débito
          </button>
          <button>
            <Money size={16} />
            Dinheiro
          </button>
        </SelectPagament>
      </ContainerPagament>

      <ConfirmOrden>
        <h1>Cafés selecionados</h1>
        <OrdemContainer>
          <CoffeeSelected />
        </OrdemContainer>
      </ConfirmOrden>
    </CheckoutContainer>
  )
}
