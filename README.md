# Библиотека для работы с геометрическими фигурами
Выполнена в качесте тестового задания для вакансии Junior TypeScript Developer (node.js) компании TrueConf
## Установка библиотеки
Выполняется командой
npm install trueconf_test_budanov
### Функционал библиотеки
Библиотека позволяет создавать объекты геометрических фигур: для прямоугольника, треугольника, круга, многогранника.
Объект созданной фигуры имеет следующие методы:
* Все фигуры имеют методы getArea() и getPerimeter() - вычисление площади и периметра;
* Отдельные фигуры имеют методы, которые возвращают параметры фигуры:
    - Прямоугольник: getWidth(), getHeight() - возвращают ширину и длину прямоугольника;
    - Треугольник: getSideA(),getSideB(),getSideC() - возвращают стороны треугольника;
    - Круг: getDiameter() - возвращает диаметр круга;

Для создания фигуры используется фабрика FigureFactory, которая имеет соответствующие каждой фигуре методы создания:
* createRectangle(width,height) - создание прямоугольника. Аргументы - ширина, длина;
* createTriange(sideA,sideB,sideC) - создание треугольника. Аргументы - длины сторон треугольника;
* createCircle(radius) - создание круга. Аргументы - радиус круга;
* createPolygon([{x,y}]) - создание многранника. Аргменты - массива координат вершин x и y в виде объекта;

#### Пример использования библиотеки
* Такой код вернет периметр созданного треугольника в консоль: 12

import { FigureFactory } from "trueconf_test_budanov";

const tri = FigureFactory.createTriangle(3,4,5);

console.log(tri.getPerimeter());

* А это пример создания многоугольника. Вернет в консоль периметр: 120.17378262990894

const polygon = FigureFactory.createPolygon([
  { x: -10, y: 15 },
  { x: 10, y: 40 },
  { x: 30, y: 15 },
  { x: 18, y: 0 },
  { x: 6, y: 17 },
]);

console.log(polygon.getPerimeter());