import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
@Injectable()
export class SnackBarService {
    constructor(private snackBar: MatSnackBar, private matconfig: MatSnackBarConfig) {}

    showSnackBar(message) {
        this.snackBar.open(message );
        this.matconfig.duration = 2000;
        console.log('hii');
    }
}
