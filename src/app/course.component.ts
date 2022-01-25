import { CourseService } from './course-component-generated-by-console/course.service';
 // metadata que convierte la clase en un component:
import { Component } from '@angular/core' 
//

@Component({                          //decorator function
    selector: 'course',               // anywere we have a .course angular is going to render the template inside the element of the component
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let courses of courses">
            {{ courses }}
        </li>
    </ul>
    `
})
export class CourseComponent{
    title = "list of courses"
    courses: any    //example. (irl youll have objects instead of str)

    //logic for calling an HTTP service XXXX TOO MUCH ISSUESSSS

    constructor(service: CourseService){
        this.courses = service.getCourses()
    }

}