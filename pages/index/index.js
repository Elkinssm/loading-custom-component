Page({
  data: {
    showLoading: false
  },
  onLoad() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 3000); // Personalizar el tiempo de carga del loading
  },
  //Metodo para mostrar desde algun boton o evento
  onTapButton() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 3000); // Personalizar el tiempo de carga del loading en el boton
  },
  //Metodo necesario para mostrar el loading
  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  //Metodo necesario para ocultar el loading
  hideLoading() {
    this.setData({
      showLoading: false
    });
  }
});
