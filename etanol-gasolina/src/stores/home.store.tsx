import {action, observable} from 'mobx';

export default class HomeStore {
  @observable etanol = 0;
  @observable gasolina = 0;
  @observable resultado = '';

  @action calculate = () => {
    const {etanol, gasolina} = this;
    if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
      const value = Number(etanol) / Number(gasolina);

      if (value > 0.7) {
        this.resultado = 'Vale a pena abastecer com gasolina';
      } else if (value < 0.7) {
        this.resultado = 'Vale a pena abastecer com etanol';
      } else {
        this.resultado = 'São equivalentes';
      }
    }
  };

  @action handleForm = input => {
    const key = Object.keys(input)[0];
    const value = input[key];
    this[key] = value.replace('R$', '').replace(',', '.');
  };
}
const homeStore = new HomeStore();

export {homeStore};
