import fetch from "node-fetch";
import jsdom from "jsdom";
import fs from "node:fs";

export default class geizhals {
  static async getResultsBySearchString(searchString, top = 30) {
    const listViewItems = [];
    const items = [];
    do {
      const response = await fetch("https://geizhals.at/?fs=" + searchString);
      const text = await response.text();
  
      const doc = new jsdom.JSDOM(text);
      //fs.writeFileSync("./test.html", text);

      let items = Array.from(doc.window.document.getElementsByClassName("listview__item"));

      const diff = listViewItems.length + items.length - top;
      if (diff) {
        items = items.slice(0, 30 - diff);
      }
      listViewItems.push(...items);
    } while(listViewItems.length % 30 == 0 && top >= listViewItems.length);

    listViewItems.forEach(listViewItem => {
      const nameLink = listViewItem.getElementsByClassName("listview__name-link").item(0);
      const price = listViewItem.getElementsByClassName("price").item(0)?.innerHTML;
      const rating = listViewItem.getElementsByClassName("stars-rating").item(0)?.children.item(0).innerHTML;
      let ratingAmount = listViewItem.getElementsByClassName("stars-rating-label").item(0);
      ratingAmount = ratingAmount?.innerHTML.substring(ratingAmount?.innerHTML.indexOf("/&nbsp;") + 7).replace(" Bewertungen", "");
      const offerAmount = +listViewItem.getElementsByClassName("listview__offercount-link").item(0)?.innerHTML.replace(" Angebote", "");
      const specs = []; 
      Array.from(listViewItem.getElementsByClassName("specs-grid__item")).forEach(specItem => {
        specs.push({
          title: specItem.children.item(0).innerHTML,
          descrption: specItem.children.item(1).innerHTML.replaceAll("\n",""),
        });
      });

      items.push({
        "name": nameLink.innerHTML.replaceAll("\n", ""),
        "price": price,
        "rating": rating,
        "ratingAmount": +ratingAmount?.replaceAll("\n", ""),
        "offerAmount": offerAmount,
        "link": "https://geizhals.at/" + nameLink.href,
        "specs": specs
      })
    });

    //fs.writeFileSync("./test.json", JSON.stringify(items));
    return items;
  }
}
