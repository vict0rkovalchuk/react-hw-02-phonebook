import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddTask(this.state.text, this.state.number);
    this.setState({ text: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.box}>
          <input
            className={styles.input}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            name="name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter the name"
            autocomplete="off"
            required
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            placeholder="Enter the number"
            autocomplete="off"
            required
            value={this.state.number}
            onChange={this.handleChangeNumber}
          />
        </div>
        <div className={styles.btn}>
          <button type="submit" className={styles.button}>
            Добавить заметку
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
