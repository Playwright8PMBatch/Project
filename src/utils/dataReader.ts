import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export function readJsonData(filepath:string){
    const data = fs.readFileSync(filepath, 'utf-8');

    return JSON.parse(data);
}

export function readExcelData(filepath:string){
    const workbook = XLSX.readFile(filepath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    return XLSX.utils.sheet_to_json(sheet);
}

export function readCSVData(filepath:string){
    const data = fs.readFileSync(filepath, 'utf-8');

    return parse(data, {
        columns:true,
        skip_empty_lines:true
    });
}


