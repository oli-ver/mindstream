import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { TaskFormComponent } from './task-form.component';
import { DialogService } from '../shared/dialog.service';
import { FileService } from '../shared/file.service';
import { RouterService } from '../shared/router.service';

describe('TaskFormComponent', () => {
    let component: TaskFormComponent;
    let fixture: ComponentFixture<TaskFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TaskFormComponent],
            imports: [ReactiveFormsModule, AngularMyDatePickerModule],
            providers: [
                {provide: DialogService, useValue: {}},
                {provide: FileService, useValue: {}},
                {provide: RouterService, useValue: {}},
                {provide: ActivatedRoute, useValue: {snapshot: {params: {}}}},
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should select project', () => {
        component.projects = ['pro1', 'pro2'];
        component.form.controls.projects.setValue('pro');
        component.projectSuggestionsVisible = true;
        expect(component.selectedProject).toBeUndefined();
        component.selectProject({key: 'ArrowDown'});
        expect(component.selectedProject).toEqual('pro1');
        component.selectProject({key: 'ArrowDown'});
        expect(component.selectedProject).toEqual('pro2');
        component.selectProject({key: 'ArrowDown'});
        expect(component.selectedProject).toEqual('pro2');
        component.selectProject({key: 'ArrowUp'});
        expect(component.selectedProject).toEqual('pro1');
        component.selectProject({key: 'ArrowUp'});
        expect(component.selectedProject).toEqual('pro1');
    });
});
