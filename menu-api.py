import pandas
import requests
import json
import re
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
parser = BeautifulSoup(html, "html.parser")

# with open("output.txt", "w", encoding="utf-8") as f:
#     f.write(str(html))
    
item_re = re.compile(r'<div class="shortmenurecipes"><span.*?>(.*?)</span></div>',re.S)
category_re = re.compile(r'<div class="shortmenucats"><span.*?>-- (.*?) --</span></div>',re.S)
meal_time_re = re.compile(r'<div class="shortmenumeals">(.*?)</div>',re.S)

# menu_items = [match.replace("&nbsp;", " ").strip() for match in item_re.findall(html)]
# category_items = [match.strip() for match in category_re.findall(html)]

meal_time = None
category = None
menu_items = []
with open("menu-items.json", "w", encoding="utf-8") as f:
    for row in parser.find_all('div'):
        row_str = str(row)
        item_match = item_re.search(row_str)
        cat_match = category_re.search(row_str)
        meal_match = meal_time_re.search(row_str)
        if meal_match:
            meal_time = str(meal_match.groups()[0].strip())
            # f.write(str(meal_match.groups()[0].strip()) + "\n")
        if cat_match:
            category = str(cat_match.groups()[0].strip())
            # f.write(str(cat_match.groups()[0].strip()) + "\n")
        if item_match:
            item = {
                "name": str(item_match.groups()[0].strip()),
                "meal_time": meal_time,
                "category": category,
            }
            menu_items.append(item)
            # f.write(str(item_match.groups()[0].strip()) + "\n")
    json.dump(menu_items, f, ensure_ascii=False, indent=4)
        
# Close browser
driver.quit()
