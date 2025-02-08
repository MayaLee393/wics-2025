import pandas
import requests
from bs4 import BeautifulSoup
from selenium import webdriver

# Set up WebDriver
driver = webdriver.Chrome()

# Open the URL
driver.get("https://hf-foodpro.austin.utexas.edu/foodpro/shortmenu.aspx?sName=University+Housing+and+Dining&locationNum=12&locationName=J2+Dining&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=2%2f8%2f2025")

# Get page source
html = driver.page_source

# print(html)


# Parse HTML
parsed = BeautifulSoup(html, "html.parser")

# # Find all <div>, <span>, or <table> elements that may contain menu data
# for tag in ["div", "span", "table"]:
#     elements = parsed.find_all(tag)
#     print(f"Found {len(elements)} {tag} elements.")
#     for el in elements[:5]:  # Print first 5 elements to check
#         print(el.text.strip())

import re
rex = re.compile(r'<span.*?>(.*?)</span>',re.S|re.M)
...
data = """ <div class="shortmenurecipes"><span style="color: #000000">Donut Holes&nbsp;</span></div>"""

span_items = [match.replace("&nbsp;", " ").strip() for match in rex.findall(html)]
print(span_items)

with open("output.txt", "w", encoding="utf-8") as f:
    for item in span_items:
        f.write(item + "\n")

# Close browser
driver.quit()
