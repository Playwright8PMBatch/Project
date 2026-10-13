import {expect} from '@playwright/test'
import { test1 } from '../src/fixtures/vehiclepagefixture'
import { readExcelData } from '../src/utils/dataReader';
import * as XLSX from 'xlsx'
import { env } from '../src/config/env';
import path from 'path';
import {E2EFlow} from '../src/test-data/vehicledata';

const XLPath = XLSX.readFile('./src/test-data/automobile.xlsx')
const sheet =XLPath.Sheets['TestData'];

const data:E2EFlow[] = XLSX.utils.sheet_to_json<E2EFlow>(sheet);

test1("Apply AUtomobile Insurance", async({page, homePage, vehicleData})=>{
    await homePage.goto();  //open the url
    await homePage.auto(); //click on automobile
    await homePage.verifyauto(); //verify automobile page

    // enter vehicle Data:

    console.log(data);
    await page.waitForTimeout(5000);

    for(const i of data){
    await vehicleData.EnterVehicleData(i);
    // await vehicleData.clickNext();

    // Enter IsnurantData
    
    // ENter Product Data
    // Select Price
    // Send Quote
    }

    

    await page.waitForTimeout(5000);
})