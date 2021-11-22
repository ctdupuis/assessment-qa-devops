
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterEach(async () => {
    await driver.sleep(4500)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()

    expect(displayed).toBe(true)
})

test('Draw button correctly displays choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const bots = await driver.findElements(By.className('bot-card'))

    expect(bots.length).toEqual(5)
})

test('Add to Duo button correctly displays player-id div', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const playerDiv = await driver.findElement(By.id('player-duo'))
    const add = await driver.findElement(By.className('bot-btn'))
    await add.click()
    const choicesDiv = await driver.findElement(By.id('choices'))
    const playerDivChildren = await playerDiv.findElements(By.xpath('./child::*'))
    const choicesDivChildren = await choicesDiv.findElements(By.xpath('./child::*'))


    expect(playerDivChildren.length).toEqual(1)
    expect(choicesDivChildren.length).toEqual(4)
})