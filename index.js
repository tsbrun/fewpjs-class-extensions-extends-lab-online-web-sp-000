class Polygon {
   constructor(sides) {
       this.sides = sides
   }

   get countSides() {
       return this.sides.length
   }

   get perimeter() {
       return this.sides.reduce((perimeter, side) => {
            return perimeter += side
       }, 0)
   }
}

class Triangle extends Polygon {
    get isValid() {
        const [side1, side2, side3] = this.sides
        if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const [side1, side2, side3, side4] = this.sides
        if (side1 === side2 && side1 === side3 && side1 === side4) {
            return true 
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}