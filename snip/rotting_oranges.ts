/**
 *  matrix format
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 */

interface Coords {
    r: number,
    c: number,
}

function orangesRotting(grid: number[][]): number {

    let queue: Coords[] = new Array();
    let freshOranges = 0;
    let ROWS = grid.length;
    let COLS = grid[0].length;

    for (let r = 0; r < ROWS; ++r) {
        for (let c = 0; c < COLS; ++c) {
            if (grid[r][c] === 2) {
                queue.unshift({ r, c });
            } else if (grid[r][c] === 1) {
                freshOranges++;
            }
        }
    }

    queue.unshift({ r: -1, c: -1 });

    let minutesElapsed = -1;
    let directions: Array<Array<number>> = [
        [-1, 0], [1, 0],
        [0, -1], [0, 1]
    ];

    while (queue.length > 0) {
        let coord = queue.pop();
        if (!coord) {
            break;
        }
        let { r, c } = coord;
        if (r === -1) {
            // finished a round of prcessing
            minutesElapsed++;
            if (queue.length > 0) {
                queue.unshift({ r: -1, c: -1 });
            }
        } else {

            for (let direction of directions) {
                let neighborRow: number = r + direction[0];
                let neighborCol: number = c + direction[1];
                if (neighborCol >= 0 && neighborRow >= 0
                    && neighborCol < COLS && neighborRow < ROWS
                ) {
                    if (grid[neighborRow][neighborCol] === 1) {
                        // contaminate neighbor orange
                        grid[neighborRow][neighborCol] = 2;
                        freshOranges--;
                        queue.unshift({
                            r: neighborRow,
                            c: neighborCol
                        });
                    }
                }
            }
        }
    }

    return freshOranges === 0 ? minutesElapsed : -1;
};
