import { expect } from 'chai'
import { isValidCelebrationType } from '../src/scripts/validations';

describe('Validation test', () => {
    describe('isValidCelebrationType')
        it('should be valid for any value which is not "Other"', () => {
            const result = isValidCelebrationType('Birthday');
            expect(result).to.be.true;
        });

        it('should be valid for "Other" if freetext is given', () => {
            const result = isValidCelebrationType('Other', 'Something else');
            expect(result).to.be.true;
        });

        it('should not be valid for "Other" if no freetext is given', () => {
            const result = isValidCelebrationType('Other', '');
            expect(result).to.be.false;
        });
});
