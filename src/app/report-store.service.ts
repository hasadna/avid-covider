import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportStoreService {

  storage: any;
  reports: any[];

  constructor() {
    try {
      this.storage = window.localStorage;
    } catch (e) {
      console.log('no local storage');
    }
    this.readReports();
  }

  getItem(key, defaultValue) {
    if (this.storage) {
      try {
        const ret = JSON.parse(this.storage.getItem(key));
        return ret || defaultValue;
      } catch (e) {
        console.log('Error when getting item', key, defaultValue, e);
      }
    }
    return defaultValue;
  }

  setItem(key, value) {
    try {
      if (this.storage) {
        this.storage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      console.log('Error when setting item', key, value, e);
    }
  }

  readReports() {
    this.reports = this.getItem('reports', []);
  }

  addReport(report) {
    const now = (new Date()).toISOString();
    this.reports.push([now, report]);
    this.setItem('reports', this.reports);
  }

}
