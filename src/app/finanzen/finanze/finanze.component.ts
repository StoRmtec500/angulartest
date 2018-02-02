import { Component, OnInit } from '@angular/core';
import { FinanzeService } from './finanze.service';
import { Account} from '../../shared/models/index';

@Component({
  selector: 'app-finanze',
  templateUrl: './finanze.component.html',
  styleUrls: ['./finanze.component.css']
})
export class FinanzeComponent implements OnInit {

  account: Account[];

  constructor(private ac: FinanzeService) { }

  ngOnInit() {
    this.ac.getAccounts().subscribe(data => this.account = data);
  }

}
