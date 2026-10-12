import {test as base} from '@playwright/test'
import {HomePage} from '../pages/homepage'
import { VehicleDataPage } from '../pages/VehicleData';


export const test1 = base.extend
                    // <{}> Information <not run in runtime> 
                        <{homePage: HomePage,
                          vehicleData: VehicleDataPage // homePage = fixturename, HomePage Class
                          }>
                    //   fixure implementation
                        ({
                            // create a object for Home Page Class
                            homePage: async({page}, use)=>{
                                await use(new HomePage(page));
                            },

                            vehicleData: async({page}, use)=>{
                                await use(new VehicleDataPage(page))
                            }

                        });