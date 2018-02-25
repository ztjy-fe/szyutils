describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual szyutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, szyutils.deepClone(person))
        });

        it(`person === szyutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, szyutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`szyutils.isEmptyObject({}) should return true`, function () {
            assert(szyutils.deepClone({}))
        });

        it(`szyutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(szyutils.isEmptyObject({
                one: 1
            }))
        });

        it(`szyutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(szyutils.isEmptyObject([]))
        });
    });
})