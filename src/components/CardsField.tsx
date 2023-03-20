import React from 'react';
import MyCard, { ICard } from './MyCard';
import { personsData } from '../data/data';

class CardsField extends React.Component<any, any> {
  constructor(props: ICard) {
    super(props);
    this.state = {
      client: personsData,
    };
  }

  componentDidMount(): void {
    const res = localStorage.getItem('client');
    if (res) {
      this.setState({ client: JSON.parse(res) });
    }
  }

  componentDidUpdate(): void {
    console.log(this.state.client);
  }

  render() {
    setTimeout(() => localStorage.setItem('client', JSON.stringify(this.state.client)), 200);
    return (
      <div className="cards-field">
        {this.state.client.map((item: any, index: any) => {
          const { name, surname, age, country, telNumber, email, photoLink, id } = item || {};

          return (
            <React.Fragment key={index}>
              <MyCard
                title={name}
                description={surname}
                age={age}
                city={country}
                tel={telNumber}
                mail={email}
                src={photoLink}
                id={id}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default CardsField;
