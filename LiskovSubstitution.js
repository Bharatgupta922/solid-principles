// Liskov Substitution Principle


// # Example 1

class Rectangle {
    
    constructor (width, height) {
        this.width = width
        this.height = height
    }

    getArea () {
        return this.width * this.height
    }

    getPerimeter () {
        return 2 * (this.width + this.height)
    }
}

class Square extends Rectangle {
    constructor (side) {
        super(side, side)
    }

    printArea () {
        console.log(`Area of Square: ${this.getArea()}`)
    }

    printPerimeter () {
        console.log(`Perimeter of Square: ${this.getPerimeter()}`)
    }
}



// # Example 2

class File {
    read (fileName, extension) {
        const bucketMap = {
            'txt': 'TextBucket',
            'jpg': 'ImageBucket',
            'png': 'ImageBucket',
            'mp4': 'VideoBucket'
        }
        const params = {
            key: bucketMap[extension],
            fileName: `${fileName}.${extension}`
        }

        console.log(`Reading file ${fileName}.${extension} from bucket ${params.key}`)
    }
}

class TextFile extends File { 
    read (fileName) {
        super.read(fileName, 'txt')
    }
}
const main = () => {

    const square  = new Square(5)
    square.printArea()
    square.printPerimeter()
    
    const textFile = new TextFile()
    textFile.read('exampleFile') 
}

main()