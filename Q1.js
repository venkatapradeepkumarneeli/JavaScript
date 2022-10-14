class Shape
{
    constructor(name,shape){
        this.name = name;
        this.shape = shape;
    }
    getShapeInformation(){}
}

class Circle extends Shape
{
    constructor(name,radius){
        super(name);
        this.radius = radius;
    }
    getArea(){
        let area = Math.PI * (this.radius*this.radius);
        return area;
    }
    getShapeInformation()
    {
        super.getShapeInformation();
        document.getElementById("input1").innerHTML = "Name of the shape is "+this.name+"<br>The radius of the "+this.name+" is "+this.radius+"<br>The area of the circle is "+ this.getArea();
    }
}

class Rectangle extends Shape
{
    constructor(name,length,width)
    {
        super(name);
        this.length = length;
        this.width = width;
    }
    getArea()
    {
        return this.length*this.width;
    }
    getShapeInformation()
    {
        super.getShapeInformation();
        document.getElementById("input2").innerHTML = "Name of the shape is "+this.name+"<br>Length of the "+this.name+" is "+this.length+" and width of the "+this.name+" is "+this.width+
                                                        "<br>The area of the rectangle is "+ this.getArea();
    }
}
cir = new Circle("circle", 1);
cir.getArea();
cir.getShapeInformation();

rec = new Rectangle("rectangle",50,20);
rec.getArea();
rec.getShapeInformation();

