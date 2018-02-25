describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('szyutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(szyutils.isEmail("leiquanlive.com"))
        });
        it('szyutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(szyutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('szyutils.isIdCard("622224188203234033") should return true ', function () {
            assert(szyutils.isIdCard("622224188203234033"))
        });
        it('szyutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!szyutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('szyutils.isPhoneNum("18882324234") should return true ', function () {
            assert(szyutils.isPhoneNum("18882324234"))
        });
        it('szyutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(szyutils.isPhoneNum("8618882324234"))
        });
        it('szyutils.isPhoneNum("5534553") should return false', function () {
            assert(!szyutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('szyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(szyutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('szyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(szyutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('szyutils.isUrl("www.baidu.com") should return true', function () {
            assert(szyutils.isUrl("www.baidu.com"))
        });
        it('szyutils.isUrl("baidu.com") should return true', function () {
            assert(szyutils.isUrl("baidu.com"))
        });
        it('szyutils.isUrl("http://baiducom") should return false', function () {
            assert(!szyutils.isUrl("http://baiducom"))
        });
    });

});