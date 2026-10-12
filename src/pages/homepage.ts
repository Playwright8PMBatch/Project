import { Page,Locator, expect } from "@playwright/test";


export class HomePage
{
    readonly page:Page;
    readonly automobile:Locator;
    readonly truck:Locator;
    readonly motorcycle:Locator;
    readonly camper:Locator;


    constructor(page:Page){
        this.page = page;
        this.automobile=page.getByRole('link',{name: 'Automobile',exact: true });
        this.truck=page.getByRole('link',{name:'Truck',exact: true });
        this.motorcycle = page.getByRole('link', {name:'Motorcycle',exact: true });
        this.camper = page.getByRole('link', {name:'Camper',exact: true });
    }


async goto(){
    await this.page.goto('https://sampleapp.tricentis.com/101/index.php');
}


async verifyauto(){
    await expect(this.automobile).toBeVisible();
    await expect(this.automobile).toHaveText('Automobile');
}


async auto(){
    await this.automobile.click();
}
async Truc(){
    await this.truck.click();
}


async motor(){
    await this.motorcycle.click();
}


async camp(){
    await this.camper.click();
}
}
