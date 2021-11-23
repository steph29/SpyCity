import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { CrudService } from 'src/app/shared/crud.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  id = '';

  constructor(
    private router: Router,
    private crud: CrudService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
    this.crud.deleteAgent(this.id);
    this.crud.deleteMission(this.id);
    this.router.navigate(['/admin']);
  }

  getId() {
    return this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
