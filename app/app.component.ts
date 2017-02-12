import {Component} from "@angular/core";

@Component({
	selector: 'angularz-app',
	templateUrl: './templates/angularz-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}