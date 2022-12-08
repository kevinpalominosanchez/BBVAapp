import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { SignatoriesModule } from "./signatories/signatories.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		SharedModule,
		SignatoriesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
