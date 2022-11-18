import React, { Component } from 'react';

class Clientform extends Component {
  state = {
    paymentMethod: '',
  };

  onValueChange = (event) => {
    this.setState({
      paymentMethod: event.target.value,
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      handleChange,
      checkoutFullName,
      checkoutEmail,
      checkoutCpf,
      checkoutTelephone,
      checkoutCep,
      checkoutAddress } = this.props;
    const { paymentMethod } = this.state;

    return (
      <form onSubmit={ this.formSubmit }>
        <h4> Informações do Comprador </h4>
        <input
          type="text"
          value={ checkoutFullName }
          onChange={ handleChange }
          name="checkoutFullName"
          data-testid="checkout-fullname"
          placeholder="Nome completo"
        />
        <input
          type="text"
          value={ checkoutEmail }
          name="checkoutEmail"
          onChange={ handleChange }
          data-testid="checkout-email"
          placeholder="Email"
        />
        <input
          type="number"
          value={ checkoutCpf }
          name="checkoutCpf"
          onChange={ handleChange }
          data-testid="checkout-cpf"
          placeholder="CPF"
        />
        <input
          type="number"
          value={ checkoutTelephone }
          name="checkoutTelephone"
          onChange={ handleChange }
          data-testid="checkout-phone"
          placeholder="Telefone"
        />
        <input
          type="number"
          value={ checkoutCep }
          name="checkoutCep"
          onChange={ handleChange }
          data-testid="checkout-cep"
          placeholder="CEP"
        />
        <input
          type="text"
          value={ checkoutAddress }
          name="checkoutAddress"
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
          onClick={ this.handleInputsValue }
        >
          Comprar
        </button>
      </form>

    );
  }
}

export default Clientform;
