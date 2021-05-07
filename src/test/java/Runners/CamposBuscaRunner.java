package Runners;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/Features",
		glue = "Steps",
		tags = {"~@ignore"},
		plugin = {"pretty", "html:target/report-html"},
		monochrome = false,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class CamposBuscaRunner {

}
