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
  onTapButton() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 3000); // Personalizar el tiempo de carga del loading en el boton
  },
  showLoading() {
    this.setData({
      showLoading: true,
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false
    });
  }
});
