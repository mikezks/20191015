import { browser } from 'protractor';

describe('Page Title E2e Test', () => {
    beforeEach(() => {
        browser.get('http://localhost:4299');
    });

    it('should verify page title', () => {
        const pageTitle = browser.getTitle();

        expect(pageTitle).toEqual('Starter');
    });
});
