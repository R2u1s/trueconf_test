"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigureFactory = void 0;
// Базовый класс Figure
class Figure extends EventTarget {
}
// Класс для прямоугольника
class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    /**
     * Возвращает ширину
     * @returns
     */
    getWidth() {
        return this.width;
    }
    /**
     * Возвращает ширину
     * @returns
     */
    getHeight() {
        return this.height;
    }
    /**
     * Возвращает площадь прямоугольника
     * @returns
     */
    getArea() {
        return this.width * this.height;
    }
    /**
     * Возвращает периметр прямоугольника
     * @returns
     */
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Класс для треугольника
class Triangle extends Figure {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    /**
     * Возвращает ширину
     * @returns
     */
    getSideA() {
        return this.sideA;
    }
    /**
     * Возвращает ширину
     * @returns
     */
    getSideB() {
        return this.sideB;
    }
    /**
     * Возвращает ширину
     * @returns
     */
    getSideC() {
        return this.sideC;
    }
    /**
     * Возвращает площадь треугольника
     * @returns
     */
    getArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
    /**
     * Возвращает периметр треугольника
     * @returns
     */
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}
// Класс для круга
class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    /**
     * Возаращает площадь круга
     * @returns
     */
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    /**
     * Возаращает длину окружности
     * @returns
     */
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    /**
     * Возаращает диаметр круга
     * @returns
     */
    getDiameter() {
        return 2 * this.radius;
    }
}
// Класс для многогранника
class Polygon extends Figure {
    constructor(vertices) {
        super();
        this.vertices = vertices;
    }
    /**
     * Возвращает площадь многоугольника
     * @returns
     */
    getArea() {
        let area = 0;
        const n = this.vertices.length;
        for (let i = 0; i < n; i++) {
            const { x: x1, y: y1 } = this.vertices[i];
            const { x: x2, y: y2 } = this.vertices[(i + 1) % n];
            area += x1 * y2 - x2 * y1;
        }
        return Math.abs(area) / 2;
    }
    /**
     * Получает периметр многоугольника.
     * @returns Периметр многоугольника.
     */
    getPerimeter() {
        let perimeter = 0;
        const n = this.vertices.length;
        for (let i = 0; i < n; i++) {
            const { x: x1, y: y1 } = this.vertices[i];
            const { x: x2, y: y2 } = this.vertices[(i + 1) % n];
            perimeter += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        }
        return perimeter;
    }
}
// Фабрика для создания экземпляров геометрических фигур
class FigureFactory {
    /**
     * Создает прямоугольник
     * @param width ширина
     * @param height высота
     * @returns Экземпляр Rectangle
     */
    static createRectangle(width, height) {
        return new Rectangle(width, height);
    }
    /**
     * Создает треугольник
     * @param sideA Длина стороны A
     * @param sideB Длина стороны B
     * @param sideC Длина стороны C
     * @returns Экземпляр Triangle
     */
    static createTriangle(sideA, sideB, sideC) {
        return new Triangle(sideA, sideB, sideC);
    }
    /**
     * Создает круг
     * @param radius Радиус круга
     * @returns Экземпляр Circle
     */
    static createCircle(radius) {
        return new Circle(radius);
    }
    /**
       * Создает многоугольник
       * @param vertices Массив вершин многоугольника
       * @returns Экземпляр Polygon
       */
    static createPolygon(vertices) {
        return new Polygon(vertices);
    }
}
exports.FigureFactory = FigureFactory;
