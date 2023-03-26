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
    // console.log(this.state.client);
  }

  render() {
    setTimeout(() => localStorage.setItem('client', JSON.stringify(this.state.client)), 200);
    return (
      <div className="cards-field">
        {this.state.client.map((item: any, index: any) => {
          const {
            name,
            surname,
            gender,
            age,
            country,
            birthday,
            sphere,
            telNumber,
            email,
            photoLink,
            movie,
          } = item || {};

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
                tel={telNumber}
                mail={email}
                src={photoLink}
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
