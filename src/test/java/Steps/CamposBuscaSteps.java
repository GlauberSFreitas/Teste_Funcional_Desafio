package Steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CamposBuscaSteps {
	private WebDriver driver;
	
	@Dado("^que estou no Firefox$")
	public void queEstouNoFirefox() throws Throwable {
		FirefoxProfile profile = new FirefoxProfile();
		System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir") +  "\\src\\main\\resources\\geckodriver.exe");
		
		profile.setPreference("browser.download.dir", "C:\\Users\\Residencia\\Downloads");  // folder
	    profile.setPreference("browser.helperApps.neverAsk.saveToDisk", "text/csv,application/x-msexcel,application/excel,"
	    		+ "          application/x-excel,application/vnd.ms-excel,image/png,image/jpeg,"
	    		+ "           text/html,text/plain,application/msword,application/xml,application/zip,application/x-bzip,application/x-bzip2,application/x-7z-compressed, application/x-zip-compressed,application/x-zip,application/x-rar-compressed, multipart/x-zip,application/pdf,application/octet-stream,text/css");  // MIME type
	    profile.setPreference("browser.helperApps.neverAsk.openFile",
				"text/csv,application/x-msexcel,application/excel,application/x-excel,application/vnd.ms-excel,application/zip,application/x-bzip,image/png,image/jpeg,text/html,text/plain,application/msword,application/xml");
	    profile.setPreference("pdfjs.disabled", true);  // disable the built-in viewer
	    profile.setPreference("browser.download.folderList", 2);
	    profile.setPreference("browser.download.manager.showWhenStarting",false);
	    profile.setPreference("browser.download.panel.shown", false);
	    profile.setPreference("browser.helperApps.alwaysAsk.force", false);
	    profile.setPreference("plugin.disable_full_page_plugin_for_types", "application/zip");
	    profile.setPreference("browser.download.manager.useWindow", false);
		profile.setPreference("browser.download.manager.showAlertOnComplete", false);
		profile.setPreference("browser.download.manager.closeWhenDone", false);
		profile.setPreference("browser.download.manager.alertOnEXEOpen", false);
		profile.setPreference("browser.download.manager.focusWhenStarting", false);
		
		 DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		    capabilities.setCapability(FirefoxDriver.PROFILE, profile);
		    capabilities.setCapability(CapabilityType.ELEMENT_SCROLL_BEHAVIOR, 1);
		    FirefoxOptions firefoxOptions = new FirefoxOptions();
		    firefoxOptions.setProfile(profile);
		    firefoxOptions.setCapability("marionette", true);
			this.driver = new FirefoxDriver(firefoxOptions);
	}

	@Dado("^que estou na tela principal$")
	public void queEstouNaTelaPrincipal() throws Throwable {
		this.driver.get("http://localhost:8080/index");
	}

	@Dado("^que busco por \"([^\"]*)\" no campo tipo$")
	public void queBuscoPorNoCampoTipo(String arg1) throws Throwable {
	    driver.findElement(By.id("tipoinputid")).sendKeys(arg1);
	}

	@Quando("^cliquei no botão buscartipo$")
	public void cliqueiNoBotãoBuscartipo() throws Throwable {
	    driver.findElement(By.id("btntipoid")).submit();
	}

	@Entao("^busca realizada com sucesso$")
	public void buscaRealizadaComSucesso() throws Throwable {
		Thread.sleep(3000); 
		String res = driver.findElement(By.id("tabelaId_info")).getText();
		Assert.assertNotEquals("Nenhum registro disponível", res);
	}

	@Quando("^cliquei no botão buscartodos$")
	public void cliqueiNoBotãoBuscartodos() throws Throwable {
		driver.findElement(By.id("btntodosid")).submit();
	}

	@Dado("^que busco por \"([^\"]*)\" no campo uf$")
	public void queBuscoPorNoCampoUf(String arg1) throws Throwable {
		driver.findElement(By.id("ufinputid")).sendKeys(arg1);
	}
	
	@Entao("^nenhum registro encontrado$")
	public void nenhumRegistroEncontrado() throws Throwable {
		Thread.sleep(3000); 
		String res = driver.findElement(By.id("tabelaId_info")).getText();
		Assert.assertEquals("Nenhum registro disponível", res);
	}

	@Quando("^cliquei no botao buscaruf$")
	public void cliqueiNoBotaoBuscaruf() throws Throwable { 
		driver.findElement(By.id("btnufid")).submit();
	}


}
