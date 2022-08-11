import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
// import { AuthGuard } from '../core';
// import { SharedModule } from '../shared';
// import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  imports: [],
  declarations: [ListComponent],
  // providers: [EditableArticleResolver]
})
export class ListModule {}
