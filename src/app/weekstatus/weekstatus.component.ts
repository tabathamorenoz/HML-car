import { Component, OnInit, Input } from '@angular/core';


/**
 * Displays the week days and higlights the passed ones.
 *
 * @export WeekStatusComponent
 * @class WeekStatusComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-weekstatus',
  templateUrl: './weekstatus.component.html',
  styleUrls: ['./weekstatus.component.scss']
})
export class WeekStatusComponent implements OnInit {

  /**
   * List of week days which are valid in string format.
   *
   * @type {string}
   * @memberof WeekStatusComponent
   */
  @Input()
  data: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Returns the css classes for week day.
   *
   * @param {string} weekday
   * @returns css classes
   * @memberof WeekStatusComponent
   */
  getClassFor(weekday) {
    if (weekday && this.data && this.data.indexOf(weekday) > -1) {
      return 'badge badge-success';
    }
    return 'badge';
  }

}
