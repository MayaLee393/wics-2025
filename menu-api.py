import time
import json
import re
from bs4 import BeautifulSoup
from selenium import webdriver

def main():
    

    # Set up WebDriver
    driver = webdriver.Chrome()

    dining_halls = ['J2', 'Kins', 'JCL']
    with open("menu-items.json", "w", encoding="utf-8") as f:
        for dining in dining_halls:
            # Open the URL
            driver.get("https://hf-foodpro.austin.utexas.edu/foodpro/shortmenu.aspx?sName=University+Housing+and+Dining&locationNum=12&locationName="+dining+"+Dining&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=2%2f8%2f2025")
            to_json(dining, driver, f)
            
    # Close browser
    driver.quit()


def to_json(dining_hall, driver, f):
    html = driver.page_source
    parser = BeautifulSoup(html, "html.parser")
    
    item_re = re.compile(r'<div class="shortmenurecipes"><span.*?>(.*?)</span></div>',re.S)
    category_re = re.compile(r'<div class="shortmenucats"><span.*?>-- (.*?) --</span></div>',re.S)
    meal_time_re = re.compile(r'<div class="shortmenumeals">(.*?)</div>',re.S)
    icon_re = re.compile(r'<img src="./This Week.*?s Menus_files/.*?" alt="(.*?)" width="16" height="16" align="bottom">')

    # menu_items = [match.replace("&nbsp;", " ").strip() for match in item_re.findall(html)]
    # category_items = [match.strip() for match in category_re.findall(html)]

    meal_time = None
    category = None
    menu_items = []
    for row in parser.find_all('div'):
        row_str = str(row)
        item_match = item_re.search(row_str)
        cat_match = category_re.search(row_str)
        meal_match = meal_time_re.search(row_str)
        icon_match = icon_re.search(row_str)
        if meal_match:
            meal_time = str(meal_match.groups()[0].strip())
        if cat_match:
            category = str(cat_match.groups()[0].strip())
        if item_match:
            item = {
                "name": str(item_match.groups()[0].strip()),
                "dining_hall": dining_hall,
                "meal_time": meal_time,
                "category": category,
            }
            menu_items.append(item)
            # f.write(str(row) + "\n\n")
        if icon_match:
            # f.write(str(icon_match.groups()[0].strip()) + "\n")
            pass
        else:
            # f.write("nothing" + "\n")
            pass
    json.dump(menu_items, f, ensure_ascii=False, indent=4)
    return

if __name__=="__main__":
    main()