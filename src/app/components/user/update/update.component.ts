import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  user: Users;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  updateContact(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('usuario atualizado com sucesso!');
      this.router.navigate(['/users']);
    });
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
