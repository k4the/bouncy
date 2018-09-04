export class ScrollBox {
  createScrollBox = () => {
    if (window.innerWidth > 760) {
      const sliding: any = document.getElementsByClassName('scrollBox');
      if (sliding && sliding[0]) {
        sliding[0].style.height = window.innerHeight - 270 + 'px';
      }
    }
  }
}
