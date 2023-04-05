import { personsData } from '../data/data';
import { ICard } from '../types/interfaces';

interface IResObj {
  name: string | undefined;
  gender: string | undefined;
  birthday: string | undefined;
  sphere: string | undefined;
  mail: string | undefined;
  id: string | undefined;
  movie: boolean | undefined;
  file: string | undefined;
}

export const addPerson = (obj: IResObj) => {
  const res = localStorage.getItem('client') as string;
  let total = 0;
  Object.values(obj).forEach((item) => {
    if (`${item}`.length !== 0) total++;
  });
  if (total >= 7) {
    if (res) {
      const resJson = JSON.parse(res);
      resJson.push(obj);
      localStorage.setItem('client', JSON.stringify(resJson));
    } else {
      localStorage.setItem('client', JSON.stringify([obj]));
    }
  }
};

export const createID = (obj: ICard) => {
  return (
    obj.name.split(' ')[0] +
    '-' +
    obj.gender +
    '-' +
    obj.sphere +
    '-' +
    obj.birthday +
    ':' +
    Math.floor(Math.random() * 10000)
  );
};

export const createOrUpdateCards = () => {
  let data = [];
  if (localStorage.getItem('client')) {
    data = JSON.parse(localStorage.getItem('client') as string);
  } else {
    localStorage.setItem('client', JSON.stringify(personsData));
    data = personsData;
  }
  return data;
};

export const installValue = (): string => {
  const str = localStorage.getItem('search') as string;
  if (str) {
    return str;
  } else {
    return '';
  }
};

export const filterCards = (value: string): void => {
  const cards = JSON.parse(localStorage.getItem('client') as string);
  const newCards = cards.filter((card: ICard) => card.name.includes(value));
  localStorage.setItem('clent-filter', JSON.stringify(newCards));
  console.log(newCards);
};

export const deletePerson = (props: ICard, id: string) => {
  const cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
  const persons = JSON.parse(localStorage.getItem('client') as string) as ICard[];
  const indexDelete = persons.findIndex((el) => el.id === id);
  persons.splice(indexDelete, 1);
  localStorage.setItem('client', JSON.stringify(persons));
  cards.forEach((el) => {
    if (el.id === id) el.remove();
  });
  localStorage.removeItem(`${props.name}`);
};

export const showImage = (props: ICard) => {
  if (localStorage.getItem(props.name) as string) {
    return localStorage.getItem(props.name) as string;
  } else {
    return props.src;
  }
};

export const updateCards = (props: { state: { client: ICard[] } }): void => {
  localStorage.setItem('client', JSON.stringify(props.state.client));
  props.state.client = JSON.parse(localStorage.getItem('client') as string);
};
