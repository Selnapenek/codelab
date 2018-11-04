import { NgModule } from '@angular/core';
import { ReactComponent } from './react.component';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '@angular-presentation/presentation/src/lib/slide-routes';
import { PresentationModule } from '@angular-presentation/presentation';
import { ExerciseModule } from '../../../../../angular-presentation/src/app/exercise/exercise.module';
import { BrowserWindowModule } from '@angular-presentation/browser';
import { SimpleEditorModule } from '../../../../../angular-presentation/src/app/exercise/simple-editor/simple-editor.module';
import { FormsModule } from '@angular/forms';
import { RunnersModule } from '../../../../../angular-presentation/src/app/exercise/runners/runners.module';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes = RouterModule.forChild(
  SlidesRoutes.get(ReactComponent)
);

@NgModule({
  imports: [
    routes,
    PresentationModule,
    FormsModule,
    ExerciseModule,
    BrowserWindowModule,
    SimpleEditorModule,
    RunnersModule,
    FlexLayoutModule,
  ],
  declarations: [ReactComponent],
  exports: [ReactComponent],
  providers: []
})
export class ReactModule {

}