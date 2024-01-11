export default class CanvasUtils {

    canvas;
    ctx;

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawOutlineRect(x, y, width, height, color = "#000000", lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;
        this._drawRect(x, y, width, height);
        this.ctx.stroke();
    }

    drawFilledRect(x, y, width, height, color = "#000000") {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this._drawRect(x, y, width, height);
        this.ctx.fill();
    }

    _drawRect(x, y, width, height) {
        this.ctx.rect(x - width / 2, y - height / 2, width, height);
    }

    drawLine(startX, startY, endX, endY, color = "#000000", lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }

    drawOutlineCircle(x, y, radius, color = "#000000", lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;
        this._drawCircle(x, y, radius);
        this.ctx.stroke();
    }

    drawFilledCircle(x, y, radius, color = "#000000") {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this._drawCircle(x, y, radius);
        this.ctx.fill();
    }

    _drawCircle(x, y, radius){
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    }

}
