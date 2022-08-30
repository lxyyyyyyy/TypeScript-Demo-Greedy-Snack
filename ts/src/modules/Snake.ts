class Snake {
    //获取表示蛇的元素
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');


    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        if (this.X === value) return;
        //不能穿墙
        if (this.X < 0 || this.X > 290) {
            throw new Error("蛇撞墙了")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value>this.X){
                value = this.X-10;
            }else{
                value = this.X+10
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();

    }
    set Y(value: number) {
        if (this.Y === value) return;
        if (this.Y < 0 || this.Y > 290) {
            throw new Error("蛇撞墙了")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value>this.Y){
                value = this.Y-10;
            }else{
                value = this.Y+10
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }
    //向蛇的身体中添加元素
    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
    //添加一个蛇身体移动的方法
    moveBody() {
        //身体后一截位置变为前一节的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取前一节身体的X Y
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //把当前的设置为前一节的
            (this.bodies[i] as HTMLElement).style.left = X+'px';
            (this.bodies[i] as HTMLElement).style.top = Y+'px';
        }
    }

    //检查是否撞到自己
    checkHeadBody(){
        for(let i =1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y == bd.offsetTop){
                throw new Error('撞到自己')
            }
        }
    }
}
export default Snake