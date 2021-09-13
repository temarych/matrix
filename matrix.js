class Matrix extends Array {
    constructor(rows) {
        super();
        Object.assign(this, rows);
    }
    static create() {
        let width, height;

        typeof arguments[0] === 'object'
        && arguments[0] !== null
            ? ({ width, height } = arguments[0])
            : ([width, height] = arguments);

        let row = new Array(width)
            .fill(null)
        let rows = new Array(height)
            .fill(row)
        return new Matrix(rows);
    }
    get height() {
        return this.length;
    }
    set height(height) {
        if (this.height < height) {
            this.push(...Matrix.create({
                height: height - this.height,
                width: this.width
            }));
        } else {
            this.splice(height);
        }
    }
    get width() {
        return this.reduce((max, row) => {
            let width = row.length;
            return width > max ? width : max;
        }, 0);
    }
    set width(width) {
        let columns = this.switch();
        columns.height = width;
        Object.assign(this, columns.switch());
    }
    rotate() {
        return new Matrix(
            new Array(this.width)
                .fill(null)
                .map((_column, index) =>
                    this.map(row =>
                        row[index]
                    ).reverse()
                )
        )
    }
    switch() {
        return new Matrix(
            this.rotate()
                .map(row => row.reverse())
        );
    }
    format({ spaces = 1 } = {}) {
        let space = ' ';
        let separator = space.repeat(spaces);

        let columns = this.switch().map(column => {
            let strings = column.map(String);
            let limit = strings.reduce((limit, string) => {
                let length = string.length;
                return length > limit ? length : limit;
            }, 0);
            return strings.map(string => {
                let spaces = string.length !== limit
                    ? ' '.repeat(limit - string.length)
                    : '';
                return `${string}${spaces}`;
            });
        });

        return columns.switch()
            .map(row => row.join(' '))
            .join('\n')
    }
    toString() {
        return this.format();
    }
}