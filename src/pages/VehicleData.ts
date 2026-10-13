import { Page, Locator } from "@playwright/test";
import { E2EFlow } from "../test-data/vehicledata";

export class VehicleDataPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async EnterVehicleData(data:E2EFlow){
        console.log("make Value:", data.make);
        console.log(await this.page.locator('#make').isVisible());

        await this.page.locator('#make').selectOption(data.make);
        await this.page.locator('#engineperformance').fill(data.enginePerformance);
        await this.page.locator('#dateofmanufacture').fill(data.dateOfManufacture);
        await this.page.locator('#numberofseats').selectOption(data.numberOfSeats);
        await this.page.locator('#fuel').selectOption(data.fuelType);
        await this.page.locator('[name="List Price"]').fill(data.listPrice);
        await this.page.locator('[name="License Plate Number"]').fill(data.licensePlateNumber);
        await this.page.locator('[name="Annual Mileage"]').fill(data.annualMileage); 
    }
    async clickNext(){
    await this.page.locator('#nextenterinsurantdata').click();
    }
}