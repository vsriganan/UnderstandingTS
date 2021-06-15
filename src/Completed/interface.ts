interface Point{
    x: number,
    y: number
    // ,drawPoints: () => void
}

let drawPoint = (point: Point) => {
    console.log(point);
}

drawPoint({
    x:2, 
    y:3
});