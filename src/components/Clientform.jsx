import React, { Component } from 'react';

class Clientform extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    const { name } = this.state;
    console.log(name);
    this.setState({
      paymentMethod: event.target.value,
    });
  }

  handleInputsValue = (event) => {
    const { name } = event.target;
    console.log(name);
  };

  formSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { paymentMethod } = this.state;
    return (
      <form onSubmit={ this.formSubmit }>
        <h4> Informações do Comprador </h4>
        <input
          type="text"
          value={ checkoutFullName }
          onChange={ handleChange }
          name="name"
          data-testid="checkout-fullname"
          placeholder="Nome completo"
        />
        <input
          type="text"
          name="email"
          value={ checkoutEmail }
          onChange={ handleChange }
          data-testid="checkout-email"
          placeholder="Email"
        />
        <input
          type="number"
          name="cpf"
          value={ checkoutCpf }
          onChange={ handleChange }
          data-testid="checkout-cpf"
          placeholder="CPF"
        />
        <input
          type="number"
          name="telephone"
          value={ checkoutTelephone }
          onChange={ handleChange }
          data-testid="checkout-phone"
          placeholder="Telefone"
        />
        <input
          type="number"
          name="cep"
          value={ checkoutCep }
          onChange={ handleChange }
          data-testid="checkout-cep"
          placeholder="CEP"
        />
        <input
          type="text"
          name="address"
          value={ checkoutAddress }
          onChange={ handleChange }
          data-testid="checkout-address"
          placeholder="Endereço"
        />
        <h4>Método de Pagamento</h4>
        <div className="radio">
          <label htmlFor="ticket">
            <input
              type="radio"
              value="ticket"
              checked={ paymentMethod === 'ticket' }
              onChange={ this.onValueChange }
              data-testid="ticket-payment"
            />
            Boleto
          </label>
        </div>
        <div>
          <label htmlFor="visa">
            <input
              type="radio"
              value="visa"
              checked={ paymentMethod === 'visa' }
              onChange={ this.onValueChange }
              data-testid="visa-payment"
            />
            Visa
          </label>
        </div>
        <div className="radio">
          <label htmlFor="mastercard">
            <input
              type="radio"
              value="mastercard"
              checked={ paymentMethod === 'mastercard' }
              onChange={ this.onValueChange }
              data-testid="master-payment"
            />
            MasterCard
          </label>
        </div>
        <div className="radio">
          <label htmlFor="elo">
            <input
              type="radio"
              value="elo"
              checked={ paymentMethod === 'elo' }
              onChange={ this.onValueChange }
              data-testid="elo-payment"
            />
          </label>
          Elo
        </div>
        <button
          type="button"
          name="checkout-button"
          data-testid="checkout-btn"
          disabled={ !validateForm }
          onClick={ this.handleInputsValue }
        >
          Comprar
        </button>
      </form>

    );
  }
}

export default Clientform;
