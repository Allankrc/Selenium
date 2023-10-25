from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from time import sleep
servico = Service(ChromeDriverManager().install())
navegador = webdriver.Chrome(service=servico)

sleep(5)
navegador.get('')


def test_eight_components():
    driver = webdriver.Chrome()

    driver.get("https://www.selenium.dev/selenium/web/web-form.html")

    title = driver.title
    assert title == "Web form"

    driver.implicitly_wait(5.5)

    text_box = driver.find_element(by=By.NAME, value="my-text")
    submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

    text_box.send_keys("Selenium")
    submit_button.click()
    
    message = driver.find_element(by=By.ID, value="message")
    value = message.text
    assert value == "Received!"
  #  driver.quit()


#test_eight_components()