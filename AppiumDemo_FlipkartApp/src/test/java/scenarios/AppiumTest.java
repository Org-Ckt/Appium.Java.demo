package scenarios;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class AppiumTest  extends AndroidSetup {


    By userId = By.id("mobileNo");
    By password = By.id("et_password");
    By login_Button = By.id("btn_mlogin");
    By existingUser_login = By.id("btn_mlogin");
    By facebook_login = By.id("btn_login_facebook");
    By login_details=By.className("android.widget.EditText");
    By login_facebook=By.className("android.widget.Button");
    private Object element;


    @Before
    public void setUp() throws Exception {

        prepareAndroidForAppium();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }

    @Test
    public void invalidLogin() throws InterruptedException {

        waitForVisibilityOf(existingUser_login);
        driver.findElement(existingUser_login).click();
        driver.findElement(userId).clear();
        driver.findElement(userId).sendKeys("someone@test.com");
        driver.findElement(password).sendKeys("test12345");
        driver.findElement(login_Button).click();
        Assert.assertTrue(driver.findElement(By.id("pageLevelError")).getText().equalsIgnoreCase("Account does not exist"));
        driver.findElement(facebook_login).click();
        Thread.sleep(10000);
        List<WebElement> element = driver.findElements(login_details);
        element.get(0).sendKeys("testUser@email.com");
        element.get(1).sendKeys("test123");
        driver.findElement(login_facebook).click();

    }

    protected void waitForVisibilityOf(By locator) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

}

