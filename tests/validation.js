import { expect } from 'chai'
import { hello } from '../src/scripts/hello';

describe('HelloWorld test', () => {
    it('should say "Hello world"', () => {
        const result = hello();
        expect(result).to.equal('Hello world');
    });
})
