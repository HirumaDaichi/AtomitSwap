/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



/**
 * App Component
 * Top Level Component
 */

declare var $;

@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public name = 'Angular Starter';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://twitter.com/gdi2290';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;

  public btc = 10.0;
  public eth = 0.0;
  public address = 'fashduifhaslidufhasufhuasbhjbiu32hry2398hrwiurbesblf';
  public before = 'BTC';
  public after = 'ETH';
  public rate;
  public before_amount = 0;
  public after_amount = 0;
  public server_url = 'http://';
  public json = {};
  public secret;
  public histories = [];
  public date;

  constructor(
    public appState: AppState,
    private http: HttpClient
  ) {}

  

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

    this.date = new Date();
    this.histories = [
      {
        address: this.address,
        currency1: 'BTC',
        currency2: 'ETH',
        amount1: 0.4,
        amount2: 25.4,
        refund: 'fasgf8934p8h3894hfiubajnj1p029jrifohdhigy349p8fhiu',
        status: 'Success',
        timestump: this.date,
      }, {
        address: this.address,
        currency1: 'BTC',
        currency2: 'ETH',
        amount1: 0.05,
        amount2: 1.4,
        refund: '7ry3t4hif8934p8h3894hfiubajnj1p029jrifohdhigy349p8fhiu',
        status: 'Offering',
        timestump: this.date,
      }
    ];

    
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };

    this.rate = {
      BTC: {
        ETH: 944205.0 / 64280,
        BTC: 1,
      },
      ETH: {
        BTC: 1 / 944205.0 * 64280,
        ETH: 1,
      }
    };
    // let coins = [
    //   [1,  'BTC',    'btc_jpy'],
    //   [2,  'ETH',    'eth_jpy'],
    // ];

    // // let url = 'http://bootstrap3-guide.com/base/prepare.html';
    // let url = 'https://api.bitflyer.jp/v1/getticker?product_code=' + coins[0][2];

    // this.http.get(url).subscribe((data) => {
    //   console.log(data);
    // });

    // this.http.post(, { product_code: coins[0][2] })
    // // .pipe(
    // //   catchError(this.handleError('addcoin', coins[0][2]))
    // // )
    // .subscribe((data) => {
    //   console.log(data);
    // });

    // $.ajax('https://api.bitflyer.jp/v1/getticker?product_code='+coins[1][2], {
    //   timeout : 1000, // 1000 ms
    //   datatype: 'html'
    // }).then(function(data) {
    //   console.log(data);
    // }, function(jqXHR, textStatus) {
    //   console.log(jqXHR, textStatus);
    // });

    // $http({
    //   url: 'https://api.bitflyer.jp/v1/getticker?product_code='+coins[1][2],
    //   dataType: "json",
    //   method: "POST",
    //   data: JSON.stringify({"foo":"bar"}),
    //   headers: {
    //       "Content-Type": "application/json; charset=utf-8"
    //   }
    // }).success(function(response){
    //     $scope.response = response;
    // }).error(function(error){
    //     $scope.error = error;
    // });
  }

  public ngDoCheck() {
    // this.before_amount = this.after_amount * this.rate[this.after][this.before];
    this.after_amount = Math.floor(this.before_amount * this.rate[this.before][this.after] * Math.pow(10, 2)) / Math.pow(10, 2);
    console.log(this.after_amount);
  }

  public submit(f) {
    this.http.post(this.server_url, this.json)
    .subscribe((data) => {
      console.log(data);
      // refund addressに表示
    });
  }
}

/**
 * Please review the https://github.com/AngularClass/angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
