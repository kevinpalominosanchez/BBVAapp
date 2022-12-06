import { Component } from "@angular/core";
import { SignatoriesService } from "../../services/signatories.service";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	constructor(private signattoriesService: SignatoriesService) {}

	getData() {
		return this.signattoriesService.getDataSOAP();
	}
}
