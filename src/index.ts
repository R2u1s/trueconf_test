// Базовый класс Figure
abstract class Figure extends EventTarget {
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

// Класс для прямоугольника
class Rectangle extends Figure {
  constructor(private width: number, private height: number) {
    super();
  }

  /**
   * Возвращает ширину
   * @returns
   */
  getWidth(): number {
    return this.width;
  }

  /**
   * Возвращает ширину
   * @returns
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * Возвращает площадь прямоугольника
   * @returns
   */
  getArea(): number {
    return this.width * this.height;
  }

  /**
   * Возвращает периметр прямоугольника
   * @returns
   */
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Класс для треугольника
class Triangle extends Figure {
  constructor(private sideA: number, private sideB: number, private sideC: number) {
    super();
  }

  /**
   * Возвращает ширину
   * @returns
   */
  getSideA(): number {
    return this.sideA;
  }

  /**
   * Возвращает ширину
   * @returns
   */
  getSideB(): number {
    return this.sideB;
  }

  /**
   * Возвращает ширину
   * @returns
   */
  getSideC(): number {
    return this.sideC;
  }

  /**
   * Возвращает площадь треугольника
   * @returns
   */
  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  /**
   * Возвращает периметр треугольника
   * @returns
   */
  getPerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }
}

// Класс для круга
class Circle extends Figure {
  constructor(private radius: number) {
    super();
  }

  /**
   * Возаращает площадь круга
   * @returns
   */
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  /**
   * Возаращает длину окружности
   * @returns
   */
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Возаращает диаметр круга
   * @returns
   */
  getDiameter(): number {
    return 2 * this.radius;
  }
}

interface Point {
  x: number;
  y: number;
}

// Класс для многогранника
class Polygon extends Figure {
  constructor(private vertices: Point[]) {
    super();
  }

  /**
   * Возвращает площадь многоугольника
   * @returns
   */
  getArea(): number {
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
  getPerimeter(): number {
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
export class FigureFactory {
  /**
   * Создает прямоугольник
   * @param width ширина
   * @param height высота
   * @returns Экземпляр Rectangle
   */
  static createRectangle(width: number, height: number): Rectangle {
    return new Rectangle(width, height);
  }

  /**
   * Создает треугольник
   * @param sideA Длина стороны A
   * @param sideB Длина стороны B
   * @param sideC Длина стороны C
   * @returns Экземпляр Triangle
   */
  static createTriangle(sideA: number, sideB: number, sideC: number): Triangle {
    return new Triangle(sideA, sideB, sideC);
  }

  /**
   * Создает круг
   * @param radius Радиус круга
   * @returns Экземпляр Circle
   */
  static createCircle(radius: number): Circle {
    return new Circle(radius);
  }

  /**
     * Создает многоугольник
     * @param vertices Массив вершин многоугольника
     * @returns Экземпляр Polygon
     */
  static createPolygon(vertices: Point[]): Polygon {
    return new Polygon(vertices);
  }
}