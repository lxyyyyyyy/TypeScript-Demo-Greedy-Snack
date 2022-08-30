import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"
//游戏的控制器，控制其他的所有类
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    //创建一个属性记录游戏是否结束
    isLive = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }
    //游戏的初始化方法
    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run();
    }
    //创建键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        // console.log(this.direction);
    }
    run() {
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向修改YX
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        //如果蛇吃到食物
        this.checkEat(X, Y);
           

        //修改X 和Y
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error: any) {
            console.log(error.message + 'GAME OVER');
            this.isLive = false;
        }


        //开启一个定时调用
        this.isLive && setTimeout(() => {
            this.run()
        }, 300 - (this.scorePanel.level - 1) * 30);
    }
    //检查是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log('吃到食物了')
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody()
        }

    }
}
export default GameControl