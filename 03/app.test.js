import randomNumber from './app';

it('throw exception when min is not a number', () => {
    function callRandomNumber() {
        randomNumber('3', 4)
    }
        expect(callRandomNumber).toThrow()
})

it('throw exception when max is not a number', () => {
    function callRandomNumber() {
        randomNumber(3, '4')
    }
        expect(callRandomNumber).toThrow()
})