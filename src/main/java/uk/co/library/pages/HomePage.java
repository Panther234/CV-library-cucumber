package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "gdpr-consent-notice")
    WebElement getInToIFrame;

    @CacheLookup
    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptAllBtn;

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement addJobTitle;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement jobLocation;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement jobDistance;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement searchOptions;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement selectMinSalary;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement selectMaxSalary;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryType;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement findJobType;

    @CacheLookup
    @FindBy(id = "hp-search-btn")
    WebElement findJobs;

    public void acceptIFrameAlert() throws InterruptedException {
        Thread.sleep(2000);
        driver.switchTo().frame(getInToIFrame);
        clickOnElement(acceptAllBtn);
        driver.switchTo().defaultContent();
        log.info("Accepting cookies: " + acceptAllBtn.toString());
    }

    public void enterJobTitle(String jobTitle) {
        sendTextToElement(addJobTitle, jobTitle);
        log.info("Send text to JobTitle : "+ jobTitle + addJobTitle.toString());
    }

    public void enterJobLocation(String location) {
        sendTextToElement(jobLocation, location);
        log.info("Send text to JobLocation : "+ location + jobLocation.toString());
    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(jobDistance, distance);
        log.info("Select Distance : "+  distance + jobDistance.toString());
    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(searchOptions);
        log.info("Clicking on more search options: " + searchOptions.toString());
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(selectMinSalary, minSalary);
        log.info("Send text to MinSalary : " + minSalary + selectMinSalary.toString());
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(selectMaxSalary, maxSalary);
        log.info("Send text to MaxSalary : " + maxSalary + selectMaxSalary.toString());
    }

    public void selectSalaryType(String sType) {
        selectByVisibleTextFromDropDown(salaryType, sType);
        log.info("Selecting salary type from dropdown: " + sType + salaryType.toString());
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(findJobType, jobType);
        log.info("Selecting job type from dropdown: " + jobType  + findJobType.toString());
    }

    public void clickOnFindJobsButton() throws InterruptedException {
        clickOnElement(findJobs);
        log.info("Clicking on find job button: " + findJobs.toString());
    }

}
