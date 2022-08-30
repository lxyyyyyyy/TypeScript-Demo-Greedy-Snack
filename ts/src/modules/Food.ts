//定义一个Food类
class Food {
    //类型是element
    element: HTMLElement;
    constructor() {
        //获取页面中的元素
        this.element = document.getElementById('food')!;
    }
    //定义方法获取到food的坐标
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }

    //一个改变食物位置的方法
    change() {
        //需要生成一个随机位置，然后修改食物坐标
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food