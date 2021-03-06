import { ViewContainerRef, NgZone } from '@angular/core'

import { Page } from '@nativescript/core/ui/page'

export function onNavigatedTo(container: ViewContainerRef, handler: () => void) {
    const page = container.injector.get(Page)
    const ngZone = container.injector.get(NgZone)
    page.on('navigatedTo', () => {
        // Trigger change detection
        ngZone.run(handler)
    })
}

export function onNavigatingFrom(container: ViewContainerRef, handler: () => void) {
    const page = container.injector.get(Page)
    page.on('navigatingFrom', handler)
}

export function hideActionBar(container: ViewContainerRef) {
    const page = container.injector.get(Page)
    page.actionBarHidden = true
}
