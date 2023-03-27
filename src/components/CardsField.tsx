import React from 'react';
import MyCard, { ICard } from './MyCard';
import { personsData } from '../data/data';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // console.log(this.state.client);
  }

  render() {
    setTimeout(() => localStorage.setItem('client', JSON.stringify(this.state.client)), 200);
    return (
      <div className="cards-field">
        {this.state.client.map((item: ICard, index: number) => {
          const { name, surname, gender, age, country, birthday, sphere, tel, mail, src, movie } =
            item || {};

          return (
            <React.Fragment key={index}>
              <MyCard
                name={name}
                surname={surname}
                gender={gender}
                age={age}
                country={country}
                birthday={birthday}
                sphere={sphere}
                tel={tel}
                mail={mail}
                src={src}
                id={surname}
                movie={movie}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default CardsField;
