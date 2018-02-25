describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`szyutils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${szyutils.getExplore()}`)
            assert(/^Chrome:/.test(szyutils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`szyutils.getOS() should return "windows"`, function () {
            console.log(`OS:${szyutils.getOS()}`)
            assert(szyutils.getOS() === 'windows' || szyutils.getOS() === 'MacOSX' || szyutils.getOS() === 'linux')
        });
    });
});