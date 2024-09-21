declare abstract class Figure extends EventTarget {
    abstract getArea(): number;
    abstract getPerimeter(): number;
}
declare class Rectangle extends Figure {
    private width;
    private height;
    constructor(width: number, height: number);
    /**
     * Возвращает ширину
     * @returns
     */
    getWidth(): number;
    /**
     * Возвращает ширину
     * @returns
     */
    getHeight(): number;
    /**
     * Возвращает площадь прямоугольника
     * @returns
     */
    getArea(): number;
    /**
     * Возвращает периметр прямоугольника
     * @returns
     */
    getPerimeter(): number;
}
declare class Triangle extends Figure {
    private sideA;
    private sideB;
    private sideC;
    constructor(sideA: number, sideB: number, sideC: number);
    /**
     * Возвращает ширину
     * @returns
     */
    getSideA(): number;
    /**
     * Возвращает ширину
     * @returns
     */
    getSideB(): number;
    /**
     * Возвращает ширину
     * @returns
     */
    getSideC(): number;
    /**
     * Возвращает площадь треугольника
     * @returns
     */
    getArea(): number;
    /**
     * Возвращает периметр треугольника
     * @returns
     */
    getPerimeter(): number;
}
declare class Circle extends Figure {
    private radius;
    constructor(radius: number);
    /**
     * Возаращает площадь круга
     * @returns
     */
    getArea(): number;
    /**
     * Возаращает длину окружности
     * @returns
     */
    getPerimeter(): number;
    /**
     * Возаращает диаметр круга
     * @returns
     */
    getDiameter(): number;
}
interface Point {
    x: number;
    y: number;
}
declare class Polygon extends Figure {
    private vertices;
    constructor(vertices: Point[]);
    /**
     * Возвращает площадь многоугольника
     * @returns
     */
    getArea(): number;
    /**
     * Получает периметр многоугольника.
     * @returns Периметр многоугольника.
     */
    getPerimeter(): number;
}
export declare class FigureFactory {
    /**
     * Создает прямоугольник
     * @param width ширина
     * @param height высота
     * @returns Экземпляр Rectangle
     */
    static createRectangle(width: number, height: number): Rectangle;
    /**
     * Создает треугольник
     * @param sideA Длина стороны A
     * @param sideB Длина стороны B
     * @param sideC Длина стороны C
     * @returns Экземпляр Triangle
     */
    static createTriangle(sideA: number, sideB: number, sideC: number): Triangle;
    /**
     * Создает круг
     * @param radius Радиус круга
     * @returns Экземпляр Circle
     */
    static createCircle(radius: number): Circle;
    /**
       * Создает многоугольник
       * @param vertices Массив вершин многоугольника
       * @returns Экземпляр Polygon
       */
    static createPolygon(vertices: Point[]): Polygon;
}
export {};
