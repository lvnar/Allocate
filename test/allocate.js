let assert = require('assert');

const allocate = require('../allocate');

describe('Allocate function testing', function () {
    let test = [{
        sales: [
            {'id': 'S1', 'created': '2020-01-02', 'quantity': 6},
            {'id': 'S2', 'created': '2020-11-05', 'quantity': 2},
            {'id': 'S3', 'created': '2019-12-04', 'quantity': 3},
            {'id': 'S4', 'created': '2020-01-20', 'quantity': 2},
            {'id': 'S5', 'created': '2019-12-15', 'quantity': 9}
        ],
        purchases: [
            {'id': 'P1', 'receiving': '2020-01-04', 'quantity': 4},
            {'id': 'P2', 'receiving': '2020-01-05', 'quantity': 3},
            {'id': 'P3', 'receiving': '2020-02-01', 'quantity': 5},
            {'id': 'P4', 'receiving': '2020-03-05', 'quantity': 1},
            {'id': 'P5', 'receiving': '2020-02-20', 'quantity': 7}
        ],
        expected: [
            {'id': 'S3', 'supplyDate': '2020-01-04'},
            {'id': 'S5', 'supplyDate': '2020-02-01'},
            {'id': 'S1', 'supplyDate': '2020-02-20'},
            {'id': 'S4', 'supplyDate': '2020-03-05'}
        ]
    }, {
        sales: [
            {'id': 'S1', 'created': '2020-01-02', 'quantity': 6},
            {'id': 'S2', 'created': '2020-11-05', 'quantity': 2},
            {'id': 'S3', 'created': '2019-12-04', 'quantity': 3},
            {'id': 'S4', 'created': '2020-01-20', 'quantity': 2},
            {'id': 'S5', 'created': '2019-12-15', 'quantity': 9}
        ],
        purchases: [
            {'id': 'P1', 'receiving': '2020-01-04', 'quantity': 4},
            {'id': 'P2', 'receiving': '2020-01-05', 'quantity': 3},
            {'id': 'P3', 'receiving': '2020-02-01', 'quantity': 5},
            {'id': 'P4', 'receiving': '2020-03-05', 'quantity': 1},
            {'id': 'P5', 'receiving': '2020-02-20', 'quantity': 7},
            {'id': 'P6', 'receiving': '2019-12-20', 'quantity': 2}
        ],
        expected: [
            {'id': 'S3', 'supplyDate': '2020-01-04'},
            {'id': 'S5', 'supplyDate': '2020-02-01'},
            {'id': 'S1', 'supplyDate': '2020-02-20'},
            {'id': 'S4', 'supplyDate': '2020-02-20'},
            {'id': 'S2', 'supplyDate': '2020-03-05'}
        ]
    }];

    it('Test function import', () => {
        assert.equal(typeof(allocate), 'function');
    });

    test.forEach(({sales, purchases, expected}) => {
        it('Should return an array equal to expected', function () {
            assert.deepEqual(allocate(sales, purchases), expected);
        });
    });
});