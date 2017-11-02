/**
 * @type {string}
 */
sahagin.srcTreeYamlStr = (function(){/*
rootClassTable:
  classes:
  - methodKeys: [scenarios.AppiumTest.invalidLogin-void]
    key: scenarios.AppiumTest
    qname: scenarios.AppiumTest
formatVersion: 0.9.2
rootMethodTable:
  methods:
  - name: invalidLogin
    classKey: scenarios.AppiumTest
    codeBody:
    - endLine: 42
      startLine: 42
      code: {original: waitForVisibilityOf(existingUser_login);, type: unknown}
    - endLine: 43
      startLine: 43
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElement(existingUser_login).click();
        type: method
        thisInstance:
          args:
          - {original: existingUser_login, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(existingUser_login)
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 44
      startLine: 44
      code:
        methodKey: org.openqa.selenium.WebElement.clear
        original: driver.findElement(userId).clear();
        type: method
        thisInstance:
          args:
          - {original: userId, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(userId)
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 45
      startLine: 45
      code:
        args:
        - {original: '"someone@test.com"', type: string, value: someone@test.com}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(userId).sendKeys("someone@test.com");
        type: method
        thisInstance:
          args:
          - {original: userId, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(userId)
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 46
      startLine: 46
      code:
        args:
        - {original: '"test12345"', type: string, value: test12345}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(password).sendKeys("test12345");
        type: method
        thisInstance:
          args:
          - {original: password, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(password)
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 47
      startLine: 47
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElement(login_Button).click();
        type: method
        thisInstance:
          args:
          - {original: login_Button, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(login_Button)
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 48
      startLine: 48
      code: {original: Assert.assertTrue(driver.findElement(By.id("pageLevelError")).getText().equalsIgnoreCase("Account
          does not exist"));, type: unknown}
    - endLine: 49
      startLine: 49
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElement(facebook_login).click();
        type: method
        thisInstance:
          args:
          - {original: facebook_login, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(facebook_login)
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 50
      startLine: 50
      code: {original: Thread.sleep(10000);, type: unknown}
    - endLine: 51
      startLine: 51
      code:
        original: List<WebElement> element=driver.findElements(login_details);
        type: varAssign
        value:
          args:
          - {original: login_details, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElements
          childInvoke: true
          original: driver.findElements(login_details)
          type: method
          thisInstance: {original: driver, type: unknown}
        var: {name: element, original: element, type: localVar}
    - endLine: 52
      startLine: 52
      code:
        args:
        - {original: '"testUser@email.com"', type: string, value: testUser@email.com}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: element.get(0).sendKeys("testUser@email.com");
        type: method
        thisInstance:
          args:
          - {original: '0', type: unknown}
          methodKey: java.util.List.get
          original: element.get(0)
          type: method
          thisInstance: {name: element, original: element, type: localVar}
    - endLine: 53
      startLine: 53
      code:
        args:
        - {original: '"test123"', type: string, value: test123}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: element.get(1).sendKeys("test123");
        type: method
        thisInstance:
          args:
          - {original: '1', type: unknown}
          methodKey: java.util.List.get
          original: element.get(1)
          type: method
          thisInstance: {name: element, original: element, type: localVar}
    - endLine: 54
      startLine: 54
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElement(login_facebook).click();
        type: method
        thisInstance:
          args:
          - {original: login_facebook, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(login_facebook)
          type: method
          thisInstance: {original: driver, type: unknown}
    key: scenarios.AppiumTest.invalidLogin-void
subMethodTable:
  methods:
  - {name: assert, testDoc: 'check that {0}', capture: none, classKey: javaSystem,
    key: javaSystem.assert}
  - {name: equals, testDoc: '''{0}'' equals to ''{1}''', capture: none, classKey: javaSystem,
    key: javaSystem.equals}
  - {name: notEquals, testDoc: '''{0}'' does not equal to ''{1}''', capture: none,
    classKey: javaSystem, key: javaSystem.notEquals}
  - {name: assertEquals, testDoc: '', classKey: junit.framework.Assert, key: 'junit.framework.Assert.assertEquals-double,double'}
  - {name: assertEquals, testDoc: '', classKey: junit.framework.Assert, key: 'junit.framework.Assert.assertEquals-long,long'}
  - {name: assertEquals, testDoc: '', classKey: junit.framework.Assert, key: 'junit.framework.Assert.assertEquals-Object,Object'}
  - {name: assertEquals, testDoc: '', classKey: junit.framework.Assert, key: 'junit.framework.Assert.assertEquals-Object[],Object[]'}
  - {name: is, testDoc: 'equals to ''{0}''', capture: none, classKey: org.hamcrest.core.Is,
    key: org.hamcrest.core.Is.is-Object}
  - {name: is, testDoc: '{0}', capture: none, classKey: org.hamcrest.core.Is, key: org.hamcrest.core.Is.is-org.hamcrest.Matcher}
  - {name: not, testDoc: 'does not equal to ''{0}''', capture: none, classKey: org.hamcrest.core.IsNot,
    key: org.hamcrest.core.IsNot.not-Object}
  - {name: not, testDoc: 'does not equal to ''{0}''', capture: none, classKey: org.hamcrest.core.IsNot,
    key: org.hamcrest.core.IsNot.not-org.hamcrest.Matcher}
  - {name: is, testDoc: 'equals to ''{0}''', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.is-Object}
  - {name: is, testDoc: '{0}', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.is-org.hamcrest.Matcher}
  - {name: not, testDoc: 'does not equal to ''{0}''', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.not-Object}
  - {name: not, testDoc: 'does not equal to ''{0}''', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.not-org.hamcrest.Matcher}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-double,double'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-long,long'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-Object,Object'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-Object[],Object[]'}
  - {name: assertThat, testDoc: 'check that ''{0}'' {1}', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertThat-Object,org.hamcrest.Matcher'}
  - {name: assertThat, testDoc: 'check that ''{1}'' {2}', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertThat-String,Object,org.hamcrest.Matcher'}
  - {name: assertThat, testDoc: 'check that ''{0}'' {1}', classKey: org.hamcrest.MatcherAssert,
    key: 'org.hamcrest.MatcherAssert.assertThat-Object,org.hamcrest.Matcher'}
  - {name: assertThat, testDoc: 'check that ''{1}'' {2}', classKey: org.hamcrest.MatcherAssert,
    key: 'org.hamcrest.MatcherAssert.assertThat-String,Object,org.hamcrest.Matcher'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.testng.Assert,
    key: 'org.testng.Assert.assertEquals-boolean,boolean'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.testng.Assert,
    key: 'org.testng.Assert.assertEquals-int,int'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.testng.Assert,
    key: 'org.testng.Assert.assertEquals-long,long'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.testng.Assert,
    key: 'org.testng.Assert.assertEquals-Object,Object'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.testng.Assert,
    key: 'org.testng.Assert.assertEquals-Object[],Object[]'}
  - {name: assertEquals, testDoc: 'check that ''{0}'' equals to ''{1}''', classKey: org.testng.Assert,
    key: 'org.testng.Assert.assertEquals-String,String'}
  - {name: get, testDoc: '''{0}''th element of ''{this}''', capture: none, classKey: java.util.List,
    key: java.util.List.get}
  - {name: className, testDoc: 'class name = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.className}
  - {name: cssSelector, testDoc: 'css = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.cssSelector}
  - {name: id, testDoc: 'id = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.id}
  - {name: linkText, testDoc: 'text = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.linkText}
  - {name: name, testDoc: 'name = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.name}
  - {name: partialLinkText, testDoc: 'text = {0}(partial match)', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.partialLinkText}
  - {name: tagName, testDoc: 'tag name = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.tagName}
  - {name: xpath, testDoc: 'xpath = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.xpath}
  - {name: findElementByClassName, testDoc: 'element ''class name = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName}
  - {name: findElementByCssSelector, testDoc: 'element ''css = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector}
  - {name: findElementById, testDoc: 'element ''id = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementById}
  - {name: findElementByLinkText, testDoc: 'element ''text = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText}
  - {name: findElementByName, testDoc: 'element ''name = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByName}
  - {name: findElementByPartialLinkText, testDoc: 'element ''text = {0}(partial match)''',
    classKey: org.openqa.selenium.remote.RemoteWebDriver, key: org.openqa.selenium.remote.RemoteWebDriver.findElementByPartialLinkText}
  - {name: findElementByTagName, testDoc: 'element ''tag name = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName}
  - {name: findElementByXPath, testDoc: 'element ''xpath = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath}
  - {name: findElementsByClassName, testDoc: 'all elements for ''class name = {0}''',
    classKey: org.openqa.selenium.remote.RemoteWebDriver, key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByClassName}
  - {name: findElementsByCssSelector, testDoc: 'all elements for ''css = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector}
  - {name: findElementsById, testDoc: 'all elements for ''id = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsById}
  - {name: findElementsByLinkText, testDoc: 'all elements for ''text = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByLinkText}
  - {name: findElementsByName, testDoc: 'all elements for ''name = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByName}
  - {name: findElementsByPartialLinkText, testDoc: 'all elements for ''text = {0}(partial
      match)''', classKey: org.openqa.selenium.remote.RemoteWebDriver, key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByPartialLinkText}
  - {name: findElementsByTagName, testDoc: 'all elements for ''tag name = {0}''',
    classKey: org.openqa.selenium.remote.RemoteWebDriver, key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByTagName}
  - {name: findElementsByXPath, testDoc: 'all elements for ''xpath = {0}''', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath}
  - {name: getOrientation, testDoc: the screen orientation, classKey: org.openqa.selenium.Rotatable,
    key: org.openqa.selenium.Rotatable.getOrientation}
  - {name: rotate, testDoc: 'rotate the screen to {0}', classKey: org.openqa.selenium.Rotatable,
    key: org.openqa.selenium.Rotatable.rotate}
  - {name: Select, testDoc: 'pull-down for {0}', classKey: org.openqa.selenium.support.ui.Select,
    key: org.openqa.selenium.support.ui.Select.Select}
  - {name: selectByIndex, testDoc: 'select ''{0}''th item of {this}', classKey: org.openqa.selenium.support.ui.Select,
    key: org.openqa.selenium.support.ui.Select.selectByIndex}
  - {name: selectByValue, testDoc: 'select ''value = {0}'' item of {this}', classKey: org.openqa.selenium.support.ui.Select,
    key: org.openqa.selenium.support.ui.Select.selectByValue}
  - {name: selectByVisibleText, testDoc: 'select ''text = {0}'' item of {this}', classKey: org.openqa.selenium.support.ui.Select,
    key: org.openqa.selenium.support.ui.Select.selectByVisibleText}
  - {name: close, testDoc: close the current window, classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.close}
  - {name: findElement, testDoc: 'element ''{0}''', classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.findElement}
  - {name: findElements, testDoc: 'all elements for ''{0}''', classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.findElements}
  - {name: get, testDoc: 'go to the page ''{0}''', classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.get}
  - {name: getCurrentUrl, testDoc: the current URL, classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.getCurrentUrl}
  - {name: getTitle, testDoc: the page title, classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.getTitle}
  - {name: quit, testDoc: terminate the browser, classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.quit}
  - {name: back, testDoc: go back to the previous page, classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.back}
  - {name: forward, testDoc: go forward to the next page, classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.forward}
  - {name: refresh, testDoc: reload the page, classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.refresh}
  - {name: to, testDoc: 'go to the page ''{0}''', classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.to}
  - {name: clear, testDoc: 'clear the text of {this}', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.clear}
  - {name: click, testDoc: 'click {this}', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.click}
  - {name: getAttribute, testDoc: 'the ''{0}'' attribute of {this}', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.getAttribute}
  - {name: getText, testDoc: 'the text of {this}', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.getText}
  - {name: isDisplayed, testDoc: 'is {this} displayed', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.isDisplayed}
  - {name: isEnabled, testDoc: 'is {this} enabled', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.isEnabled}
  - {name: isSelected, testDoc: 'is {this} selected', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.isSelected}
  - {name: sendKeys, testDoc: 'send keys ''{0}'' to {this}', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.sendKeys}
  - {name: submit, testDoc: submit the form data, classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.submit}
  - {name: findElementByAndroidUIAutomator, testDoc: 'element ''Android UiAutomator
      = {0}''', classKey: io.appium.java_client.android.AndroidDriver, key: io.appium.java_client.android.AndroidDriver.findElementByAndroidUIAutomator}
  - {name: findElementsByAndroidUIAutomator, testDoc: 'all elements for ''Android
      UiAutomator = {0}''', classKey: io.appium.java_client.android.AndroidDriver,
    key: io.appium.java_client.android.AndroidDriver.findElementsByAndroidUIAutomator}
  - {name: isLocked, testDoc: is the screen locked, classKey: io.appium.java_client.android.AndroidDriver,
    key: io.appium.java_client.android.AndroidDriver.isLocked}
  - {name: findElementByAccessibilityId, testDoc: 'element ''accessibility ID = {0}''',
    classKey: io.appium.java_client.AppiumDriver, key: io.appium.java_client.AppiumDriver.findElementByAccessibilityId}
  - {name: findElementsByAccessibilityId, testDoc: 'all elements for ''accessibility
      ID = {0}''', classKey: io.appium.java_client.AppiumDriver, key: io.appium.java_client.AppiumDriver.findElementsByAccessibilityId}
  - {name: hideKeyboard, testDoc: hide the keyboard, classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.hideKeyboard}
  - {name: lockScreen, testDoc: 'lock the screen for {0} seconds', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.lockScreen}
  - {name: pinch, testDoc: 'zoom out (x:{0}, y:{1}) by pinch-in', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.pinch-int,int'}
  - {name: pinch, testDoc: 'zoom out {0} by pinch-in', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.pinch-org.openqa.selenium.WebElement}
  - {name: swipe, testDoc: 'swipe from (x:{0}, y:{1}) to (x:{2}, y:{3}) in {4} milliseconds',
    classKey: io.appium.java_client.AppiumDriver, key: io.appium.java_client.AppiumDriver.swipe}
  - {name: tap, testDoc: 'tap (x:{1}, y:{2}) with　{0} fingers for {3} milliseconds',
    classKey: io.appium.java_client.AppiumDriver, key: 'io.appium.java_client.AppiumDriver.tap-int,int,int,int'}
  - {name: tap, testDoc: 'tap {1} with {0} fingers for {2} milliseconds', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.tap-int,org.openqa.selenium.WebElement,int'}
  - {name: zoom, testDoc: 'zoom in (x:{0}, y:{1}) by pinch-out', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.zoom-int,int'}
  - {name: zoom, testDoc: 'zoom in {0} by pinch-out', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.zoom-org.openqa.selenium.WebElement}
  - {name: findElementByIosUIAutomation, testDoc: 'element ''iOS UIAutomation = {0}''',
    classKey: io.appium.java_client.ios.IOSDriver, key: io.appium.java_client.ios.IOSDriver.findElementByIosUIAutomation}
  - {name: findElementsByIosUIAutomation, testDoc: 'all elements for ''iOS UIAutomation
      = {0}''', classKey: io.appium.java_client.ios.IOSDriver, key: io.appium.java_client.ios.IOSDriver.findElementsByIosUIAutomation}
  - {name: shake, testDoc: shake the device, classKey: io.appium.java_client.ios.IOSDriver,
    key: io.appium.java_client.ios.IOSDriver.shake}
  - {name: AccessibilityId, testDoc: 'accessibility ID = {0}', capture: none, classKey: io.appium.java_client.MobileBy,
    key: io.appium.java_client.MobileBy.AccessibilityId}
  - {name: AndroidUIAutomator, testDoc: 'Android UiAutomator = {0}', capture: none,
    classKey: io.appium.java_client.MobileBy, key: io.appium.java_client.MobileBy.AndroidUIAutomator}
  - {name: IosUIAutomation, testDoc: 'iOS UIAutomation = {0}', capture: none, classKey: io.appium.java_client.MobileBy,
    key: io.appium.java_client.MobileBy.IosUIAutomation}
  - {name: with, testDoc: 'set text ''{0}'' to {this}', classKey: org.fluentlenium.core.action.FillConstructor,
    key: org.fluentlenium.core.action.FillConstructor.with}
  - {name: clear, testDoc: 'clear the text of {this}', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.clear}
  - {name: click, testDoc: 'click {this}', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.click}
  - {name: getAttribute, testDoc: 'the ''{0}'' attribute of {this}', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.getAttribute}
  - {name: getText, testDoc: 'the text of {this}', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.getText}
  - {name: getValue, testDoc: 'the value of {this}', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.getValue}
  - {name: clear, testDoc: 'clear the text of {this}', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.clear}
  - {name: click, testDoc: 'click {this}', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.click}
  - {name: getAttribute, testDoc: 'the ''{0}'' attribute of {this}', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.getAttribute}
  - {name: getText, testDoc: 'the text of {this}', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.getText}
  - {name: getValue, testDoc: 'the value of {this}', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.getValue}
  - {name: isDisplayed, testDoc: 'is {this} displayed', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.isDisplayed}
  - {name: isEnabled, testDoc: 'is {this} enabled', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.isEnabled}
  - {name: isSelected, testDoc: 'is {this} selected', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.isSelected}
  - {name: withClass, testDoc: 'class = {0}', capture: none, classKey: org.fluentlenium.core.filter.FilterConstructor,
    key: org.fluentlenium.core.filter.FilterConstructor.withClass-String}
  - {name: withName, testDoc: 'name = {0}', capture: none, classKey: org.fluentlenium.core.filter.FilterConstructor,
    key: org.fluentlenium.core.filter.FilterConstructor.withName-String}
  - {name: withText, testDoc: 'text = {0}', capture: none, classKey: org.fluentlenium.core.filter.FilterConstructor,
    key: org.fluentlenium.core.filter.FilterConstructor.withText-String}
  - {name: $, testDoc: 'element ''{0}{if:1} ({1}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: 'org.fluentlenium.core.Fluent.$-String,org.fluentlenium.core.filter.Filter[]'}
  - {name: $, testDoc: '''{1}''th element of ''{0}{if:2} ({2}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 2, key: 'org.fluentlenium.core.Fluent.$-String,java.lang.Integer,org.fluentlenium.core.filter.Filter[]'}
  - {name: clear, testDoc: 'clear the text of element ''{0}{if:1} ({1}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.clear}
  - {name: click, testDoc: 'click element ''{0}{if:1} ({1}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.click}
  - {name: executeScript, testDoc: 'execute JavaScript ''{0}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.executeScript}
  - {name: fill, testDoc: 'element ''{0}{if:1} ({1}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.fill}
  - {name: find, testDoc: 'element ''{0}{if:1} ({1}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: 'org.fluentlenium.core.Fluent.find-String,org.fluentlenium.core.filter.Filter[]'}
  - {name: find, testDoc: '''{1}''th element of ''{0}{if:2} ({2}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 2, key: 'org.fluentlenium.core.Fluent.find-String,java.lang.Integer,org.fluentlenium.core.filter.Filter[]'}
  - {name: findFirst, testDoc: 'first element of ''{0}{if:1} ({1}){end}''', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: 'org.fluentlenium.core.Fluent.findFirst-String,org.fluentlenium.core.filter.Filter[]'}
  - {name: goTo, testDoc: 'go to the page ''{0}''', classKey: org.fluentlenium.core.Fluent,
    key: org.fluentlenium.core.Fluent.goTo-String}
  - {name: goTo, testDoc: 'go to the page ''{0}''', classKey: org.fluentlenium.core.Fluent,
    key: org.fluentlenium.core.Fluent.goTo-org.fluentlenium.core.FluentPage}
  - {name: takeScreenShot, testDoc: 'save screen capture to ''{0}''', classKey: org.fluentlenium.core.Fluent,
    key: org.fluentlenium.core.Fluent.takeScreenShot-String}
  - {name: title, testDoc: 'page title of {this}', classKey: org.fluentlenium.core.Fluent,
    key: org.fluentlenium.core.Fluent.title}
  - {name: go, testDoc: 'go to the page ''{this}''', classKey: org.fluentlenium.core.FluentPage,
    key: org.fluentlenium.core.FluentPage.go}
  - {name: isAt, testDoc: 'check that the current page is ''{this}''', classKey: org.fluentlenium.core.FluentPage,
    key: org.fluentlenium.core.FluentPage.isAt}
subClassTable:
  classes:
  - {key: javaSystem, qname: javaSystem}
  - {key: junit.framework.Assert, qname: junit.framework.Assert}
  - {key: org.hamcrest.core.Is, qname: org.hamcrest.core.Is}
  - {key: org.hamcrest.core.IsNot, qname: org.hamcrest.core.IsNot}
  - {key: org.hamcrest.CoreMatchers, qname: org.hamcrest.CoreMatchers}
  - {key: org.junit.Assert, qname: org.junit.Assert}
  - {key: org.hamcrest.MatcherAssert, qname: org.hamcrest.MatcherAssert}
  - {key: org.testng.Assert, qname: org.testng.Assert}
  - {key: java.util.List, qname: java.util.List}
  - {key: org.openqa.selenium.By, qname: org.openqa.selenium.By}
  - {key: org.openqa.selenium.remote.RemoteWebDriver, qname: org.openqa.selenium.remote.RemoteWebDriver}
  - {key: org.openqa.selenium.Rotatable, qname: org.openqa.selenium.Rotatable}
  - {key: org.openqa.selenium.support.ui.Select, qname: org.openqa.selenium.support.ui.Select}
  - {key: org.openqa.selenium.WebDriver, qname: org.openqa.selenium.WebDriver}
  - {key: org.openqa.selenium.WebDriver$Navigation, qname: org.openqa.selenium.WebDriver$Navigation}
  - {key: org.openqa.selenium.WebElement, qname: org.openqa.selenium.WebElement}
  - {key: io.appium.java_client.android.AndroidDriver, qname: io.appium.java_client.android.AndroidDriver}
  - {key: io.appium.java_client.AppiumDriver, qname: io.appium.java_client.AppiumDriver}
  - {key: io.appium.java_client.ios.IOSDriver, qname: io.appium.java_client.ios.IOSDriver}
  - {key: io.appium.java_client.MobileBy, qname: io.appium.java_client.MobileBy}
  - {key: org.fluentlenium.core.action.FillConstructor, qname: org.fluentlenium.core.action.FillConstructor}
  - {key: org.fluentlenium.core.domain.FluentList, qname: org.fluentlenium.core.domain.FluentList}
  - {key: org.fluentlenium.core.domain.FluentWebElement, qname: org.fluentlenium.core.domain.FluentWebElement}
  - {key: org.fluentlenium.core.filter.FilterConstructor, qname: org.fluentlenium.core.filter.FilterConstructor}
  - {key: org.fluentlenium.core.Fluent, qname: org.fluentlenium.core.Fluent}
  - {key: org.fluentlenium.core.FluentPage, qname: org.fluentlenium.core.FluentPage}

*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];