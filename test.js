const chai = require('chai');
const expect = chai.expect;
const chaiDeepMatch = require('chai-deep-match');
chai.use(chaiDeepMatch);

const string2tree = require('./');


describe('test cases', () => {
    it('param is null', () => {
        expect(string2tree(null)).to.deep.match({});
    });

    it('value undefined', () => {
        expect(string2tree({'a.b.c': undefined})).to.deep.match({a: {b: {c: {}}}});
    });

    it('single', () => {
        expect(string2tree({'a.b.c': 1})).to.deep.match({a: {b: {c: {_v: 1}}}});
    });

    it('branch', () => {
        expect(string2tree({'a.b.c': 1, 'a.b.d': 2})).to.deep.match({a: {b: {c: {_v: 1}, d: {_v: 2}}}});
    });

    it('parent-child', () => {
        expect(string2tree({'a.b.c': 1, 'a.b': 2})).to.deep.match({a: {b: {_v: 2, c: {_v: 1}}}});
    });

    it('multiroot', () => {
        expect(string2tree({'a.b.c': 1, 'd': 2, 'e': 3})).to.deep.match({a: {b: {c: {_v: 1}}}, d: {_v: 2}, e: {_v: 3}});
    });

    it('complex', () => {
        expect(string2tree({
                'a.b.c.d': 1,
                'a.b': 2,
                'a.b.e': 3,
                'f.g': 4
            }
        )).to.deep.match({
            a: {
                b: {
                    c: {
                        d: {
                            _v: 1
                        }
                    },
                    _v: 2,
                    e: {
                        _v: 3
                    }
                }
            },
            f: {
                g: {
                    _v: 4
                }
            }
        })
    });

    it('value types', () => {
        const f = (x) => {
            return true
        };
        expect(string2tree({'a': 1, 'b': true, 'c': [5, 6], 'd': f})).to.deep.match({
            a: {_v: 1},
            b: {_v: true},
            c: {_v: [5, 6]},
            d: {_v: f}
        });
    });


});

