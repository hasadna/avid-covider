import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportStoreService {

  storage: any;
  reports: any[];
  device: any;

  constructor() {
    try {
      this.storage = window.localStorage;
    } catch (e) {
      console.log('no local storage');
    }
    this.readDevice();
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
    this.device.numPreviousReports = this.reports.length;
    if (this.reports.length > 0) {
      this.device.dateFirstReport = this.reports[0][0];
    }
  }

  readDevice() {
    this.device = this.getItem('device', {});
  }

  saveDevice(device) {
    const result = {};
    for (const [key, value] of Object.entries(device)) {
      if (key.indexOf('event_') !== 0) {
        result[key] = value;
      }
    }
    this.setItem('device', result);
  }

  setEvent(event) {
    this.device['event_'  + event] = true;
  }

  setEventValue(event, value) {
    this.device['event_'  + event] = value;
  }

  addReport(report) {
    const now = (new Date()).toISOString();
    this.reports.push([now, report]);
    this.setItem('reports', this.reports);
  }

}
