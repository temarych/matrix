# Matrix
## Purpose
### 2D Array
Matrix can be used as the replacement for 2D arrays, which are still not implemented natively in JavaScript.
## Benefits
### Inheritance
You can extend matrices with some methods and create your own data structure.
### Simple interface
Matrices provide you with simple, easy to use interface.
## Guide
### Create a new matrix
Just write this simple line of code:
```javascript
let matrix = new Matrix(template);
```
Instead of *template* insert a 2D array, which represents this matrix.
For example:
```javascript
let matrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
```
If you want to create a matrix out of its width and height, use Matrix.create method:
```javascript
let matrix = Matrix.create({
    width,
    height
});
```
It also supports such lists of parameters:
```javascript
Matrix.create();

Matrix.create(width);
Matrix.create(width, height);

Matrix.create({ width });
Matrix.create({ height });
```
Missing parameters will be set by default.
### Get and set its values
You can easily get and set its values using simple interface:
```javascript
matrix[row][column];
```
It's quite simillar to arrays, isn't it?
### Get and set its size
If you want to get the size of the matrix, you should see its *width* and *height* properties:
```javascript
matrix.width;
matrix.height;
```
You can also rewrite this properties, and your matrix will be changed as well. Just assign *width* and *height* properties directly:
```javascript
matrix.width = width;
matrix.height = height;
```
### Rotate the matrix
You can rotate your matrices. It's easy: just call this method:
```javascript
matrix.rotate();
```
**Note:** this will only return a new matrix, rotated by 90 degrees; changes won't be applied to the original matrix.
### Switch the matrix
You can create a new matrix out of columns of the original matrix.
For example:
```javascript
matrix.switch();
```
### Format the matrix
When you try to get a string out of a matrix, its method *toString* is called automatically and its returned value is the result of the *format* method.
```javascript
matrix.format();
```
You can also configure its functionality by passing such parameters:
```javascript
matrix.format({ spaces });
```
*Spaces* is the property which stores the amount of spaces used to separate columns of the matrix. Its value is 1 by default. 
## Conclusion
This library has a lot of useful methods for working with matrices and its simple implementation, based on array inheritance.
In the future, you'll be able to work with matrices in the same way as in mathematics.