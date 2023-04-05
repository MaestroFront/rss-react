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
    localStorage.setItem('validation', 'true');
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
