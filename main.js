let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let pI = Math.PI / 180;

var ctx = canvas.getContext('2d');


function resize() {
    if (window.innerWidth <= 720) {
        canvas.height = window.innerHeight / 2.5;
        canvas.width = window.innerWidth - 50;
    } else {
        canvas.height = window.innerHeight / 1.5;
        canvas.width = window.innerWidth / 1.5;
    }

    for (let i = 0; i < canvas.width; i = i + 20) {
        ctx.lineWidth = 1;
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke();
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.beginPath()
    ctx.arc(0, 0, 5, 0, 360 * pI, false)
    ctx.fillStyle = 'red';
    ctx.fill()
}
window.addEventListener("resize", resize);
resize();


function change_fun(x) {
    ctx.restore()
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    ctx.restore()
    if (x == 1) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#f3ac3c';
        let size = canvas.height / 2 - 20;
        let size_sm = canvas.height / 10;
        ctx.lineWidth = canvas.height / 10;
        ctx.strokeStyle = '#998235';

        ctx.beginPath();
        ctx.rotate(45 * pI)
        ctx.rect(-size / 2, -size / 2, size, size);
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = '#F3AC3C';
        ctx.moveTo(0, 0)
        ctx.lineTo(-canvas.height / 2 - 20, 0)
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -canvas.height / 2 - 20)
        ctx.stroke()

        ctx.beginPath();
        ctx.fillStyle = '#1A4341';
        ctx.rect(-size_sm / 2, -size_sm / 2, size_sm, size_sm);
        ctx.fill()
    } else if (x == 2) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#293462';
        let res = canvas.height / 3;
        ctx.beginPath()
        ctx.arc(0.5, 0.5, res, 0, 360 * pI, false)
        ctx.fillStyle = '#FFF1C1';
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-res / 1.1 - 1, res / 2 - 1);
        ctx.lineTo(-res / 1.42, res / 3.3);
        ctx.lineTo(-res / 2, res / 2 + 1);
        ctx.lineTo(res / 2 - 8, -res / 2 + 9.5);
        ctx.lineTo(res + 2, res / 5.4);
        ctx.quadraticCurveTo(res / 1.28, res - 2, 0, res + 5);
        ctx.quadraticCurveTo(-res / 2 - 10, res, -res + 9, res / 2 - 1);
        ctx.fillStyle = '#FE5F55';
        ctx.fill()
        ctx.beginPath()
        ctx.arc(0, 0, res + 20.4, 0, 360 * pI, false)
        ctx.lineWidth = 40;
        ctx.strokeStyle = '#293462';
        ctx.stroke();
    } else if (x == 3) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#222';
        let res = canvas.height / 3;
        ctx.strokeStyle = '#F2994A';
        ctx.lineWidth = res / 3.33;
        ctx.beginPath()
        ctx.moveTo(res / 16, -res / 1.28);
        ctx.lineTo(-res / 1.81, -res / 6.2);
        ctx.lineTo(-res / 12.2, res / 3.55);
        ctx.lineJoin = 'round';
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = '#2D9CDB';
        ctx.lineWidth = res / 3.33;
        ctx.rotate(180 * pI)
        ctx.moveTo(res / 16, -res / 1.28);
        ctx.lineTo(-res / 1.81, -res / 6.2);
        ctx.lineTo(-res / 12.2, res / 3.55);
        ctx.lineJoin = 'round';
        ctx.stroke()
        // ctx.context.lineJoin = 'miter | bevel | round';
    } else if (x == 4) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#191919';
        let res_big = canvas.height;
        let res_sm = canvas.height / 2;
        ctx.beginPath()
        ctx.fillStyle = '#f2ad43';
        ctx.strokeStyle = '#f2ad43';
        ctx.moveTo(-res_sm / 2, -res_sm / 5)
        ctx.arcTo(-res_sm / 2, res_sm / 1.5, res_sm / 1.875, res_sm / 1.529, res_sm / 7.5)
        ctx.arcTo(res_sm / 2, res_sm / 1.5, res_sm / 2.14, 0, res_sm / 7.5)
        ctx.lineTo(res_sm / 2, -res_sm / 5)
        ctx.fill();

        ctx.beginPath()
        ctx.arc(0, -res_sm / 5.98, res_sm / 2, 0, 180 * pI, true)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#FFF58F';
        ctx.arc(0, res_sm / 7.5, res_sm / 5, 0, 360 * pI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#E08027';
        ctx.moveTo(-res_sm / 2, 0)
        ctx.bezierCurveTo(-res_sm / 5, 0, res_sm / 15, res_sm / 3.94, res_sm / 15, res_sm / 3)
        ctx.lineTo(res_sm / 15, res_sm / 1.5)
        ctx.arcTo(-res_sm / 2, res_sm / 1.5, -res_sm / 2, 0, res_sm / 7.5)
        ctx.lineTo(-res_sm / 2, 0)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#824B20';
        ctx.moveTo(res_sm / 2, 0)
        ctx.bezierCurveTo(-res_sm / 7.5, 0, -res_sm / 5.34, res_sm / 1.5, -res_sm / 6, res_sm / 1.5)
        ctx.arcTo(res_sm / 2, res_sm / 1.5, res_sm / 2.14, -res_sm, res_sm / 7.5)
        ctx.lineTo(res_sm / 2, 0)
        ctx.fill()
    } else if (x == 5) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#262626';
        let res_sm = canvas.height / 2;
        for (let i = 0; i <= 18; i++) {
            ctx.rotate(100 * pI);
            let color = ["#34495e", "#e74c3c", '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c'];
            ctx.fillStyle = color[Math.floor(Math.random() * color.length)];
            ctx.beginPath()
            ctx.arc(res_sm / 1.665, res_sm / 1.665, res_sm / 9.94, 0, 360 * pI, false);
            ctx.arc(res_sm / 2, res_sm / 2, res_sm / 15, 0, 360 * pI, false);
            ctx.fill();
            ctx.beginPath()
            ctx.arc(res_sm / 2.72, res_sm / 2.72, res_sm / 15, 0, 360 * pI, false);
            ctx.arc(res_sm / 3.33, res_sm / 3.33, res_sm / 20, 0, 360 * pI, false);
            ctx.fill();
            ctx.beginPath()
            ctx.arc(res_sm / 5, res_sm / 5, res_sm / 29, 0, 360 * pI, false);
            ctx.fill();
        }
    } else if (x == 6) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#6592CF';
        let res = canvas.height / 2;
        ctx.strokeStyle = '#060F55';
        ctx.fillStyle = '#060F55';
        ctx.lineWidth = res / 7.5;

        ctx.beginPath()
        ctx.arc(0, res / 3, res / 3, 0, 180 * pI, false)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(-res / 1.5, -res / 3, res / 3, 0, 180 * pI, true)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(res / 1.5, -res / 3, res / 3, 0, 180 * pI, true)
        ctx.stroke()
    } else if (x == 7) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#191919';
        let res = canvas.height / 2;
        ctx.beginPath()
        ctx.fillStyle = '#F9E492';
        ctx.arc(-res / 3, 0, res / 3, 0, 180 * pI, true)
        ctx.arc(res / 3, 0, res / 3, 0, 180 * pI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.rotate(90 * pI)
        ctx.fillStyle = '#4F77FF';
        ctx.arc(-res / 3, 0, res / 3, 0, 180 * pI, true)
        ctx.arc(res / 3, 0, res / 3, 0, 180 * pI, false)
        ctx.fill()
    } else if (x == 8) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#191919';
        let res = canvas.height / 2;
        ctx.beginPath()
        ctx.fillStyle = '#4F77FF';
        ctx.arc(0, -res / 6 + 1, res / 3, 0, 180 * pI, true)
        ctx.fill()
        ctx.fillRect(-res / 3, -res / 6, res / 1.5, res / 1.5)

        ctx.fillStyle = '#191919';
        for (let i = 0; i < 4; i++) {
            ctx.fillRect(-res / 5 + (i * res / 7.5), res / 2.724 - (i * res / 6.25), res / 1.5, res / 7.5)
        }
    } else if (x == 9) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#293462';
        let res = canvas.height / 2;
        ctx.beginPath()
        ctx.fillStyle = '#FE5F55';
        ctx.moveTo(-res / 1.5, -res / 10)
        ctx.lineTo(-res / 1.5, res / 3)
        ctx.quadraticCurveTo(-res / 1.5, res / 1.5, -res / 3.75, res / 1.5)
        ctx.lineTo(res / 2.727, res / 1.5)
        ctx.bezierCurveTo(res / 1.5, res / 1.666, res / 1.5, res / 2.585, res / 1.5, res / 3)
        ctx.lineTo(res / 1.5, -res / 10)
        ctx.arc(0, 0, res / 1.5, 0, 180 * pI, true)
        ctx.fill()

        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = '#FFF1C1';
        ctx.rotate(-25 * pI)
        ctx.arc(-res / 49, -res / 1.363, res / 3, 0, 180 * pI, false)
        ctx.fill()

        ctx.restore()
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = '#FFF1C1';
        ctx.rotate(25 * pI)
        ctx.arc(res / 49, -res / 1.363, res / 3, 0, 180 * pI, false)
        ctx.fill()

        ctx.restore()
        ctx.beginPath()
        ctx.strokeStyle = '#293462';
        ctx.lineWidth = res / 5;
        ctx.rotate(0)
        ctx.arc(0, 0, res / 1.3, 0, 180 * pI, true)
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = '#FFF1C1';
        ctx.arc(-res / 3, res / 7.5, res / 5, 0, 360 * pI, false)
        ctx.arc(res / 3, res / 7.5, res / 5, 0, 360 * pI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#FFF1C1';
        ctx.fillRect(-res / 10, res / 2.14, res / 5, res / 15)

        ctx.beginPath()
        ctx.rotate(90 * pI)
        ctx.arc(res / 2, res / 10, res / 30, 0, 180 * pI, false)
        ctx.arc(res / 2, -res / 10, res / 30, 0, 180 * pI, true)
        ctx.fill()
    } else if (x == 10) {
        ctx.restore()
        ctx.save()
        canvas.style.backgroundColor = '#6592CF';
        let res = canvas.height / 2;

        ctx.beginPath()
        ctx.fillStyle = '#EEB850';
        ctx.arc(-res / 2.5, -res / 15, res / 7.5, 0, 360 * pI, false)
        ctx.arc(-res, -res / 15, res / 7.5, 0, 360 * pI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#EEB850';
        ctx.arc(-res / 1.428, -res / 7.5, res / 5, 0, 360 * pI, false)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#243D83';
        for (let i = res / 15; i <= res / 1.034; i = i + res / 3.3333333333) {
            ctx.fillRect(i, -res / 15, res / 15, res / 3)
            ctx.arc(i + res / 30, -res / 15, res / 15, 0, 360 * pI, false)
        }

        for (let i = res / 2.305; i <= canvas.height / 1.93; i = i + res / 3.3333333333) {
            ctx.fillRect(-i, -res / 15, res / 15, res / 3)
            ctx.arc(-i + res / 30, -res / 15, res / 15, 0, 360 * pI, false)
        }
        ctx.fill()
    }
}

//////////////////////////////////////////////////////////////////////////////////
canvas.onmousedown = function (e) {
    console.log(e.layerX + ', ' + e.layerY + ' onmousedown + layer')
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
}
///////////////////////////////////////////////////////////////////////////////