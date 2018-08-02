import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DoingListComponent } from './doing-list/doing-list';
import { CompletedListComponent } from './completed-list/completed-list';
@NgModule({
	declarations: [DoingListComponent,
    CompletedListComponent],
	imports: [IonicModule],
	exports: [DoingListComponent,
    CompletedListComponent]
})
export class ComponentsModule {}
