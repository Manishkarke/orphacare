import customFetch from "./axios";

async function getReportData() {
    try {
        const response = await customFetch.get('report/getAllMissingReports')
    } catch(error) {
        
    }
}