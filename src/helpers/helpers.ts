interface IResObj {
  name: string | undefined;
  gender: string | undefined;
  genderMan: boolean | undefined;
  genderWoman: boolean | undefined;
  birthday: string | undefined;
  sphere: string | undefined;
  mail: string | undefined;
  id: string | undefined;
  movie: boolean | undefined;
  file: string | undefined;
}

const showMessage = () => {
  const message = document.querySelector('.success-adding');
  message?.classList.add('show');
  setTimeout(() => message?.classList.remove('show'), 2000);
};

export const addPerson = (obj: IResObj) => {
  const res = localStorage.getItem('client') as string;
  let total = 0;
  Object.values(obj).forEach((item) => {
    if (`${item}`.length !== 0) total++;
  });
  if (total >= 10) {
    if (res) {
      const resJson = JSON.parse(res);
      resJson.push(obj);
      localStorage.setItem('client', JSON.stringify(resJson));
    } else {
      localStorage.setItem('client', JSON.stringify([obj]));
    }
    showMessage();
  }
};
