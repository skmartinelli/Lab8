const formatVolumeIconPath = require('../assets/scripts/main');

describe('Testing setting volumeValues to different values', () => {

    test('sets volumeValue 20 to iconLevel = 1 ', () => {
        expect(formatVolumeIconPath(20)).toContain('1');
    });

    test('sets volumeValue 40 to iconLevel = 2 ', () => {
        expect(formatVolumeIconPath(40)).toContain('2');
    });

    test('sets volumeValue 100 to iconLevel = 3 ', () => {
        expect(formatVolumeIconPath(100)).toContain('3');
    });

    test('sets volumeValue 0 to iconLevel = 0 ', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });

    //hello

})