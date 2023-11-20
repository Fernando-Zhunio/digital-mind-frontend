import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MethodsHttpService } from 'src/app/services/methods-http.service';
import { MatInputModule } from '@angular/material/input';
@Component({
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  selector: 'app-create-or-edit-user',
  templateUrl: './create-or-edit-user.component.html',
  styleUrls: ['./create-or-edit-user.component.scss']
})
export class CreateOrEditUserComponent {

  constructor(private http: MethodsHttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateOrEditUserComponent>
    ) { }
    

  }

