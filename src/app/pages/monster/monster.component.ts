import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css',
})
export class MonsterComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  name = new FormControl('', [Validators.required]);
  monsterId = signal<number | undefined>(undefined);
  routeSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe;
  }

  next() {
    let nextId = this.monsterId() || 0;
    nextId++;
    this.router.navigate(['/monster/' + nextId]);
  }

  submit(event: Event) {
    event.preventDefault();
    console.log('name Value', this.name.value);
  }
}
