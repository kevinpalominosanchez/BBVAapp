import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxXmlToJsonService } from "ngx-xml-to-json";

@Injectable({
	providedIn: "root",
})
export class SignatoriesService {
	private apiUrl = "/api";

	xmlResult: any = "";

	constructor(
		private http: HttpClient,
		private ngxXmlToJsonService: NgxXmlToJsonService
	) {}

	getDataSOAP() {
		let xmlHttp = new XMLHttpRequest();

		xmlHttp.open("POST", this.apiUrl);

		const body = `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
			<soap:Body>
				<GetWorkstepInformation_v1 xmlns="http://com.xyzmo.server.workstepController.Management/">
				<workstepId>B2124EBC88F3E858A090E466EE67E0611A7E199B7128F4319143CFEF48CF96EF2364E5B771C5382A82D11CED52286215</workstepId>
				</GetWorkstepInformation_v1>
			</soap:Body>
			</soap:Envelope>
		`;

		const options = {
			textKey: "text",
			attrKey: "attr",
			cdataKey: "cdata",
		};

		// esta funcion no hace nada aca, para que funcione se debe dar click 2 veces al boton
		// xmlHttp.onreadystatechange = () => {
		// 	if (xmlHttp.readyState == 4) {
		// 		if (xmlHttp.status == 200) {
		// 			const xml = xmlHttp.responseText;
		// 			this.xmlResult = this.ngxXmlToJsonService.xmlToJson(
		// 				xml,
		// 				options
		// 			);
		// 		}
		// 	}
		// };

		xmlHttp.setRequestHeader("Content-Type", "text/xml");
		xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");

		// esta funcion de ejecuta una vez el endpoint devuelva algo 
		xmlHttp.onload = () => {
			if (xmlHttp.readyState == 4) {
				if (xmlHttp.status == 200) {
					let resp = this.htmlEntities(xmlHttp.response)
					this.xmlResult = this.ngxXmlToJsonService.xmlToJson(
						resp,
						options
					);
					console.log("this.xmlResult: ",this.xmlResult);
				}
			}
		}

		xmlHttp.send(body);

		console.log();
	}

	htmlEntities(str: any) {
		return String(str).replaceAll('&lt;', '<')
						  .replaceAll('&gt;', '>');
	}
}
