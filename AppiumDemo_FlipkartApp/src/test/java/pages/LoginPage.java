package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.sahagin.runlib.external.PageDoc;
import org.sahagin.runlib.external.TestDoc;
//import org.testng.Assert;

import java.util.List;


@PageDoc("Contact page")
public class LoginPage extends BasePage {
    By userId = By.id("mobileNo");
    By password = By.id("et_password");
    By login_Button = By.id("btn_mlogin");
    By existingUser_login = By.id("btn_mlogin");
    By facebook_login = By.id("btn_login_facebook");
    By login_details=By.className("android.widget.EditText");
    By login_facebook=By.className("android.widget.Button");
    private Object element;



    public LoginPage(WebDriver driver) {
        super(driver);
    }


    public LoginPage invalidLogin() {
        waitForVisibilityOf(existingUser_login);
        driver.findElement(existingUser_login).click();
        driver.findElement(userId).clear();
        driver.findElement(userId).sendKeys("someone@test.com");
        driver.findElement(password).sendKeys("test12345");
        driver.findElement(login_Button).click();
        Assert.assertTrue(driver.findElement(By.id("pageLevelError")).getText().equalsIgnoreCase("Account does not exist"));
        return new LoginPage(driver);
    }


    public LoginPage loginWithFacebook() throws InterruptedException {
        driver.findElement(facebook_login).click();
        Thread.sleep(10000);
        List<WebElement> element = driver.findElements(login_details);
        element.get(0).sendKeys("testUser@email.com");
        element.get(1).sendKeys("test123");
        driver.findElement(login_facebook).click();
        return new LoginPage(driver);
    }
}
