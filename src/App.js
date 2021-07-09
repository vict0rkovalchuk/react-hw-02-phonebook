import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  static propTypes = {};

  state = { contacts: [], filter: '' };

  notify = () => toast('This user already exists!');

  addTask = (text, number) => {
    let task = {
      id: uuidv4(),
      text,
      number,
    };

    this.state.contacts.find(task => task.text === text)
      ? this.notify()
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, task] };
        });
  };

  removeTask = taskId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== taskId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleTasks = () => {
    let { contacts, filter } = this.state;

    return contacts.filter(task => task.text.includes(filter));
  };

  render() {
    let { contacts, filter } = this.state;
    let visibleTasks = this.getVisibleTasks();

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ToastContainer />
        <ContactForm onAddTask={this.addTask} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {contacts.length > 0 && (
          <ContactList contacts={visibleTasks} onRemoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}

export default App;
