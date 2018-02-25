describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`szyutils.getKeyName(13) should return "Enter"`, function () {
            assert(szyutils.getKeyName(13) === 'Enter')
        });
    });

});