export function drawDistributor(canvas, centerX, centerY, angle, radius) {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.stroke();
}