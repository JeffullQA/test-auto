import { Selector } from 'testcafe'; 


fixture `demo Test`
    .page `http://devexpress.github.io/testcafe/example`

test('my first test', async t => {

    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    
    const articleHeader = await Selector('.result-content').find('h1');

    // Obtain the text of the article header
    let headerText = await articleHeader.innerText;

});    

