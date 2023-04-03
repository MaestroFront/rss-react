import React from 'react';
import MyCard from './MyCard';
import { ICard } from '../types/app.interface';
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
          const { name, gender, birthday, sphere, mail, file, src, movie, id } = item || {};

          return (
            <React.Fragment key={index}>
              <MyCard
                name={name}
                gender={gender}
                birthday={birthday}
                sphere={sphere}
                mail={mail}
                src={src}
                file={file}
                id={id}
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
