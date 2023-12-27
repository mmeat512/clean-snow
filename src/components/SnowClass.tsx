class SnowClass {
  data = [];
  ctx;
  canvasWidth;
  canvasHeight;

  constructor(canvas) {
    this.ctx = canvas.current?.getContext('2d') || null;
    this.canvasWidth = canvas.current?.clientWidth;
    this.canvasHeight = canvas.current?.clientHeight;
  }

  init() {
    this.make();
    this.loop();
  }

  make() {
    const getRandomRadius = () => Math.random() * 1 + 0.5;
    const getRandomSpeed = () => Math.random() * 0.3 + 0.1;
    const getRandomDir = () => [-1, 1][Math.floor(Math.random() * 2)];
    const snows = [];

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * this.canvasWidth;
      const y = Math.random() * this.canvasHeight;

      const size = getRandomRadius();
      const speed = getRandomSpeed();
      const dir = getRandomDir();

      snows.push({ x, y, size, speed, dir });
    }

    this.data = snows;
  }

  move() {
    const moveData = this.data.map(item => {
      item.x += item.dir * item.speed;
      item.y += item.speed;

      const isMinOverPositionX = -item.size > item.x;
      const isMaxOrverPositionX = item.x > this.canvasWidth;
      const isOverPositionY = item.y > this.canvasHeight;

      if (isMinOverPositionX || isMaxOrverPositionX) {
        item.dir *= -1;
      }

      if (isOverPositionY) {
        item.y = -item.size;
      }

      return item;
    });

    this.data = moveData;
  }

  draw() {
    const ctx = this.ctx;
    if (null === this.ctx) return;
    ctx?.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    ctx.fillStyle = '#0f1018';
    ctx?.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.data.forEach(item => {
      ctx?.beginPath();
      ctx.fillStyle = 'rgba(255,255,255, .6)';
      ctx?.arc(item.x, item.y, item.size, 0, Math.PI * 2);
      ctx?.fill();
      ctx?.closePath();
    });
  }

  loop() {
    this.move();
    this.draw();
  }
}

export default SnowClass;
