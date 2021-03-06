import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NativeScriptModule } from '@nativescript/angular/nativescript.module'
import { NativeScriptFormsModule } from '@nativescript/angular/forms'
import { registerElement } from '@nativescript/angular/element-registry'

import { Fab } from '@nstudio/nativescript-floatingactionbutton'
import { PullToRefresh } from '@nstudio/nativescript-pulltorefresh'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavModalComponent } from './nav/nav-modal.component'
import { isIOS } from './shared/helpers/platform'
import { PlainTextComponent } from './plaintext/plaintext.component'
import { SettingsComponent } from './settings/settings.component'
import { TaskFormComponent } from './task-form/task-form.component'
import { TaskFormAutocompleteComponent } from './task-form/task-form-autocomplete.component'
import { TaskListComponent } from './task-list/task-list.component'
import { TagListComponent } from './tag-list/tag-list.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { AboutComponent } from './about/about.component'

@NgModule({
    declarations: [
        AppComponent,
        NavModalComponent,
        PlainTextComponent,
        SettingsComponent,
        TaskFormComponent,
        TaskFormAutocompleteComponent,
        TaskListComponent,
        TagListComponent,
        WelcomeComponent,
        AboutComponent,
    ],
    entryComponents: [
        NavModalComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {

    constructor() {
        registerElement('Fab', () => Fab)
        registerElement('PullToRefresh', () => PullToRefresh)
        if (isIOS) {
            const iqKeyboard = IQKeyboardManager.sharedManager() // eslint-disable-line no-undef
            iqKeyboard.shouldResignOnTouchOutside = true
        }
    }
}
