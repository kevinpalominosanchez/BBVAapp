import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";

@NgModule({
	declarations: [ListComponent],
	exports: [ListComponent],
	imports: [CommonModule, RouterModule],
})
export class SignatoriesModule {}
