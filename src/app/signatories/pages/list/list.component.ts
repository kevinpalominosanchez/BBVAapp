import { Component, ViewChild, ElementRef, ContentChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SignatoriesService } from "../../services/signatories.service";
import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	id = "";
	name = "";

	constructor(
		private signattoriesService: SignatoriesService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(({ id }) => {
			if (id == 1) {
				this.id = id;
				this.name = "Alfredo Jimenez Rios";
			}

			if (id == 2) {
				this.id = id;
				this.name = "Rosalia Magdaleno Garcia";
			}

			if (id == 3) {
				this.id = id;
				this.name = "Maritea Palacios Sancho";
			}
		});
	}

	@ViewChild("pdfDoc") pdfDoc!: ElementRef;

	public downloadAsPdf() {
		const doc = new jsPDF();

		const pdfDoc = this.pdfDoc.nativeElement;

		var html = htmlToPdfmake(pdfDoc.innerHTML);

		var docDefinition = {
			content: html,
			styles: {
				center: {
					color: "red",
				},
			},
		};

		pdfMake.createPdf(docDefinition).download();
	}

	// getData() {
	// 	return this.signattoriesService.getDataSOAP();
	// }
}
