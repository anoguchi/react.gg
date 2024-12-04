export default function createDrawing(canvas, savedDrawing, save) {
  const ctx = canvas.getContext("2d");
  let rect = canvas.getBoundingClientRect();
  let drawing = false;
  let lastX = 0;
  let lastY = 0;
  let drawingData = savedDrawing || null;

  function draw(e) {
    if (!drawing) return;
    const { x, y } = mousePosition(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#f9f4da";
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.stroke();
    [lastX, lastY] = [x, y];
  }

  function mousePosition(e) {
    var x = e.offsetX || e.pageX - rect.left;
    var y = e.offsetY || e.pageY - rect.top;
    var mouseX = ((x * canvas.width) / canvas.clientWidth) | 0;
    var mouseY = ((y * canvas.height) / canvas.clientHeight) | 0;
    return { x: mouseX, y: mouseY };
  }

  function saveDrawing() {
    drawingData = canvas.toDataURL();
    if (save) {
      save(drawingData);
    }
  }

  function endDraw() {
    drawing = false;
    saveDrawing();
  }

  function startDraw(e) {
    drawing = true;
    const { x, y } = mousePosition(e);
    [lastX, lastY] = [x, y];
  }

  function resize() {
    rect = canvas.getBoundingClientRect();
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function redraw() {
    const image = new Image();
    image.src = drawingData;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
  }

  function touchstart(event) {
    startDraw(event.touches[0]);
  }

  function touchmove(event) {
    draw(event.touches[0]);
    event.preventDefault();
  }

  function touchend(event) {
    endDraw(event.changedTouches[0]);
  }

  canvas.addEventListener("touchstart", touchstart, false);
  canvas.addEventListener("touchmove", touchmove, false);
  canvas.addEventListener("touchend", touchend, false);
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mouseout", endDraw);

  new ResizeObserver(resize, canvas);
  redraw();
}
